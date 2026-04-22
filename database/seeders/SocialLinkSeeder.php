<?php

namespace Database\Seeders;

use App\Models\SocialLink;
use Illuminate\Database\Seeder;

class SocialLinkSeeder extends Seeder
{
    public function run(): void
    {
        $links = [
            ['platform' => 'Facebook',  'url' => 'https://web.facebook.com/cosgroveafrica',           'sort_order' => 1],
            ['platform' => 'Instagram', 'url' => 'https://www.instagram.com/cosgroveafrica',           'sort_order' => 2],
            ['platform' => 'Twitter',   'url' => 'https://twitter.com/cosgroveafrica',                 'sort_order' => 3],
            ['platform' => 'Threads',   'url' => 'https://www.threads.net/@cosgroveafrica',             'sort_order' => 4],
            ['platform' => 'YouTube',   'url' => 'https://www.youtube.com/@CosgroveAfrica',            'sort_order' => 5],
            ['platform' => 'LinkedIn',  'url' => 'https://www.linkedin.com/company/cosgroveafrica',    'sort_order' => 6],
        ];

        foreach ($links as $link) {
            SocialLink::updateOrCreate(
                ['platform' => $link['platform']],
                array_merge($link, ['is_active' => true])
            );
        }
    }
}
