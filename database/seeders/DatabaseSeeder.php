<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            HomepageStatSeeder::class,
            SmartFeatureSeeder::class,
            ContactInfoSeeder::class,
            SocialLinkSeeder::class,
            TeamMemberSeeder::class,
            PressArticleSeeder::class,
            JobListingSeeder::class,
            ProjectSeeder::class,
            HouseTypeSeeder::class,
        ]);
    }
}
