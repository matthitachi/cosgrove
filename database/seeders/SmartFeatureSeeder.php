<?php

namespace Database\Seeders;

use App\Models\SmartFeature;
use Illuminate\Database\Seeder;

class SmartFeatureSeeder extends Seeder
{
    public function run(): void
    {
        $features = [
            ['name' => 'Central Security Control',                'icon_key' => 'central-security-control',               'description' => 'Centralized security monitoring hub for the entire estate.',                   'sort_order' => 1],
            ['name' => 'Automatic Numberplate Recognition',       'icon_key' => 'automatic-numberplate-recognition',      'description' => 'Instant license plate scanning for enhanced security.',                         'sort_order' => 2],
            ['name' => 'Pedestrian Biometric Access Control',     'icon_key' => 'pedestrian-biometric-access-control',    'description' => 'Advanced entry system using unique biometric data.',                            'sort_order' => 3],
            ['name' => 'Facial Recognition',                      'icon_key' => 'facial-recognition',                     'description' => 'Cutting-edge tech for precise identity verification through facial features.',  'sort_order' => 4],
            ['name' => 'Motion Sensors',                          'icon_key' => 'motion-sensors',                         'description' => 'Security devices detecting movement for added safety.',                          'sort_order' => 5],
            ['name' => 'Security Alarm',                          'icon_key' => 'security-alarm',                         'description' => 'Alerts for potential security breaches or emergencies.',                         'sort_order' => 6],
            ['name' => 'Fiber-To-The-Home (FTTH)',                'icon_key' => 'fiber-to-the-home',                      'description' => 'Ultra-fast internet directly to residences through fiber optics.',               'sort_order' => 7],
            ['name' => 'Full Fiber-Optics Cabling Infrastructure','icon_key' => 'full-fiber-optics-cabling',              'description' => 'High-speed data network for seamless connectivity.',                            'sort_order' => 8],
            ['name' => 'Smart Street Lights',                     'icon_key' => 'smart-street-lights',                    'description' => 'Energy-efficient, sensor-equipped lighting for optimized illumination.',         'sort_order' => 9],
            ['name' => 'Swimming Pool & Gym',                     'icon_key' => 'swimming-pool-and-gym',                  'description' => 'On-site amenities for fitness and leisure.',                                     'sort_order' => 10],
            ['name' => 'Uninterrupted Treated Water Supply',      'icon_key' => 'uninterrupted-treated-water-supply',     'description' => 'Reliable, purified water supply without interruptions.',                         'sort_order' => 11],
            ['name' => 'Playground and Greenery',                 'icon_key' => 'playground-and-greenery',                'description' => 'Recreational areas with play facilities and lush landscaping.',                  'sort_order' => 12],
            ['name' => 'Facility Management Services',            'icon_key' => 'facility-management-services',           'description' => 'Expert oversight and maintenance for seamless operations.',                      'sort_order' => 13],
            ['name' => 'Uninterrupted Power Supply',              'icon_key' => 'uninterrupted-power-supply',             'description' => 'Continuous electricity provision with backup systems.',                          'sort_order' => 14],
            ['name' => 'Commercial Hub',                          'icon_key' => 'commercial-hub',                         'description' => 'Vibrant center with shops and businesses for convenience.',                      'sort_order' => 15],
        ];

        foreach ($features as $feature) {
            SmartFeature::updateOrCreate(
                ['name' => $feature['name']],
                array_merge($feature, ['is_active' => true])
            );
        }
    }
}
