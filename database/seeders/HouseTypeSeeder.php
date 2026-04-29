<?php

namespace Database\Seeders;

use App\Models\HouseType;
use App\Models\Project;
use Illuminate\Database\Seeder;

class HouseTypeSeeder extends Seeder
{
    public function run(): void
    {
        $projectId = fn(string $slug): int => Project::where('slug', $slug)->value('id') ?? 0;

        $houseTypes = [
            [
                'project_slug'   => 'cosgrove_smart_estate_mabushi',
                'name'           => 'Acacia',
                'slug'           => 'acacia',
                'beds'           => 4,
                'baths'          => 4,
                'area'           => '284sq m',
                'sort_order'     => 1,
                'description'    => 'Acacia by Cosgrove is a 4-bedroom terrace duplex designed for the discerning homeowner. Each unit boasts an energy-efficient design that harmonizes with its surroundings, ensuring you live lightly on the earth while enjoying all the comforts of modern living. With four well-appointed bathrooms and an additional guest toilet, Acacia offers ample space for both privacy and hospitality.',
                'surface_area'   => '284sq m',
                'parking_spaces' => 3,
                'maids_quarters' => 1,
                'living_rooms'   => 2,
            ],
            [
                'project_slug'   => 'cosgrove_smart_estate_wuye',
                'name'           => 'Oak',
                'slug'           => 'oak',
                'beds'           => 5,
                'baths'          => 5,
                'area'           => '462sq m',
                'sort_order'     => 2,
                'description'    => '"Where Majesty Meets Mindfulness," Oak by Cosgrove is a 5-bedroom detached duplex that redefines the intersection of grandeur and sustainability. Crafted with an energy-efficient design, this architectural masterpiece offers five luxurious bathrooms and an additional guest toilet, ensuring that every square inch resonates with both opulence and responsibility.',
                'surface_area'   => '462sq m',
                'parking_spaces' => 5,
                'maids_quarters' => 1,
                'living_rooms'   => 2,
            ],
            [
                'project_slug'   => 'cosgrove_Smart_city_katampe',
                'name'           => 'Oakville',
                'slug'           => 'oakville',
                'beds'           => 5,
                'baths'          => 5,
                'area'           => '365sq m',
                'sort_order'     => 3,
                'description'    => "Behold the new standard of smart living! Oakville is a 5-bedroom semi-detached duplex that sets the bar for residential excellence. This iconic smart home features three distinct living areas, five en-suite bedrooms complete with walk-in closets, and a spacious kitchen. Additional luxuries include a multi-purpose area, a maid's room, and parking for up to five cars.\n\nStep into the future with state-of-the-art smart home features like fiber-to-the-home (FTTH), high-tech security with biometric access, and optional central air conditioning. Oakville by Cosgrove is more than a home; it's a technological marvel meticulously crafted for tomorrow's lifestyle.",
                'surface_area'   => '365sq m',
                'parking_spaces' => 5,
                'maids_quarters' => 1,
                'living_rooms'   => 2,
            ],
            [
                'project_slug'   => 'cosgrove_smart_estate_wuse_2',
                'name'           => 'Scarlet Oak',
                'slug'           => 'scarlet_oak',
                'beds'           => 5,
                'baths'          => 5,
                'area'           => '449sq m',
                'sort_order'     => 4,
                'description'    => "Behold the new standard of smart living! Oakville is a 5-bedroom semi-detached duplex that sets the bar for residential excellence. This iconic smart home features three distinct living areas, five en-suite bedrooms complete with walk-in closets, and a spacious kitchen. Additional luxuries include a multi-purpose area, a maid's room, and parking for up to five cars.\n\nStep into the future with state-of-the-art smart home features like fiber-to-the-home (FTTH), high-tech security with biometric access, and optional central air conditioning. Oakville by Cosgrove is more than a home; it's a technological marvel meticulously crafted for tomorrow's lifestyle.",
                'surface_area'   => '449sq m',
                'parking_spaces' => 4,
                'maids_quarters' => 1,
                'living_rooms'   => 2,
            ],
            [
                'project_slug'   => 'cosgrove_smart_estate_wuye',
                'name'           => 'Maple',
                'slug'           => 'maple',
                'beds'           => 3,
                'baths'          => 3,
                'area'           => '189sq m',
                'sort_order'     => 5,
                'description'    => '"In Every Room, A Universe of Possibilities," Maple by Cosgrove is a 3-bedroom apartment that transcends conventional design. Each unit unfurls into spacious living rooms and bedrooms, accompanied by three lavish bathrooms and a guest toilet. It\'s a sanctuary meticulously crafted for those who desire room to breathe, both literally and metaphorically.',
                'surface_area'   => '189sq m',
                'parking_spaces' => 2,
                'maids_quarters' => 1,
                'living_rooms'   => 1,
            ],
            [
                'project_slug'   => 'cosgrove_smart_estate_wuye',
                'name'           => 'Maple Penthouse',
                'slug'           => 'maple_penthouse',
                'beds'           => 4,
                'baths'          => 3,
                'area'           => '378sq m',
                'sort_order'     => 6,
                'description'    => 'Ascend to new heights, where the world unfolds beneath you. This Penthouse has set a new benchmark for apartment living. It has four bedrooms, a large living area and an expansive corridor. The penthouse offers a large terrace measuring 113m2 and the entire apartment has a built-up area of 378m2. It has an additional multi-purpose area configurable for gym/study/home cinema, a maid\'s room and designated parking for 2 cars.',
                'surface_area'   => '378sq m',
                'parking_spaces' => 2,
                'maids_quarters' => 1,
                'living_rooms'   => 1,
            ],
            [
                'project_slug'   => 'fourteen',
                'name'           => 'Pine',
                'slug'           => 'pine',
                'beds'           => 3,
                'baths'          => 3,
                'area'           => '255sq m',
                'sort_order'     => 7,
                'description'    => 'Step into a world where sophistication is expected and smart living is assured. Pine by Cosgrove, part of the illustrious Fourteen complex in Wuye, Abuja, provides an elevated living experience with spacious rooms and Cosgrove\'s standard smart home features. Choose between the spacious 3-bedroom Pine Condominiums and the opulent 4-bedroom Pine Penthouse, both of which are designed to appeal to discerning tastes. Every residence includes two-car parking and an elevator, setting a new standard for modern, smart living.',
                'surface_area'   => '255sq m',
                'parking_spaces' => 2,
                'maids_quarters' => 1,
                'living_rooms'   => 1,
            ],
            [
                'project_slug'   => 'fourteen',
                'name'           => 'Pine Penthouse',
                'slug'           => 'pine-pent-house',
                'beds'           => 4,
                'baths'          => 4,
                'area'           => '675sq m',
                'sort_order'     => 8,
                'description'    => 'Step into a world where sophistication is expected and smart living is assured. Pine by Cosgrove, part of the illustrious Fourteen complex in Wuye, Abuja, provides an elevated living experience with spacious rooms and Cosgrove\'s standard smart home features. Choose between the spacious 3-bedroom Pine Condominiums and the opulent 4-bedroom Pine Penthouse, both of which are designed to appeal to discerning tastes. Every residence includes two-car parking and an elevator, setting a new standard for modern, smart living.',
                'surface_area'   => '675sq m',
                'parking_spaces' => 3,
                'maids_quarters' => 1,
                'living_rooms'   => 1,
            ],
            [
                'project_slug'   => 'the_chateaux',
                'name'           => 'Château',
                'slug'           => 'chateau',
                'beds'           => 6,
                'baths'          => 6,
                'area'           => null,
                'sort_order'     => 9,
                'description'    => 'The Château is a 6-bedroom mansion with 6 resplendent bathrooms, this palatial residence is a testament to the seamless blend of traditional grandeur and modern technology. Beyond the bedrooms, the mansion unfolds into a series of luxurious amenities, including a home cinema and a gym, with an option of a swimming pool or garden, each designed to enrich resident\'s daily experience.',
                'surface_area'   => null,
                'parking_spaces' => 6,
                'maids_quarters' => 1,
                'living_rooms'   => 3,
            ],
            [
                'project_slug'   => 'tetra',
                'name'           => 'Olive',
                'slug'           => 'olive',
                'beds'           => 5,
                'baths'          => 5,
                'area'           => '675sq m',
                'sort_order'     => 10,
                'description'    => "A home is the cornerstone in the tapestry of life, where family, innovation, and luxury are intricately woven together. Olive by Cosgrove in Tetra Smart Estate, Wuye, Abuja, is a modern take on the classic family home. This 5-bedroom fully detached home is a work of art in contemporary design, with two living areas and a palatial kitchen. The pent floor's multipurpose area can be converted into a home cinema, gym, or study. An optional lift makes it easy to move between floors, and the 5-car parking space adds to the convenience. Smart technology is seamlessly integrated throughout the home, enhancing the living experience in every room.",
                'surface_area'   => '675sq m',
                'parking_spaces' => 3,
                'maids_quarters' => 1,
                'living_rooms'   => 1,
            ],
            [
                'project_slug'   => 'cosgrove_smart_estate_guzape',
                'name'           => 'Villa',
                'slug'           => 'villa',
                'beds'           => 7,
                'baths'          => 7,
                'area'           => '675sq m',
                'sort_order'     => 11,
                'description'    => '"Every Inch a Masterpiece," the Villa by Cosgrove is a 7-bedroom haven where expansive spaces serve as a canvas for an artful life. With seven meticulously designed bathrooms and three grand living rooms, this residence is a seamless blend of elevated luxury and cutting-edge technology where each space is crafted for a higher level of living and every feature is a tribute to a lifestyle of discerning sophistication.',
                'surface_area'   => '675sq m',
                'parking_spaces' => 3,
                'maids_quarters' => 1,
                'living_rooms'   => 3,
            ],
            [
                'project_slug'   => 'cosgrove_smart_estate_maitama',
                'name'           => 'The Nouveau Villa',
                'slug'           => 'nouveau_villa',
                'beds'           => 6,
                'baths'          => 6,
                'area'           => null,
                'sort_order'     => 12,
                'description'    => "Everything you expect, and then some more. This 6-bedroom villa is more than just a home; it is a reflection of its owners' unique personalities. Finished to perfection, each villa is a symphony of natural light, sophisticated materials, and elegant tones. Large floor-to-ceiling windows illuminate expansive foyers, while high headrooms add an air of grandeur.\n\nThe master bedroom is a sanctuary, complete with a home office and outdoor terrace. Additional spacious bedrooms, accessible walk and bicycle paths, and parking for up to six cars make life here effortlessly luxurious. The community's extra-wide roads, backyard, and mini-garden further elevate the living experience.\n\nResidents of The Nouveau have access to world-class infrastructure, indoor and outdoor recreation and some of the most sophisticated, state-of-the-art security protocols and advanced home automation available anywhere in the world.",
                'surface_area'   => null,
                'parking_spaces' => 6,
                'maids_quarters' => 1,
                'living_rooms'   => 1,
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
                    'project_id'     => $pid,
                    'name'           => $ht['name'],
                    'beds'           => $ht['beds'],
                    'baths'          => $ht['baths'],
                    'area'           => $ht['area'],
                    'sort_order'     => $ht['sort_order'],
                    'description'    => $ht['description'],
                    'surface_area'   => $ht['surface_area'],
                    'parking_spaces' => $ht['parking_spaces'],
                    'maids_quarters' => $ht['maids_quarters'],
                    'living_rooms'   => $ht['living_rooms'],
                ]
            );
        }
    }
}
