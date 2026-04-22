<?php

namespace Database\Seeders;

use App\Models\HomepageStat;
use Illuminate\Database\Seeder;

class HomepageStatSeeder extends Seeder
{
    public function run(): void
    {
        $stats = [
            ['label' => 'Homes Built',    'count_value' => '1000+', 'icon' => '/assets/images/icons/homes.png',    'sort_order' => 1],
            ['label' => 'Projects',       'count_value' => '10+',   'icon' => '/assets/images/icons/projects.png', 'sort_order' => 2],
            ['label' => 'Awards',         'count_value' => '30+',   'icon' => '/assets/images/icons/awards.png',   'sort_order' => 3],
            ['label' => 'Global Clients', 'count_value' => '1000+', 'icon' => '/assets/images/icons/clients.png',  'sort_order' => 4],
        ];

        foreach ($stats as $stat) {
            HomepageStat::updateOrCreate(['label' => $stat['label']], $stat);
        }
    }
}
