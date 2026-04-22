<?php

namespace Database\Seeders;

use App\Models\HouseType;
use App\Models\Project;
use Illuminate\Database\Seeder;

class HouseTypeSeeder extends Seeder
{
    public function run(): void
    {
        // Map of project slug → project ID (resolved at runtime)
        $projectId = fn(string $slug): int => Project::where('slug', $slug)->value('id') ?? 0;

        $houseTypes = [
            [
                'project_slug' => 'cosgrove_smart_estate_mabushi',
                'name'         => 'Acacia',
                'slug'         => 'acacia',
                'beds'         => 4,
                'baths'        => 4,
                'area'         => '284sq m',
                'sort_order'   => 1,
            ],
            [
                'project_slug' => 'cosgrove_smart_estate_wuye',
                'name'         => 'Oak',
                'slug'         => 'oak',
                'beds'         => 5,
                'baths'        => 5,
                'area'         => '462sq m',
                'sort_order'   => 2,
            ],
            [
                'project_slug' => 'cosgrove_Smart_city_katampe',
                'name'         => 'Oakville',
                'slug'         => 'oakville',
                'beds'         => 5,
                'baths'        => 5,
                'area'         => '365sq m',
                'sort_order'   => 3,
            ],
            [
                'project_slug' => 'cosgrove_smart_estate_wuse_2',
                'name'         => 'Scarlet Oak',
                'slug'         => 'scarlet_oak',
                'beds'         => 5,
                'baths'        => 5,
                'area'         => '449sq m',
                'sort_order'   => 4,
            ],
            [
                'project_slug' => 'cosgrove_smart_estate_wuye',
                'name'         => 'Maple',
                'slug'         => 'maple',
                'beds'         => 3,
                'baths'        => 3,
                'area'         => '189sq m',
                'sort_order'   => 5,
            ],
            [
                'project_slug' => 'cosgrove_smart_estate_wuye',
                'name'         => 'Maple Penthouse',
                'slug'         => 'maple_penthouse',
                'beds'         => 4,
                'baths'        => 4,
                'area'         => '378sq m',
                'sort_order'   => 6,
            ],
            [
                'project_slug' => 'fourteen',
                'name'         => 'Pine',
                'slug'         => 'pine',
                'beds'         => 3,
                'baths'        => 3,
                'area'         => '255sq m',
                'sort_order'   => 7,
            ],
            [
                'project_slug' => 'fourteen',
                'name'         => 'Pine Penthouse',
                'slug'         => 'pine-pent-house',
                'beds'         => 4,
                'baths'        => 4,
                'area'         => '675sq m',
                'sort_order'   => 8,
            ],
            [
                'project_slug' => 'the_chateaux',
                'name'         => 'Château',
                'slug'         => 'chateau',
                'beds'         => 6,
                'baths'        => 6,
                'area'         => null,
                'sort_order'   => 9,
            ],
            [
                'project_slug' => 'tetra',
                'name'         => 'Olive',
                'slug'         => 'olive',
                'beds'         => 5,
                'baths'        => 5,
                'area'         => '675sq m',
                'sort_order'   => 10,
            ],
            [
                'project_slug' => 'cosgrove_smart_estate_guzape',
                'name'         => 'Villa',
                'slug'         => 'villa',
                'beds'         => 7,
                'baths'        => 7,
                'area'         => '675sq m',
                'sort_order'   => 11,
            ],
            [
                'project_slug' => 'cosgrove_smart_estate_maitama',
                'name'         => 'The Nouveau Villa',
                'slug'         => 'nouveau_villa',
                'beds'         => 6,
                'baths'        => 6,
                'area'         => null,
                'sort_order'   => 12,
            ],
        ];

        foreach ($houseTypes as $ht) {
            $pid = $projectId($ht['project_slug']);
            if (! $pid) {
                $this->command->warn("Project [{$ht['project_slug']}] not found, skipping [{$ht['name']}]");
                continue;
            }

            HouseType::updateOrCreate(
                ['slug' => $ht['slug']],
                [
                    'project_id' => $pid,
                    'name'       => $ht['name'],
                    'beds'       => $ht['beds'],
                    'baths'      => $ht['baths'],
                    'area'       => $ht['area'],
                    'sort_order' => $ht['sort_order'],
                ]
            );
        }
    }
}
