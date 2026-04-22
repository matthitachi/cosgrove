<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $projects = [
            [
                'name'         => 'The Nouveau by Cosgrove, Maitama',
                'slug'         => 'cosgrove_smart_estate_maitama',
                'location'     => 'Maitama',
                'status'       => 'published',
                'show_in_home' => true,
                'sort_order'   => 1,
                'description'  => 'In architecture, as in life, the boldest visions yield the most transformative realities." The Nouveau by Cosgrove in Maitama, Abuja, is not just a development; it\'s a citadel of impenetrable security and cutting-edge automation. Each of the six-bedroom villas is an oasis unto itself, complete with a private pool and garden. Situated in a district synonymous with global-caliber infrastructure, The Nouveau is more than a sanctuary—it\'s the epitome of a life less ordinary, where every square inch resonates with unparalleled sophistication.',
            ],
            [
                'name'         => 'Cosgrove Smart Estate, Wuye',
                'slug'         => 'cosgrove_smart_estate_wuye',
                'location'     => 'Wuye',
                'status'       => 'published',
                'show_in_home' => true,
                'sort_order'   => 2,
                'description'  => 'Redefining intelligent living in Abuja, Cosgrove Smart Estate Wuye sets the benchmark. Spanning 4.32 hectares, the estate features 160 units each equipped with the latest smart home technology. Cosgrove Smart Estate Wuye offers amenities such as AI face recognition cameras, ANRP (Automatic Number Plate Recognition), smart water treatment, and a playground set within landscaped gardens, and proximity to the Central Business District, Wuse 2 and Maitama. Cosgrove Wuye is a testament to unparalleled sophistication.',
            ],
            [
                'name'         => 'Cosgrove Smart Estate, Mabushi',
                'slug'         => 'cosgrove_smart_estate_mabushi',
                'location'     => 'Mabushi',
                'status'       => 'published',
                'show_in_home' => true,
                'sort_order'   => 3,
                'description'  => 'Constructed with the philosophy of progressivism, Cosgrove Smart Estate Mabushi is an evolution of luxury living in Abuja. Nestled in Mabushi\'s serene environment, this estate boasts 22 state-of-the-art units, blending smart technology with modern design. With proximity to key landmarks and unmatched amenities like 24-hour security, well-maintained gardens, and recreational facilities, it\'s not just a home—it\'s a lifestyle.',
            ],
            [
                'name'         => 'Cosgrove Smart Estate, Guzape',
                'slug'         => 'cosgrove_smart_estate_guzape',
                'location'     => 'Guzape',
                'status'       => 'published',
                'show_in_home' => false,
                'sort_order'   => 4,
                'description'  => 'Three words describe Cosgrove Smart Estate Guzape: Opulence, Sophistication, and Security. Nestled amidst Guzape\'s lush hills, this estate offers a limited collection of five 7-bedroom villas and one-bedroom maid\'s quarters, each with its own swimming pool or private garden. Situated minutes from iconic landmarks like the Transcorp Hilton and ECOWAS Secretariat, these villas elevate modern living.',
            ],
            [
                'name'         => 'Tetra by Cosgrove, Wuye',
                'slug'         => 'tetra',
                'location'     => 'Wuye',
                'status'       => 'published',
                'show_in_home' => false,
                'sort_order'   => 5,
                'description'  => 'Tetra by Cosgrove in Wuye stands as an elite gated enclave, curated for the discerning tech aficionado with a penchant for luxury. Every residence is an artful blend of contemporary design, expansive spaces, and impeccable finishes, all enhanced by cutting-edge smart technology. Nestled in Abuja\'s prime locale, it positions you just moments away from the city\'s iconic landmarks.',
            ],
            [
                'name'         => 'Cosgrove Smart City, Katampe',
                'slug'         => 'cosgrove_Smart_city_katampe',
                'location'     => 'Katampe',
                'status'       => 'published',
                'show_in_home' => false,
                'sort_order'   => 6,
                'description'  => 'The strategically positioned Cosgrove Smart Estate in Katampe finds itself adjacent to Ministers\' Hills, Maitama, enhancing its allure. The 1.5km access road, expertly constructed by Cosgrove, facilitates easy admission to the Nnamdi Azikiwe Highway. The estate spans approximately 38 hectares in total, with Phase 1 covering 11.9 hectares and Phase 2 extending over 23 hectares.',
            ],
            [
                'name'         => 'The Châteaux by Cosgrove, Wuse 2',
                'slug'         => 'the_chateaux',
                'location'     => 'Wuse 2',
                'status'       => 'published',
                'show_in_home' => true,
                'sort_order'   => 7,
                'description'  => 'There are spaces that transcend the ordinary, becoming the epitome of artistry and grandeur. The Châteaux by Cosgrove in Abuja is such a realm. Conceived as a blend of tradition and technology, each ultra-luxurious mansion boasts eight-bedrooms, a private garden, and pool. Amenities like a home cinema and gym elevate daily life, fortified by 24/7 security and state-of-the-art surveillance.',
            ],
            [
                'name'         => 'Fourteen by Cosgrove, Wuye',
                'slug'         => 'fourteen',
                'location'     => 'Wuye',
                'status'       => 'published',
                'show_in_home' => false,
                'sort_order'   => 8,
                'description'  => 'The Fourteen by Cosgrove in Wuye, Abuja, represents a blend of modern design and practical living. This community offers 13 Pine condos and a standout penthouse, all designed with smart features for today\'s lifestyle. With amenities like a pool and gym, coupled with 24/7 security, it ensures both comfort and peace of mind.',
            ],
            [
                'name'         => 'Cosgrove Exclusive Estate, Wuse 2',
                'slug'         => 'cosgrove_smart_estate_wuse_2',
                'location'     => 'Wuse 2',
                'status'       => 'published',
                'show_in_home' => false,
                'sort_order'   => 9,
                'description'  => 'Nestled in the northwestern expanse of Abuja, Wuse 2 emerges as a vibrant hub, pulsating with the city\'s vitality. Cosgrove Exclusive Estate, situated in Wuse 2, stands adorned with 12 units of the exquisite SCARLET OAK — an illustrious 5-bedroom townhouse with an additional maid\'s quarter.',
            ],
        ];

        foreach ($projects as $project) {
            Project::updateOrCreate(['slug' => $project['slug']], $project);
        }
    }
}
