<?php

namespace Database\Seeders;

use App\Models\ContactPerson;
use Illuminate\Database\Seeder;

class ContactPersonSeeder extends Seeder
{
    public function run(): void
    {
        $persons = [
            [
                'name'       => 'Dr. Chioma Ugwu',
                'title'      => 'Director, Business Development',
                'email'      => 'chioma.ugwu@cosgroveafrica.com',
                'sort_order' => 1,
                'is_active'  => true,
            ],
            [
                'name'       => 'Sakana D. Philip',
                'title'      => 'Director, Corporate Communications & Branding',
                'email'      => 'sakana.dikko@cosgroveafrica.com',
                'sort_order' => 2,
                'is_active'  => true,
            ],
            [
                'name'       => 'QS Bridget .O. Musa (FNIQS RQS MBA)',
                'title'      => 'Commercial Director',
                'email'      => 'bridget.musa@cosgroveafrica.com',
                'sort_order' => 3,
                'is_active'  => true,
            ],
            [
                'name'       => 'Nafisa Aliyu',
                'title'      => 'Head, Digital Marketing',
                'email'      => 'nafisa.aliyu@cosgroveafrica.com',
                'sort_order' => 4,
                'is_active'  => true,
            ],
            [
                'name'       => 'Fatima Mbaka',
                'title'      => 'Head, Customer Service',
                'email'      => 'fatima.mbaka@cosgroveafrica.com',
                'sort_order' => 5,
                'is_active'  => true,
            ],
            [
                'name'       => 'Blessing Chinedu-Uzoh',
                'title'      => 'Head, health and safety environment',
                'email'      => 'chinedu.uzoh@cosgroveafrica.com',
                'sort_order' => 6,
                'is_active'  => true,
            ],
            [
                'name'       => 'Tosin Afolabi',
                'title'      => 'Head of Project Monitoring Office',
                'email'      => 'afolabi.tosin@cosgroveafrica.com',
                'sort_order' => 7,
                'is_active'  => true,
            ],
        ];

        foreach ($persons as $person) {
            ContactPerson::updateOrCreate(
                ['email' => $person['email']],
                $person
            );
        }

        $photoMap = [
            'chioma.ugwu@cosgroveafrica.com'   => 'chioma.jpg',
            'sakana.dikko@cosgroveafrica.com'   => 'sakana.jpg',
            'bridget.musa@cosgroveafrica.com'   => 'lslkf.png',
            'nafisa.aliyu@cosgroveafrica.com'   => 'nafisa.jpg',
            'fatima.mbaka@cosgroveafrica.com'   => 'fatima.jpg',
            'chinedu.uzoh@cosgroveafrica.com'   => 'blesssing.jpg',
            'afolabi.tosin@cosgroveafrica.com'  => 'generic.jpg',
        ];

        foreach ($photoMap as $email => $filename) {
            $person = ContactPerson::where('email', $email)->first();
            if (! $person) continue;

            if ($person->getFirstMedia('photo')) continue;

            $path = public_path('assets/images/contacts/' . $filename);
            if (file_exists($path)) {
                $person->addMedia($path)
                       ->preservingOriginal()
                       ->toMediaCollection('photo');
            } else {
                $this->command->warn('Photo not found: ' . $path);
            }
        }
    }
}
