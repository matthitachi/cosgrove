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
        $dryRun   = $this->option('dry-run');
        $imported = 0;
        $skipped  = 0;

        // ── Projects ──────────────────────────────────────────────────────────
        // Convention: landscape.jpg → hero | portrait.jpg → thumbnail | gallery/ → gallery
        $projectMap = [
            'cosgrove_smart_estate_maitama' => 'assets/images/projects/maitama',
            'cosgrove_smart_estate_wuye'    => 'assets/images/projects/wuye',
            'cosgrove_smart_estate_mabushi' => 'assets/images/projects/mabushi',
            'cosgrove_smart_estate_guzape'  => 'assets/images/projects/guzape',
            'tetra'                         => 'assets/images/projects/tetra',
            'cosgrove_Smart_city_katampe'   => 'assets/images/projects/katampe',
            'the_chateaux'                  => 'assets/images/projects/chateaux',
            'fourteen'                      => 'assets/images/projects/fourteen',
            'cosgrove_smart_estate_wuse_2'  => 'assets/images/projects/wuse2',
        ];

        foreach ($projectMap as $slug => $folder) {
            $project = Project::where('slug', $slug)->first();
            if (! $project) {
                $this->warn("Project not found: {$slug}");
                $skipped++;
                continue;
            }

            if (! $dryRun) {
                $project->clearMediaCollection('hero');
                $project->clearMediaCollection('thumbnail');
                $project->clearMediaCollection('gallery');
            }

            $basePath = public_path($folder);

            $this->importSingle($project, 'hero',      $basePath . '/landscape.jpg', "{$folder}/landscape.jpg", $slug, $dryRun, $imported);
            $this->importSingle($project, 'thumbnail', $basePath . '/portrait.jpg',  "{$folder}/portrait.jpg",  $slug, $dryRun, $imported);
            $this->importGallery($project, $basePath . '/gallery', $slug, $dryRun, $imported);
        }

        // ── Team Members ──────────────────────────────────────────────────────
        $teamMap = [
            'Umar Abdullahi, OFR.'   => 'assets/images/teams/umar.jpg',
            'Engr. Madhur Tripathi'  => 'assets/images/teams/madhur.jpg',
            'Engr. Baba Kalli'       => 'assets/images/teams/kalli.jpg',
            'Babangida Mukaddas'     => 'assets/images/teams/IMG_7052.jpeg',
            'Raymond Ricketts'       => 'assets/images/teams/IMG_5999.JPG',
            'Elizabeth Taylor'       => 'assets/images/teams/elizabeth.jpg',
            'Barr. Adeoba Ademoyega' => 'assets/images/teams/adeoba.jpg',
        ];

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

        // ── House Types ───────────────────────────────────────────────────────
        // Convention: landscape.jpg → hero | portrait.jpg → thumbnail | gallery/ → gallery
        // Map value is either a folder string or array with 'folder' + optional 'portrait' override.
        $houseTypeMap = [
            'acacia'          => 'assets/images/house-types/acacia',
            'oak'             => 'assets/images/house-types/oak',
            'oakville'        => 'assets/images/house-types/oakville',
            'scarlet_oak'     => 'assets/images/house-types/scarlet-oak',
            'maple'           => 'assets/images/house-types/maple',
            'maple_penthouse' => [
                'folder'   => 'assets/images/house-types/maple',
                'portrait' => 'penthouse_potrait.jpeg',
            ],
            'pine'            => 'assets/images/house-types/pine',
            'pine-pent-house' => 'assets/images/house-types/pine-penthouse',
            'chateau'         => 'assets/images/house-types/the-chateau',
            'olive'           => 'assets/images/house-types/olive',
            'villa'           => 'assets/images/house-types/villa',
            'nouveau_villa'   => 'assets/images/house-types/maitama',
        ];

        foreach ($houseTypeMap as $slug => $entry) {
            $houseType = \App\Models\HouseType::where('slug', $slug)->first();
            if (! $houseType) {
                $this->warn("House type not found: {$slug}");
                $skipped++;
                continue;
            }

            $folder        = is_array($entry) ? $entry['folder']   : $entry;
            $portraitFile  = is_array($entry) ? $entry['portrait'] : 'portrait.jpg';

            if (! $dryRun) {
                $houseType->clearMediaCollection('hero');
                $houseType->clearMediaCollection('thumbnail');
                $houseType->clearMediaCollection('gallery');
                $houseType->clearMediaCollection('floorplan');
            }

            $basePath = public_path($folder);

            $this->importSingle($houseType, 'hero',      $basePath . '/landscape.jpg',   "{$folder}/landscape.jpg",  $slug, $dryRun, $imported);
            $this->importSingle($houseType, 'thumbnail', $basePath . '/' . $portraitFile, "{$folder}/{$portraitFile}", $slug, $dryRun, $imported);
            $this->importGallery($houseType, $basePath . '/gallery', $slug, $dryRun, $imported);

            // Floorplan — any file named floorplan.*
            $floorplanFiles = glob($basePath . '/floorplan.*') ?: [];
            if (! empty($floorplanFiles)) {
                $fp  = $floorplanFiles[0];
                $rel = $folder . '/' . basename($fp);
                if ($dryRun) {
                    $this->line("  [floorplan] {$slug} ← {$rel}");
                } else {
                    $houseType->addMedia($fp)->preservingOriginal()->toMediaCollection('floorplan');
                    $imported++;
                }
            }
        }

        if ($dryRun) {
            $this->info('Dry run complete — no changes made.');
        } else {
            $this->info("Import complete. Imported: {$imported}, Skipped: {$skipped}.");
        }

        return self::SUCCESS;
    }

    private function importSingle($model, string $collection, string $path, string $rel, string $slug, bool $dryRun, int &$imported): void
    {
        if (! file_exists($path)) {
            $this->warn("  [missing] {$slug} {$collection} ← {$rel}");
            return;
        }
        if ($dryRun) {
            $this->line("  [{$collection}] {$slug} ← {$rel}");
        } else {
            $model->addMedia($path)->preservingOriginal()->toMediaCollection($collection);
            $imported++;
        }
    }

    private function importGallery($model, string $galleryDir, string $slug, bool $dryRun, int &$imported): void
    {
        if (! is_dir($galleryDir)) {
            return;
        }
        $files = collect(scandir($galleryDir))
            ->filter(fn ($f) => ! in_array($f, ['.', '..']))
            ->filter(fn ($f) => preg_match('/\.(jpg|jpeg|png|webp)$/i', $f))
            ->sort()
            ->values();

        foreach ($files as $file) {
            $fullPath = $galleryDir . '/' . $file;
            if ($dryRun) {
                $this->line("  [gallery]  {$slug} ← gallery/{$file}");
            } else {
                $model->addMedia($fullPath)->preservingOriginal()->toMediaCollection('gallery');
                $imported++;
            }
        }
    }
}
