<?php

namespace Database\Seeders;

use App\Models\ContactInfo;
use Illuminate\Database\Seeder;

class ContactInfoSeeder extends Seeder
{
    public function run(): void
    {
        $entries = [
            ['key' => 'phone_1',  'value' => '+2349060001552', 'type' => 'phone',   'label' => 'Phone 1'],
            ['key' => 'phone_2',  'value' => '+2349060001553', 'type' => 'phone',   'label' => 'Phone 2'],
            ['key' => 'email',    'value' => 'info@cosgroveafrica.com', 'type' => 'email', 'label' => 'Email'],
            ['key' => 'address',  'value' => '4th Floor, Mukhtar El Yakub Building, Zakariyya Maimalari Street, Central Business District Abuja. FCT 900211 Nigeria', 'type' => 'text', 'label' => 'Address'],
            ['key' => 'maps_url', 'value' => 'https://goo.gl/maps/TPhMKJvJRiVSMSRD9', 'type' => 'url', 'label' => 'Google Maps URL'],
        ];

        foreach ($entries as $entry) {
            ContactInfo::updateOrCreate(['key' => $entry['key']], $entry);
        }
    }
}
