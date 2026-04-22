<?php

namespace Database\Seeders;

use App\Models\TeamMember;
use Illuminate\Database\Seeder;

class TeamMemberSeeder extends Seeder
{
    public function run(): void
    {
        $members = [
            [
                'name'         => 'Umar Abdullahi, OFR.',
                'position'     => 'Chairman/Chief Executive Officer',
                'bio'          => 'The Cosgrove founder, Umar comes with over 2 decades varied experience in Real estate, infrastructure and technology. Notably, Umar served as the pioneer Managing Director of Brains & Hammers Ltd. for 8 years. He directed the foundations for the company\'s success; and spearheaded the conceptualization, development, construction, and management of a myriad of housing estates and gated communities. He is specially adept at managing complex projects and diverse teams.',
                'bio_extended' => 'Umar also brings extensive experience from his corporate banking background as well as expertise in negotiations with a commitment to compliance with corporate governance and fiscal discipline. An astute leader whose vision is achieving Cosgrove strategic business goals. His variegated International Executive Leadership training programs equip him for his new role to steer the company to achieve its long-term vision. Umar is a graduate of Bayero University, Kano and an alumnus of Cranfield University, UK and attends the Harvard Business School Executive Programs.',
                'sort_order'   => 1,
                'is_active'    => true,
            ],
            [
                'name'         => 'Engr. Madhur Tripathi',
                'position'     => 'Chief Infrastructure Officer',
                'bio'          => 'Tripathi brings explicit knowledge and expertise to the Cosgrove team. He has worked on notable projects with notable construction firms in Nigeria; including Dantata and Sawoe and Julius Berger Nigeria Ltd executing major civil (infrastructure and building) projects within Nigeria. Engr Tripathi has over 20 years extensive professional experience in quality control, construction & supervision of highways (both rigid and flexible pavements) and building projects.',
                'bio_extended' => 'He is a member of The Council of the Regulation of Engineering in Nigeria (COREN), The Institute of Engineers and a distinguished Member of Indian Road Congress (IRC). A Civil Engineering graduate with Masters degree (ME) in Geotechnical Engineering (Soil and foundation engineering) from MBM Engineering Collage Jodhpur India.',
                'sort_order'   => 2,
                'is_active'    => true,
            ],
            [
                'name'         => 'Engr. Baba Kalli',
                'position'     => 'Chief Technical Officer',
                'bio'          => 'A graduate of Civil and Water Resources Engineering from the University of Maiduguri, Engr. B. Kalli brings over 20 years of experience in the Real Estate & Construction Industry – Designing, Constructing and Managing both Public and Private projects across Nigeria. He directed the foundations for the company\'s success; and spearheaded the conceptualization, development, construction, and management of a myriad of housing estates and gated communities.',
                'bio_extended' => 'Prior to this he also served as a Principal Engineer and later Consultant to Futune Nig. Ltd leading the construction of several Turnkey projects including the NIPC building Maitama, Abuja; NSITF office at Wuse 2, Abuja; BUA Estate Asokoro, Abuja; and the British Preparatory School Wuse 2, Abuja. A registered member of the Council for the Regulation of Engineering in Nigeria (COREN), Engr. Baba Kalli\'s dedication, professionalism and unflagging attention-to-detail ensures all Cosgrove offerings are built and delivered to exceptional quality standards.',
                'sort_order'   => 3,
                'is_active'    => true,
            ],
            [
                'name'         => 'Babangida Mukaddas',
                'position'     => 'Chief Operating Officer',
                'bio'          => 'Babangida is an executive leader with over 20 years of experience driving operational excellence across the telecommunications and corporate administration sectors. As the Chief Operating Officer of Cosgrove, he oversees the company\'s strategic operations, ensuring that the brand\'s commitment to innovation, premium delivery and operational excellence remains unparalleled in the real estate and construction industry. Prior to joining Cosgrove, Babangida built a formidable career holding senior leadership positions at Nigeria\'s telecommunications giants, including MTN Nigeria, Etisalat, 9mobile, and Globacom.',
                'bio_extended' => 'His expertise lies at the intersection of strategic business growth, Operations management, and organizational governance. Beyond his operational mandates, Babangida is a passionate advocate for people development. He is deeply committed to fostering a culture of continuous learning and mentorship, believing that organizational excellence is a direct result of empowered, high-performing teams. Babangida holds a Bachelor\'s degree in Accounting, an MBA, and a Master\'s in Information and Communication Technology from Bayero University, Kano. He is a Certified National Accountant (CNA) and a Senior Member of the Chartered Institute of Loans and Risk Management of Nigeria.',
                'sort_order'   => 4,
                'is_active'    => true,
            ],
            [
                'name'         => 'Raymond Ricketts',
                'position'     => 'Chief Information Technology Officer',
                'bio'          => 'Engr Raymond Ricketts, Chief Information Technology Officer at Cosgrove Investment Limited, brings over 18 years of experience in the Information and Communications Technology industry. A graduate of Engineering from the Federal University of Technology Minna, he has excelled in various roles across corporate and government sectors, leading transformative projects and driving significant advancements. At Cosgrove, Engr Raymond is committed to innovation and strategic excellence, pushing the boundaries of technology and fostering continuous growth.',
                'bio_extended' => null,
                'sort_order'   => 5,
                'is_active'    => true,
            ],
            [
                'name'         => 'Elizabeth Taylor',
                'position'     => 'Chief Admin Officer',
                'bio'          => 'Liz, an Arch Bishop Tutu Fellow of the African Leadership Institute is a business strategist with proven strength tactically executing strategy and delivering on organizational goals. She believes in the combined role of people driven tactics and systems in delivering excellence to all stakeholders. After a multidisciplinary role spanning nearly 16 years, Liz knows what truly drives business process, customer engagement, and strategy.',
                'bio_extended' => 'Liz is an accomplished people developer and trainer with a unique method for creating high performing teams. She is an alumnus of the Said Business School Leadership program (with African Leadership Institute) and Wharton Business School Real Estate program on Housing Finance & Securitization. In addition to her extensive multidisciplinary experience, Liz is also a certified customer service strategist and coach; she is also a published author. Liz is a Business Administration graduate of University of Abuja, with an MSc in Knowledge Management from the Aberdeen Business School.',
                'sort_order'   => 6,
                'is_active'    => true,
            ],
            [
                'name'         => 'Barr. Adeoba Ademoyega',
                'position'     => 'Legal Adviser',
                'bio'          => 'Adeoba specializes in real estate development from the point of execution of Joint Venture agreements: with Joint Development Partners (where applicable) to overseeing the process of construction, sales of commercial and or housing units and unto the facility management of such estates and overseeing of all legal matters. As Lead Adviser to one Nigeria\'s largest real estate companies in Abuja he currently supervises and is in charge of about ten (10) estates within the Federal Capital Territory comprising of over 1000 housing units.',
                'bio_extended' => 'He was part of the legal team engaged by the China Civil Engineering Construction Corporation (CCECC) to negotiate with the Federal Government of Nigeria in 2006 for the Railway Modernization Project valued at Eight Billion Three Hundred Million USD dollars ($8,300,000,000). Adeoba is a graduate of Law from the Ogun State University, Ago-Iwoye and was called to the Nigerian Bar in 1999. He is a Notary Public of the Federal Republic of Nigeria.',
                'sort_order'   => 7,
                'is_active'    => true,
            ],
        ];

        foreach ($members as $member) {
            TeamMember::updateOrCreate(['name' => $member['name']], $member);
        }
    }
}
