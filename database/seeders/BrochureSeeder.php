<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\ProjectBrochure;
use Illuminate\Database\Seeder;

class BrochureSeeder extends Seeder
{
    public function run(): void
    {
        $brochures = [
            [
                'project_slug' => 'fourteen',
                'title'        => 'Fourteen by Cosgrove Brochure',
                'pdf'          => 'fourteen-by-cosgrove.pdf',
                'cover'        => 'fourteen.png',
                'cover_path'   => 'assets/images/bg/',
                'sort_order'   => 1,
            ],
            [
                'project_slug' => 'the_chateaux',
                'title'        => 'The Châteaux by Cosgrove Brochure',
                'pdf'          => 'the-chateaux-by-cosgrove.pdf',
                'cover'        => 'chateaux.png',
                'cover_path'   => 'assets/images/bg/',
                'sort_order'   => 1,
            ],
            [
                'project_slug' => 'cosgrove_smart_estate_wuye',
                'title'        => 'Cosgrove General Brochure',
                'pdf'          => 'general-brochure.pdf',
                'cover'        => null,
                'cover_path'   => null,
                'sort_order'   => 2,
            ],
        ];

        foreach ($brochures as $data) {
            $project = Project::where('slug', $data['project_slug'])->first();
            if (! $project) {
                $this->command->warn('Project not found: ' . $data['project_slug']);
                continue;
            }

            $brochure = ProjectBrochure::firstOrCreate(
                [
                    'project_id' => $project->id,
                    'title'      => $data['title'],
                ],
                ['sort_order' => $data['sort_order']]
            );

            if (! $brochure->getFirstMedia('brochure')) {
                $pdfPath = public_path('assets/brochures/' . $data['pdf']);
                if (file_exists($pdfPath)) {
                    $brochure->addMedia($pdfPath)
                             ->preservingOriginal()
                             ->toMediaCollection('brochure');
                    $this->command->info('PDF imported: ' . $data['title']);
                } else {
                    $this->command->warn('PDF not found: ' . $pdfPath);
                }
            }

            if ($data['cover'] && ! $brochure->getFirstMedia('cover')) {
                $coverPath = public_path(($data['cover_path'] ?? 'assets/brochures/') . $data['cover']);
                if (file_exists($coverPath)) {
                    $brochure->addMedia($coverPath)
                             ->preservingOriginal()
                             ->toMediaCollection('cover');
                    $this->command->info('Cover imported: ' . $data['title']);
                } else {
                    $this->command->warn('Cover not found: ' . $coverPath);
                }
            }
        }
    }
}
