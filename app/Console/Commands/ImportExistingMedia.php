<?php

namespace App\Console\Commands;

use App\Models\Project;
use App\Models\TeamMember;
use Illuminate\Console\Command;

class ImportExistingMedia extends Command
{
    protected $signature   = 'cms:import-media {--dry-run : List what would be imported without doing it}';
    protected $description = 'Import existing public/assets images into Spatie Media Library';

    public function handle(): int
    {
        $dryRun = $this->option('dry-run');

        // hero = landscape.jpg (main display), gallery = gallery/ subdir
        $projectMap = [
            'cosgrove_smart_estate_maitama' => 'maitama',
            'cosgrove_smart_estate_wuye'    => 'wuye',
            'cosgrove_smart_estate_mabushi' => 'mabushi',
            'cosgrove_smart_estate_guzape'  => 'guzape',
            'tetra'                         => 'tetra',
            'cosgrove_Smart_city_katampe'   => 'katampe',
            'the_chateaux'                  => 'chateaux',
            'fourteen'                      => 'fourteen',
            'cosgrove_smart_estate_wuse_2'  => 'wuse2',
        ];

        $teamMap = [
            'Umar Abdullahi, OFR.'    => 'assets/images/teams/umar.jpg',
            'Engr. Madhur Tripathi'   => 'assets/images/teams/madhur.jpg',
            'Engr. Baba Kalli'        => 'assets/images/teams/kalli.jpg',
            'Babangida Mukaddas'      => 'assets/images/teams/IMG_7052.jpeg',
            'Raymond Ricketts'        => 'assets/images/teams/IMG_5999.JPG',
            'Elizabeth Taylor'        => 'assets/images/teams/elizabeth.jpg',
            'Barr. Adeoba Ademoyega'  => 'assets/images/teams/adeoba.jpg',
        ];

        $imported = 0;
        $skipped  = 0;

        // ── Projects ─────────────────────────────────────────────────────────
        foreach ($projectMap as $slug => $folder) {
            $project = Project::where('slug', $slug)->first();
            if (! $project) {
                $this->warn("Project not found: {$slug}");
                $skipped++;
                continue;
            }

            $base = public_path("assets/images/projects/{$folder}");

            // Hero — skip if already has media
            $heroPath = "{$base}/landscape.jpg";
            if (file_exists($heroPath)) {
                if ($dryRun) {
                    $this->line("  [hero]    {$slug} ← assets/images/projects/{$folder}/landscape.jpg");
                } elseif ($project->getFirstMedia('hero') === null) {
                    $project->addMedia($heroPath)->preservingOriginal()->toMediaCollection('hero');
                    $imported++;
                } else {
                    $this->line("  [skip]    {$slug} hero already attached");
                    $skipped++;
                }
            } else {
                $this->warn("  [missing] {$heroPath}");
            }

            // Gallery
            $galleryFiles = collect(glob("{$base}/gallery/*.{jpg,jpeg,png,webp}", GLOB_BRACE))
                ->sort()
                ->values();

            $existingGalleryCount = $project->getMedia('gallery')->count();

            if ($galleryFiles->isEmpty()) {
                $this->line("  [skip]    {$slug} — no gallery files found");
            } elseif (! $dryRun && $existingGalleryCount > 0) {
                $this->line("  [skip]    {$slug} gallery ({$existingGalleryCount} already attached)");
                $skipped += $existingGalleryCount;
            } else {
                foreach ($galleryFiles as $galleryPath) {
                    $rel = 'assets/images/projects/' . $folder . '/gallery/' . basename($galleryPath);
                    if ($dryRun) {
                        $this->line("  [gallery] {$slug} ← {$rel}");
                    } else {
                        $project->addMedia($galleryPath)->preservingOriginal()->toMediaCollection('gallery');
                        $imported++;
                    }
                }
            }
        }

        // ── Team Members ─────────────────────────────────────────────────────
        foreach ($teamMap as $name => $assetPath) {
            $member = TeamMember::where('name', $name)->first();
            if (! $member) {
                $this->warn("Team member not found: {$name}");
                $skipped++;
                continue;
            }

            $path = public_path($assetPath);
            if (! file_exists($path)) {
                $this->warn("  [missing] {$path}");
                $skipped++;
                continue;
            }

            if ($dryRun) {
                $this->line("  [photo]   {$name} ← {$assetPath}");
            } elseif ($member->getFirstMedia('photo') === null) {
                $member->addMedia($path)->preservingOriginal()->toMediaCollection('photo');
                $imported++;
            } else {
                $this->line("  [skip]    {$name} photo already attached");
                $skipped++;
            }
        }

        if ($dryRun) {
            $this->info('Dry run complete — no changes made.');
        } else {
            $this->info("Import complete. Imported: {$imported}, Skipped: {$skipped}.");
        }

        return self::SUCCESS;
    }
}
