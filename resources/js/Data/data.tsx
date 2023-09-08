import {ProjectItemProp} from "../Components/Elements/ProjectItem";
import {RecordItemProp} from "../Components/Elements/RecordList";
import * as React from "react";

// @ts-ignore
import { ReactComponent as AutomaticNumberPlaceRecognition } from "/public/assets/images/features/automatic-numberplate-recognition.svg";

// @ts-ignore
import { ReactComponent as CentralSecurityControl } from "/public/assets/images/features/central-security-control.svg";
// @ts-ignore
import { ReactComponent as CommercialHub } from "/public/assets/images/features/commercial-hub.svg";
// @ts-ignore
import { ReactComponent as FacialRecognition } from "/public/assets/images/features/facial-recognition.svg";
// @ts-ignore
import { ReactComponent as FacilityManagementDervices } from "/public/assets/images/features/facility-management-services.svg";
// @ts-ignore
import { ReactComponent as FiberToTheHome } from "/public/assets/images/features/fiber-to-the-home.svg";
// @ts-ignore
import { ReactComponent as FullFiberOpticsCabling } from "/public/assets/images/features/full-fiber-optics-cabling.svg";
// @ts-ignore
import { ReactComponent as MotionSensors } from "/public/assets/images/features/motion-sensors.svg";
// @ts-ignore
import { ReactComponent as PedestrianBiometricAccessControl } from "/public/assets/images/features/pedestrian-biometric-access-control.svg";
// @ts-ignore
import { ReactComponent as PlaygroundAndGreenery } from "/public/assets/images/features/playground-and-greenery.svg";
// @ts-ignore
import { ReactComponent as SecurityAlarm } from "/public/assets/images/features/security-alarm.svg";
// @ts-ignore
import { ReactComponent as SmartStreetLights } from "/public/assets/images/features/smart-street-lights.svg";
// @ts-ignore
import { ReactComponent as SwimmingPoolAndGym } from "/public/assets/images/features/swimming-pool-and-gym.svg";
// @ts-ignore
import { ReactComponent as UninterruptedPowerSupply } from "/public/assets/images/features/uninterrupted-power-supply.svg";
// @ts-ignore
import { ReactComponent as UninterruptedTreatedWaterSupply } from "/public/assets/images/features/uninterrupted-treated-water-supply.svg";


export interface houseTypeItemProps {
    img: string;
    name: string;
    desc: string;
    slug: string;
    projectSlug: string[];
    headerImg: string
    detailsImg: string
    moreDesc: string;
    galleryBasePath: string
    gallery: string[],
    specs: RecordItemProp[]
}
export const estateFeatures = [

    {
        img: <CentralSecurityControl/>,
        title: 'Central Security Control:',
        subText: 'Centralized security monitoring hub for the entire estate.',
    },
    {
        img: <AutomaticNumberPlaceRecognition/>,
        title: 'Automatic Numberplate Recognition',
        subText: 'Instant license plate scanning for enhanced security.',
    },

    {
        img: <PedestrianBiometricAccessControl/>,
        title: 'Pedestrian Biometric Access Control',
        subText: 'Advanced entry system using unique biometric data.',
    },
    {
        img: <FacialRecognition/>,
        title: 'Facial Recognition',
        subText: 'Cutting-edge tech for precise identity verification through facial features.',
    },
    {
        img: <MotionSensors/>,
        title: 'Motion Sensors',
        subText: 'Security devices detecting movement for added safety.',
    },
    {
        img: <SecurityAlarm/>,
        title: 'Security Alarm',
        subText: 'Alerts for potential security breaches or emergencies.',
    },
    {
        img: <FiberToTheHome/>,
        title: 'Fiber-To-The-Home (FTTH)',
        subText: 'Ultra-fast internet directly to residences through fiber optics.',
    },
    {
        img: <FullFiberOpticsCabling/>,
        title: 'Full Fiber-Optics Cabling Infrastructure',
        subText: 'High-speed data network for seamless connectivity.',
    },
    {
        img: <SmartStreetLights/>,
        title: 'Smart Street Lights',
        subText: 'Energy-efficient, sensor-equipped lighting for optimized illumination.',
    },
    {
        img: <SwimmingPoolAndGym/>,
        title: 'Swimming Pool & Gym',
        subText: 'On-site amenities for fitness and leisure.',
    },
    {
        img: <UninterruptedTreatedWaterSupply/>,
        title: 'Uninterrupted Treated Water Supply',
        subText: 'Reliable, purified water supply without interruptions.',
    },
    {
        img: <PlaygroundAndGreenery/>,
        title: 'Playground and Greenery',
        subText: 'Recreational areas with play facilities and lush landscaping.',
    },
    {
        img: <FacilityManagementDervices/>,
        title: 'Facility Management Services',
        subText: 'Expert oversight and maintenance for seamless operations.',
    },
    {
        img: <UninterruptedPowerSupply/>,
        title: 'Uninterrupted Power Supply',
        subText: 'Continuous electricity provision with backup systems',
    },
    {
        img: <CommercialHub/>,
        title: 'Commercial Hub',
        subText: 'Vibrant center with shops and businesses for convenience.',
    },
]
export const projects: ProjectItemProp[] = [

    {
        name: 'Nouveaux by Cosgrove, Maitama',
        slug: 'cosgrove_smart_estate_maitama',
        location: 'Maitama',
        description: 'In architecture, as in life, the boldest visions yield the most transformative realities." The Nouveau by Cosgrove in Maitama, Abuja, is not just a development; it\'s a revelation. Forged in a Public-Private Partnership with The Nigeria Police, it\'s a citadel of impenetrable security and cutting-edge automation. Each of the 14 six-bedroom villas is an oasis unto itself, complete with a private pool and garden. Situated in a district synonymous with global-caliber infrastructure, The Nouveau is more than a sanctuary—it\'s the epitome of a life less ordinary, where every square inch resonates with unparalleled sophistication\n',
        detailsImg: '/assets/images/projects/maitama/portrait.jpg',
        mainImg: '/assets/images/projects/maitama/landscape.jpg',
        distFeature: [
            {
                image: "/assets/images/icons/homes.png",
                title: "To Wuse",
                count: "8 mins",
            },
            {
                image: "/assets/images/icons/projects.png",
                title: "To  Silverbird Galleria",
                count: "10 mins",
            },
            {
                image: "/assets/images/icons/awards.png",
                title: "To Airport",
                count: "28 mins",
            },
            {
                image: "/assets/images/icons/clients.png",
                title: "To Diplomatic Drive",
                count: "7 mins",
            },
        ],
        galleryBasePath: '/assets/images/projects/maitama/gallery/',
        gallery: [
            '01_exterior.jpg',
            '02_exterior.jpg',
            '03_exterior.jpg',
            '04_exterior.jpg',
            '05_exterior.jpg',
            '06_exterior.jpg',
            '07_exterior.jpg',
            '08_exterior.jpg',
            '09_exterior.jpg',
            '10_exterior.jpg',
            '11_exterior.jpg',
            '12_exterior.jpg',
            '13_exterior.jpg',
            '14_exterior.jpg',
            '15_exterior.jpg',
            '16_exterior.jpg',
            '17_exterior.jpg',
            '18_exterior.jpg',
            '20_exterior.jpg',
        ],
        showInHome: true,
        estateFeatures: [
           estateFeatures[0],
           estateFeatures[1],
           estateFeatures[2],
           estateFeatures[3],
           estateFeatures[4],
           estateFeatures[5],
           estateFeatures[6],
           estateFeatures[7],
           estateFeatures[8],
           estateFeatures[9],
           estateFeatures[10],
           estateFeatures[11],
           estateFeatures[12],
           estateFeatures[12],
           estateFeatures[14],

        ]
    },
    {
        name: 'Cosgrove Smart Estate, Wuye',
        slug: 'cosgrove_smart_estate_wuye',
        location: 'Wuye',
        description: 'How do you redefine intelligent living in Abuja? Cosgrove Smart Estate Wuye sets the benchmark. Spanning 4.32 hectares, the estate boasts 160 units each equipped with the latest smart home tech. Cosgrove Estate Wuye boasts amenities such as AI face recognition cameras, ANRP (Automatic Number Plate Recognition), smart water treatment, a playground, and a clubhouse set within landscaped gardens, and proximity to the Central Business District, Wuse 2 and Maitamaa. Cosgrove Wuye is a testament to unparalleled sophistication.\n',
        detailsImg: '/assets/images/projects/wuye/portrait.jpg',
        mainImg: '/assets/images/projects/wuye/landscape.jpg',
        distFeature: [
            {
                image: "/assets/images/icons/homes.png",
                title: "To Wuse",
                count: "8 mins",
            },
            {
                image: "/assets/images/icons/projects.png",
                title: "To  Silverbird Galleria",
                count: "10 mins",
            },
            {
                image: "/assets/images/icons/awards.png",
                title: "To Airport",
                count: "28 mins",
            },
            {
                image: "/assets/images/icons/clients.png",
                title: "To Diplomatic Drive",
                count: "7 mins",
            },
        ],
        galleryBasePath: '/assets/images/projects/wuye/gallery/',
        gallery: [
            'AG8A0011_interior.jpg',
            'AG8A0149_interior.jpg',
            'AG8A0186_interior.jpg',
            'AG8A0187_interior.jpg',
            'AG8A0191_interior.jpg',
            'AG8A0193_interior.jpg',
            'AG8A0201_interior.jpg',
            'AG8A0215_exterior.jpg',
            'AG8A0220_exterior.jpg',
            'AG8A0223_interior.jpg',
            'AG8A0229_interior.jpg',
            'AG8A0230_interior.jpg',
            'AG8A0232_interior.jpg',
            'AG8A0310_exterior.jpg',
            'AG8A0311_exterior.jpg',
            'AG8A0318_exterior.jpg',
            'AG8A0320_exterior.jpg',
            'AG8A0322_exterior.jpg',
            'AG8A0329_exterior.jpg',
            'AG8A0338_exterior.jpg',
            'AG8A02601_exterior.jpg',
            'AG8A02951_exterior.jpg',
            'AG8A3088_exterior.jpg',
            'AG8A3090_exterior.jpg',
            'AG8A3102_exterior.jpg',
            'AG8A3794_exterior.jpg',
            'AG8A3842_exterior.jpg',
            'AG8A3993_interior.jpg',
            'AG8A4063_interior.jpg',
            'AG8A4168_interior.jpg',
            'AG8A4298_interior.jpg',
            'AG8A9524_interior.jpg',
            'AG8A9533_interior.jpg',
            'AG8A9554_interior.jpg',
            'AG8A9555_interior.jpg',
            'AG8A9567_interior.jpg',
            'AG8A9575_interior.jpg',
            'AG8A9586_interior.jpg',
            'AG8A9589_interior.jpg',
            'AG8A9592_interior.jpg',
            'AG8A9595_interior.jpg',
            'AG8A9609_interior.jpg',
            'AG8A9621_interior.jpg',
            'AG8A9630_interior.jpg',
            'AG8A9643_interior.jpg',
            'AG8A9646_interior.jpg',
            'AG8A9662_interior.jpg',
            'AG8A9678_interior.jpg',
            'AG8A9688_interior.jpg',
            'AG8A9693_interior.jpg',
            'AG8A9701_interior.jpg',
            'AG8A9702_interior.jpg',
            'AG8A9762_interior.jpg',
            'AG8A9822_interior.jpg',
            'AJ3A0131_interior.jpg',
            'AJ3A0161_interior.jpg',
            'AJ3A0191_interior.jpg',
            'AJ3A0194_interior.jpg',
            'AJ3A0201_interior.jpg',
            'AJ3A0203_interior.jpg',
            'AJ3A0206_interior.jpg',
            'AJ3A0209_interior.jpg',
            'AJ3A0219_interior.jpg',
            'AJ3A0237_interior.jpg',
            'AJ3A0240_interior.jpg',
            'AJ3A0279_exterior.jpg',
            'AJ3A0281_exterior.jpg',
            'AJ3A0288_exterior.jpg',
            'AJ3A0292_exterior.jpg',
            'AJ3A0296_exterior.jpg',
            'AJ3A0298_exterior.jpg',
            'AJ3A9980_interior.jpg',
            'AJ3A9985_interior.jpg',
            'AJ3A9994_interior.jpg',
            'CGV1_exterior.jpg',
            'CGV2_exterior.jpg',
            'CGV3_exterior.jpg',
            'CGV4_exterior.jpg',
            'CGV12_exterior.jpg',
            'CGV17_exterior.jpg',
            'CGV18_exterior.jpg',
            'CGV19_exterior.jpg',
            'CGV20_exterior.jpg',
            'CGV21_exterior.jpg',
            'CGV22_exterior.jpg',
            'CGV23_exterior.jpg',
            'CGV24_exterior.jpg',
            'CGV25_exterior.jpg',
            'CGV26_exterior.jpg',
        ],
        showInHome: true,
        estateFeatures: [
            estateFeatures[0],
            estateFeatures[1],
            estateFeatures[2],
            estateFeatures[3],
            estateFeatures[4],
            estateFeatures[5],
            estateFeatures[6],
            estateFeatures[7],
            estateFeatures[8],
            estateFeatures[9],
            estateFeatures[10],
            estateFeatures[11],
            estateFeatures[12],
            estateFeatures[12],
            estateFeatures[14],

        ]
    },
    {
        name: 'Cosgrove Smart Estate, Mabushi',
        slug: 'cosgrove_smart_estate_mabushi',
        location: 'Mabushi',
        description: ' Constructed with the philosophy of progressivism, Cosgrove Smart Estate Mabushi is an evolution of luxury living in Abuja. Nestled in Mabushi\'s serene environment, this estate boasts 22 state-of-the-art units, blending smart technology with modern design. With proximity to key landmarks and unmatched amenities like 24-hour security, well-maintained gardens, and recreational facilities, it\'s not just a home—it\'s a lifestyle.\n',
        detailsImg: '/assets/images/projects/mabushi/portrait.jpg',
        mainImg: '/assets/images/projects/mabushi/landscape.jpg',
        distFeature: [
            {
                image: "/assets/images/icons/homes.png",
                title: "To Wuse",
                count: "8 mins",
            },
            {
                image: "/assets/images/icons/projects.png",
                title: "To  Silverbird Galleria",
                count: "10 mins",
            },
            {
                image: "/assets/images/icons/awards.png",
                title: "To Airport",
                count: "28 mins",
            },
            {
                image: "/assets/images/icons/clients.png",
                title: "To Diplomatic Drive",
                count: "7 mins",
            },
        ],
        galleryBasePath: '/assets/images/projects/mabushi/gallery/',
        gallery: [
            'mabushi1_exterior.jpg',
            'mabushi2_exterior.jpg',
            'mabushi3_exterior.jpg',
            'mabushi4_exterior.jpg'
        ],
        showInHome: true,
        estateFeatures: [
            estateFeatures[0],
            estateFeatures[1],
            estateFeatures[2],
            estateFeatures[3],
            estateFeatures[4],
            estateFeatures[5],
            estateFeatures[6],
            estateFeatures[7],
            estateFeatures[8],
            estateFeatures[9],
            estateFeatures[10],
            estateFeatures[11],
            estateFeatures[12],
            estateFeatures[12],
            estateFeatures[14],

        ]
    },
    {
        name: 'Cosgrove Smart Estate, Guzape',
        slug: 'cosgrove_smart_estate_guzape',
        location: 'Guzape',
        description: 'Three words describe Cosgrove Smart Estate Guzape: Opulence, Sophistication, and Security. Nestled amidst Guzape\'s lush hills, this estate offers a limited collection of five 7-bedroom villas and one-bedroom maid’s quarters, each with its own swimming pool and private garden. Situated minutes from iconic landmarks like the Transcorp Hilton and ECOWAS Secretariat, these villas elevate modern living. With 24/7 security, power supply, cutting-edge smart amenities, and a tranquil ambiance framed by verdant landscapes, each home is a statement.\n',
        detailsImg: '/assets/images/projects/guzape/portrait.jpg',
        mainImg: '/assets/images/projects/guzape/landscape.jpg',
        distFeature: [
            {
                image: "/assets/images/icons/homes.png",
                title: "To Wuse",
                count: "8 mins",
            },
            {
                image: "/assets/images/icons/projects.png",
                title: "To  Silverbird Galleria",
                count: "10 mins",
            },
            {
                image: "/assets/images/icons/awards.png",
                title: "To Airport",
                count: "28 mins",
            },
            {
                image: "/assets/images/icons/clients.png",
                title: "To Diplomatic Drive",
                count: "7 mins",
            },
        ],
        galleryBasePath: '/assets/images/projects/guzape/gallery/',
        gallery: [
            'GZP1_exterior.jpg',
            'GZP2_exterior.jpg',
            'GZP3_exterior.jpg',
            'GZP4_exterior.jpg',
            'GZP5_exterior.jpg',
            'GZP6_exterior.jpg',
            'GZP7_exterior.jpg'
        ],
    estateFeatures: [
    estateFeatures[0],
    estateFeatures[1],
    estateFeatures[2],
    estateFeatures[3],
    estateFeatures[4],
    estateFeatures[5],
    estateFeatures[6],
    estateFeatures[7],
    estateFeatures[8],
    estateFeatures[9],
    estateFeatures[10],
    estateFeatures[11],
    estateFeatures[12],
    estateFeatures[12],
    estateFeatures[14],

]
    },
    {
        name: 'Tetra by Cosgrove, Wuye',
        slug: 'tetra',
        location: 'Wuye',
        description: 'In architecture, as in life, the boldest visions yield the most transformative realities." The Nouveau by Cosgrove in Maitama, Abuja, is not just a development; it\'s a revelation. Forged in a Public-Private Partnership with The Nigeria Police, it\'s a citadel of impenetrable security and cutting-edge automation. Each of the 14 six-bedroom villas is an oasis unto itself, complete with a private pool and garden. Situated in a district synonymous with global-caliber infrastructure, The Nouveau is more than a sanctuary—it\'s the epitome of a life less ordinary, where every square inch resonates with unparalleled sophistication\n',
        detailsImg: '/assets/images/projects/tetra/portrait.jpg',
        mainImg: '/assets/images/projects/tetra/landscape.jpg',
        distFeature: [
            {
                image: "/assets/images/icons/homes.png",
                title: "To Wuse",
                count: "8 mins",
            },
            {
                image: "/assets/images/icons/projects.png",
                title: "To  Silverbird Galleria",
                count: "10 mins",
            },
            {
                image: "/assets/images/icons/awards.png",
                title: "To Airport",
                count: "28 mins",
            },
            {
                image: "/assets/images/icons/clients.png",
                title: "To Diplomatic Drive",
                count: "7 mins",
            },
        ],
        galleryBasePath: '/assets/images/projects/tetra/gallery/',
        gallery: [
            'siteplan_exterior.jpg',
            'afternoon1_exterior.jpg',
            'afternoon2_exterior.jpg',
            'afternoon3_exterior.jpg',
            'afternoon4_exterior.jpg',
            'night2_exterior.jpg',
            'night3_exterior.jpg'
        ],
        estateFeatures: [
            estateFeatures[0],
            estateFeatures[1],
            estateFeatures[2],
            estateFeatures[3],
            estateFeatures[4],
            estateFeatures[5],
            estateFeatures[6],
            estateFeatures[7],
            estateFeatures[8],
            estateFeatures[9],
            estateFeatures[10],
            estateFeatures[11],
            estateFeatures[12],
            estateFeatures[12],
            estateFeatures[14],

        ]
    },
    {
        name: 'Cosgrove Smart City, Katampe',
        slug: 'cosgrove_Smart_city_katampe',
        location: 'Katampe',
        description: 'The strategically positioned Cosgrove Smart Estate in Katampe finds itself adjacent to Ministers’ Hills, Maitama, enhancing its allure. The 1.5km access road, expertly constructed by Cosgrove, facilitates easy admission to the Nnamdi Azikiwe Highway, greatly enhancing convenience for reaching different parts of Abuja. The estate spans approximately 38 hectares in total, with Phase 1 covering 11.9 hectares and Phase 2 extending over 23 hectares. Additionally, a dedicated 2.99 hectares are reserved for recreational amenities, complementing the wide array of available house types within this expansive project.',
        detailsImg: '/assets/images/projects/katampe/portrait.jpg',
        mainImg: '/assets/images/projects/katampe/landscape.jpg',
        distFeature: [],
        galleryBasePath: '/assets/images/projects/katampe/gallery/',
        gallery: [
            'AJ3A0298_exterior.jpg',
            'CGV4_exterior.jpg',
            'CGV24_exterior.jpg',
            'gallery3_exterior.jpg',
            'GZP4_exterior.jpg',
            'new-Photo-scaled_exterior.jpg',
            'r2p-2048x1152_exterior.jpg',
            'r3-2048x1319_exterior.jpg'
        ],
        estateFeatures: [
            estateFeatures[0],
            estateFeatures[1],
            estateFeatures[2],
            estateFeatures[3],
            estateFeatures[4],
            estateFeatures[5],
            estateFeatures[6],
            estateFeatures[7],
            estateFeatures[8],
            estateFeatures[9],
            estateFeatures[10],
            estateFeatures[11],
            estateFeatures[12],
            estateFeatures[12],
            estateFeatures[14],

        ]
    },
    {
        name: 'The Châteaux by Cosgrove, Wuse 2',
        slug: 'the_chateaux',
        location: 'Wuse 2',
        description: 'There are spaces that transcend the ordinary, becoming the epitome of artistry and grandeur." The Châteaux by Cosgrove in Abuja is such a realm. Conceived as a blend of tradition and technology, each ultra-luxurious mansion boasts eight-bedrooms, a private garden, and pool. Amenities like a home cinema and gym elevate daily life, fortified by 24/7 security and state-of-the-art surveillance. Located in Wuse, Abuja\'s prime locale, The Châteaux is a compelling symphony of life\'s finest offerings.',
        detailsImg: '/assets/images/projects/chateaux/portrait.jpg',
        mainImg: '/assets/images/projects/chateaux/landscape.jpg',
        distFeature: [
            {
                image: "/assets/images/icons/homes.png",
                title: "To Wuse",
                count: "8 mins",
            },
            {
                image: "/assets/images/icons/projects.png",
                title: "To  Silverbird Galleria",
                count: "10 mins",
            },
            {
                image: "/assets/images/icons/awards.png",
                title: "To Airport",
                count: "28 mins",
            },
            {
                image: "/assets/images/icons/clients.png",
                title: "To Diplomatic Drive",
                count: "7 mins",
            },
        ],
        galleryBasePath: '/assets/images/projects/chateaux/gallery/',
        gallery: [
            '1_exterior.jpg',
            '3_exterior.jpg',
            '4_exterior.jpg',
            '6_exterior.jpg',
            '7_exterior.jpg',
            '11_exterior.jpg',
            '12_exterior.jpg',
            '13_exterior.jpg',
            '15_exterior.jpg',
            '16_exterior.jpg',
            '17_exterior.jpg',
        ],
        showInHome: true,
        estateFeatures: [
            estateFeatures[0],
            estateFeatures[1],
            estateFeatures[2],
            estateFeatures[3],
            estateFeatures[4],
            estateFeatures[5],
            estateFeatures[6],
            estateFeatures[7],
            estateFeatures[8],
            estateFeatures[9],
            estateFeatures[10],
            estateFeatures[11],
            estateFeatures[12],
            estateFeatures[12],
            estateFeatures[14],

        ]
    },
    {
        name: 'Fourteen by Cosgrove, Wuye',
        slug: 'fourteen',
        location: 'Wuye',
        description: 'Can a sanctuary also serve as a beacon of modern innovation?" The Fourteen by Cosgrove in Wuye, Abuja, answers this query in bricks, glass, and cutting-edge technology. This gated enclave offers 13 Pine condos and an opulent penthouse, each a haven of smart living. With state-of-the-art amenities like a swimming pool and gym, and fortified by round-the-clock security, it\'s a realm where comfort meets modernity. Proximity to schools, hospitals, and malls makes it not just a home, but the heart of convenience.\n',
        detailsImg: '/assets/images/projects/fourteen/portrait.jpg',
        mainImg: '/assets/images/projects/fourteen/landscape.jpg',
        distFeature: [
            {
                image: "/assets/images/icons/homes.png",
                title: "To Wuse",
                count: "8 mins",
            },
            {
                image: "/assets/images/icons/projects.png",
                title: "To  Silverbird Galleria",
                count: "10 mins",
            },
            {
                image: "/assets/images/icons/awards.png",
                title: "To Airport",
                count: "28 mins",
            },
            {
                image: "/assets/images/icons/clients.png",
                title: "To Diplomatic Drive",
                count: "7 mins",
            },
        ],
        galleryBasePath: '/assets/images/projects/fourteen/gallery/',
        gallery: [
            'street-view3_exterior.jpg',
            'afternoon-site-elevation_exterior.jpg',
            'afternoon-view_exterior.jpg',
            'evening-view_exterior.jpg',
            'pent-flow-view_exterior.jpg',
            'site-plan-2_exterior.jpg'
        ],
        estateFeatures: [
            estateFeatures[0],
            estateFeatures[1],
            estateFeatures[2],
            estateFeatures[3],
            estateFeatures[4],
            estateFeatures[5],
            estateFeatures[6],
            estateFeatures[7],
            estateFeatures[8],
            estateFeatures[9],
            estateFeatures[10],
            estateFeatures[11],
            estateFeatures[12],
            estateFeatures[12],
            estateFeatures[14],

        ]
    },
    {
        name: 'Cosgrove Smart Estate, Wuse 2',
        slug: 'cosgrove_smart_estate_wuse_2',
        location: 'Wuse 2',
        description: 'Nestled in the northwestern expanse of Abuja, Wuse 2 emerges as a vibrant hub, pulsating with the city’s vitality. Cosgrove Smart City, situated in Wuse 2, stands adorned with 12 units of the exquisite SCARLET OAK — an illustrious 5-bedroom townhouse with an additional maid’s quarter. Encircled by meticulously planned infrastructure, it finds itself amidst a plethora of amenities, ensuring an existence of untroubled convenience within this estate’s welcoming embrace. Living here not only guarantees comfort but also an oasis of tranquility at the center of bustling urban life.',
        detailsImg: '/assets/images/projects/wuse2/portrait.jpg',
        mainImg: '/assets/images/projects/wuse2/landscape.jpg',
        distFeature: [],
        galleryBasePath: '/assets/images/projects/wuse2/gallery/',
        gallery: [
            'scarlet-oak_exterior.jpg',
            'scarlet-oak2_exterior.jpg'
        ],
        estateFeatures: [
            estateFeatures[0],
            estateFeatures[1],
            estateFeatures[2],
            estateFeatures[3],
            estateFeatures[4],
            estateFeatures[5],
            estateFeatures[6],
            estateFeatures[7],
            estateFeatures[8],
            estateFeatures[9],
            estateFeatures[10],
            estateFeatures[11],
            estateFeatures[12],
            estateFeatures[12],
            estateFeatures[14],

        ]
    },
];

export const houseTypes: houseTypeItemProps[] = [
    {
        img: '/assets/images/house-types/acacia/portrait.jpg',
        name: 'Acacia',
        slug: 'acacia',
        projectSlug: ['cosgrove_smart_estate_mabushi', 'cosgrove_smart_estate_wuye', 'cosgrove_Smart_city_katampe'],
        desc: ' 4 Bedroom Terrace',
        headerImg: '/assets/images/house-types/acacia/landscape.jpg',
        detailsImg: '/assets/images/acacia.png',
        moreDesc: 'Acacia by Cosgrove is a 4-bedroom terrace duplex designed for the discerning homeowner. Each unit boasts an energy-efficient design that harmonizes with its surroundings, ensuring you live lightly on the earth while enjoying all the comforts of modern living. With four well-appointed bathrooms and an additional guest toilet, Acacia offers ample space for both privacy and hospitality.\n',
        galleryBasePath: '/assets/images/house-types/acacia/gallery/',
        gallery: [
            'AG8A0318_exterior.jpg',
            'AG8A0320_exterior.jpg',
            'AG8A0322_exterior.jpg',
            'AG8A0329_exterior.jpg',
            'AJ3A0298_exterior.jpg',
            'CGV4_exterior.jpg'
        ],
        specs: [
            {
                image: "/assets/images/icons/surface.png",
                title: "Surface Area",
                count: "284sq m",
            },
            {
                image: "/assets/images/icons/spaces.png",
                title: "Parking Spaces",
                count: "3",
            },
            {
                image: "/assets/images/icons/maid.png",
                title: "Maid’s Quarters",
                count: "1",
            },
            {
                image: "/assets/images/icons/bed.png",
                title: "Bedrooms",
                count: "4",
            },
            {
                image: "/assets/images/icons/bath.png",
                title: "Bathrooms",
                count: "4",
            },
            {
                image: "/assets/images/icons/room.png",
                title: "Living Rooms",
                count: "2",
            },
        ],
    },
    {
        img: '/assets/images/house-types/oak/portrait.jpg',
        name: 'Oak',
        desc: '5-Bedroom Fully Detached Duplex',
        slug: 'oak',
        projectSlug: ['cosgrove_smart_estate_mabushi', 'cosgrove_smart_estate_wuye', 'cosgrove_Smart_city_katampe'],
        headerImg: '/assets/images/house-types/oak/landscape.jpg',
        detailsImg: '',
        moreDesc: ' "Where Majesty Meets Mindfulness,” Oak by Cosgrove is a 5-bedroom detached duplex that redefines the intersection of grandeur and sustainability. Crafted with an energy-efficient design, this architectural masterpiece offers five luxurious bathrooms and an additional guest toilet, ensuring that every square inch resonates with both opulence and responsibility.\n',
        galleryBasePath: '/assets/images/house-types/oak/gallery/',
        gallery: [
            'new_1-Photo-scaled_exterior.jpg',
            'r3-2048x1319_exterior.jpg'
        ],

        specs: [
            {
                image: "/assets/images/icons/surface.png",
                title: "Surface Area",
                count: "462sq m",
            },
            {
                image: "/assets/images/icons/spaces.png",
                title: "Parking Spaces",
                count: "5",
            },
            {
                image: "/assets/images/icons/maid.png",
                title: "Maid’s Quarters",
                count: "1",
            },
            {
                image: "/assets/images/icons/bed.png",
                title: "Bedrooms",
                count: "5",
            },
            {
                image: "/assets/images/icons/bath.png",
                title: "Bathrooms",
                count: "5",
            },
            {
                image: "/assets/images/icons/room.png",
                title: "Living Rooms",
                count: "2",
            },
        ],

    },
    {
        img: '/assets/images/house-types/oakville/portrait.jpg',
        name: 'Oakville',
        desc: '5-Bedroom Semi-Detached Duplex',
        slug: 'oak',
        projectSlug: ['cosgrove_Smart_city_katampe'],
        headerImg: '//assets/images/house-types/oakville/portrait.jpg',
        detailsImg: '',
        moreDesc: 'Behold the new standard of smart living! Oakville by Cosgrove in Katampe, Abuja, is a 5-bedroom fully detached duplex that sets the bar for residential excellence. This iconic smart home boasts three distinct living areas, five en-suite bedrooms complete with walk-in closets, and a spacious kitchen. Additional luxuries include a multi-purpose area, a maid\'s room, and parking for up to five cars. Step into the future with state-of-the-art smart home features like fiber-to-the-home (FTTH), high-tech security with biometric access, and optional central air conditioning. Oakville by Cosgrove is more than a home; it\'s a technological marvel meticulously crafted for tomorrow\'s lifestyle.\n',
        galleryBasePath: '/assets/images/house-types/oakville/gallery/',
        gallery: [
            'gallery3_exterior.jpg',
            'r2p-2048x1152_exterior.jpg'
        ],
        specs: [
            {
                image: "/assets/images/icons/surface.png",
                title: "Surface Area",
                count: "365sq m",
            },
            {
                image: "/assets/images/icons/spaces.png",
                title: "Parking Spaces",
                count: "5",
            },
            {
                image: "/assets/images/icons/maid.png",
                title: "Maid’s Quarters",
                count: "1",
            },
            {
                image: "/assets/images/icons/bed.png",
                title: "Bedrooms",
                count: "5",
            },
            {
                image: "/assets/images/icons/bath.png",
                title: "Bathrooms",
                count: "5",
            },
            {
                image: "/assets/images/icons/room.png",
                title: "Living Rooms",
                count: "2",
            },
        ],

    },
    {
        img: '/assets/images/house-types/scarlet-oak/portrait.jpg',
        name: 'Scarlet Oak',
        desc: '5-Bedroom Townhouse',
        slug: 'oak',
        projectSlug: ['cosgrove_smart_estate_wuse_2'],
        headerImg: '/assets/images/house-types/scarlet-oak/landscape.jpg',
        detailsImg: '',
        moreDesc: 'A fine blend of technology and architectural brilliance defines Scarlet Oak by Cosgrove. Nestled in the serene neighborhood of Wuse 2, Abuja, this 5-bedroom townhouse is a tribute to the scarlet oak tree, known for its stunning fall foliage. Each residence features a master bedroom, four additional spacious bedrooms, all en-suite, and high-quality bathrooms. The design extends to an exquisite courtyard and two inviting living areas, complete with a maid\'s room for added convenience.',
        galleryBasePath: '/assets/images/house-types/scarlet-oak/gallery/',
        gallery: [
            'scarlet-oak_exterior.jpg',
            'scarlet-oak2_exterior.jpg'
        ],
        specs: [
            {
                image: "/assets/images/icons/surface.png",
                title: "Surface Area",
                count: "449sq m",
            },
            {
                image: "/assets/images/icons/spaces.png",
                title: "Parking Spaces",
                count: "4",
            },
            {
                image: "/assets/images/icons/maid.png",
                title: "Maid’s Quarters",
                count: "1",
            },
            {
                image: "/assets/images/icons/bed.png",
                title: "Bedrooms",
                count: "5",
            },
            {
                image: "/assets/images/icons/bath.png",
                title: "Bathrooms",
                count: "5",
            },
            {
                image: "/assets/images/icons/room.png",
                title: "Living Rooms",
                count: "2",
            },
        ],

    },
    {
        img: '/assets/images/house-types/maple/portrait.jpg',
        name: 'Maple',
        desc: '3-Bedroom Apartment',
        slug: 'maple',
        projectSlug: ['cosgrove_smart_estate_wuye', 'cosgrove_Smart_city_katampe'],
        headerImg: '/assets/images/house-types/maple/landscape.jpg',
        detailsImg: '',
        moreDesc: ' “In Every Room, A Universe of Possibilities,” Maple by Cosgrove is a 3-bedroom apartment that transcends conventional design. Each unit unfurls into spacious living rooms and bedrooms, accompanied by three lavish bathrooms and a guest toilet. It\'s a sanctuary meticulously crafted for those who desire room to breathe, both literally and metaphorically.\n',
        galleryBasePath: '/assets/images/house-types/maple/gallery/',
        gallery: [
            'CGV17_exterior.jpg',
            'CGV18_exterior.jpg',
            'CGV19_exterior.jpg',
            'CGV24_exterior.jpg'
        ],
        specs: [
            {
                image: "/assets/images/icons/surface.png",
                title: "Surface Area",
                count: "189sq m",
            },
            {
                image: "/assets/images/icons/spaces.png",
                title: "Parking Spaces",
                count: "2",
            },
            {
                image: "/assets/images/icons/maid.png",
                title: "Maid’s Quarters",
                count: "1",
            },
            {
                image: "/assets/images/icons/bed.png",
                title: "Bedrooms",
                count: "3",
            },
            {
                image: "/assets/images/icons/bath.png",
                title: "Bathrooms",
                count: "3",
            },
            {
                image: "/assets/images/icons/room.png",
                title: "Living Rooms",
                count: "1",
            },
        ],
    },
    {
        img: '/assets/images/house-types/pine/portrait.jpg',
        name: 'Pine',
        desc: '3-Bedroom Condominium',
        slug: 'pine',
        projectSlug: ['fourteen'],
        headerImg: '/assets/images/house-types/pine/landscape.jpg',
        detailsImg: '',
        moreDesc: ' Step into a world where sophistication is expected and smart living is assured." Pine by Cosgrove, part of the illustrious Fourteen complex in Wuye, Abuja, provides an elevated living experience with spacious rooms and Cosgrove\'s standard smart home features. Choose between the spacious 3-bedroom Pine Condominiums and the opulent 4-bedroom Pine Penthouse, both of which are designed to appeal to discerning tastes. Every residence includes two-car parking and an elevator, setting a new standard for modern, smart living.',
        galleryBasePath: '/assets/images/house-types/pine/gallery/',
        gallery: [
            'afternoon-site-elevation_exterior.jpg',
            'afternoon-view_exterior.jpg',
            'evening-view_exterior.jpg',
            'street-view-3_exterior.jpg'
        ],
        specs: [
            {
                image: "/assets/images/icons/surface.png",
                title: "Surface Area",
                count: "255sq m",
            },
            {
                image: "/assets/images/icons/spaces.png",
                title: "Parking Spaces",
                count: "2",
            },
            {
                image: "/assets/images/icons/maid.png",
                title: "Maid’s Quarters",
                count: "1",
            },
            {
                image: "/assets/images/icons/bed.png",
                title: "Bedrooms",
                count: "3",
            },
            {
                image: "/assets/images/icons/bath.png",
                title: "Bathrooms",
                count: "3",
            },
            {
                image: "/assets/images/icons/room.png",
                title: "Living Rooms",
                count: "1",
            },
        ],
    },
    {
        img: '/assets/images/house-types/pine-penthouse/portrait.jpg',
        name: 'Pine Penthouse',
        desc: '4-Bedroom Luxury Penthouse',
        slug: 'pine-pent-house',
        projectSlug: ['fourteen'],
        headerImg: '/assets/images/house-types/pine-penthouse/landscape.jpg',
        detailsImg: '',
        moreDesc: 'Step into a world where sophistication is expected and smart living is assured." Pine by Cosgrove, part of the illustrious Fourteen complex in Wuye, Abuja, provides an elevated living experience with spacious rooms and Cosgrove\'s standard smart home features. Choose between the spacious 3-bedroom Pine Condominiums and the opulent 4-bedroom Pine Penthouse, both of which are designed to appeal to discerning tastes. Every residence includes two-car parking and an elevator, setting a new standard for modern, smart living.',
        galleryBasePath: '/assets/images/house-types/pine-penthouse/gallery/',
        gallery: [
            'streetview-3_exterior.jpg',
            'afternoon-site-elevation_exterior.jpg',
            'afternoon-view_exterior.jpg',
            'evening-view_exterior.jpg',
            'pent-flow-view_exterior.jpg'
        ],
        specs: [
            {
                image: "/assets/images/icons/surface.png",
                title: "Surface Area",
                count: "675sq m",
            },
            {
                image: "/assets/images/icons/spaces.png",
                title: "Parking Spaces",
                count: "3",
            },
            {
                image: "/assets/images/icons/maid.png",
                title: "Maid’s Quarters",
                count: "1",
            },
            {
                image: "/assets/images/icons/bed.png",
                title: "Bedrooms",
                count: "4",
            },
            {
                image: "/assets/images/icons/bath.png",
                title: "Bathrooms",
                count: "4",
            },
            {
                image: "/assets/images/icons/room.png",
                title: "Living Rooms",
                count: "1",
            },
        ],
    },
    {
        img: '/assets/images/house-types/the-chateau/portrait.jpg',
        name: 'The Château',
        desc: '8-Bedroom Luxury Mansio',
        slug: 'chateau',
        projectSlug: ['the_chateaux'],
        headerImg: '/assets/images/house-types/the-chateau/landscape.jpg',
        detailsImg: '',
        moreDesc: ' "An Ode to Opulence in Every Corner," the Château by Cosgrove is an 8-bedroom mansion with eight resplendent bathrooms, this palatial residence is a testament to the seamless marriage of traditional grandeur and modern technology. Beyond the bedrooms, the mansion unfolds into a series of luxurious amenities, including a home cinema and a gym, each designed to enrich resident’s daily experience.',
        galleryBasePath: '/assets/images/house-types/the-chateau/gallery/',
        gallery: [
            '11_exterior.jpg',
            '12_exterior.jpg',
            '13_exterior.jpg',
            '15_exterior.jpg',
            '16_exterior.jpg',
            '17_exterior.jpg'
        ],
        specs: [
            {
                image: "/assets/images/icons/surface.png",
                title: "Surface Area",
                count: "0sq m",
            },
            {
                image: "/assets/images/icons/spaces.png",
                title: "Parking Spaces",
                count: "6",
            },
            {
                image: "/assets/images/icons/maid.png",
                title: "Maid’s Quarters",
                count: "1",
            },
            {
                image: "/assets/images/icons/bed.png",
                title: "Bedrooms",
                count: "6",
            },
            {
                image: "/assets/images/icons/bath.png",
                title: "Bathrooms",
                count: "6",
            },
            {
                image: "/assets/images/icons/room.png",
                title: "Living Rooms",
                count: "3",
            },
        ],
    },
    {
        img: '/assets/images/house-types/olive/portrait.jpg',
        name: 'Olive',
        desc: 'Luxury 5 Bedroom Fully Detached Residence',
        slug: 'olive',
        projectSlug: ['tetra'],
        headerImg: '/assets/images/house-types/olive/landscape.jpg',
        detailsImg: '',
        moreDesc: 'A home is the cornerstone in the tapestry of life, where family, innovation, and luxury are intricately woven together. Olive by Cosgrove in Tetra Smart Estate, Wuye, Abuja, is a modern take on the classic family home. This 5-bedroom fully detached home is a work of art in contemporary design, with two living areas and a palatial kitchen. The pent floor\'s multipurpose area can be converted into a home cinema, gym, or study. An optional lift makes it easy to move between floors, and the 5-car parking space adds to the convenience. Smart technology is seamlessly integrated throughout the home, enhancing the living experience in every room.',
        galleryBasePath: '/assets/images/house-types/olive/gallery/',
        gallery: [
            'night-3_exterior.jpg',
            'afternoon-1_exterior.jpg',
            'afternoon-2_exterior.jpg',
            'afternoon-3_exterior.jpg',
            'afternoon-4_exterior.jpg',
            'night-2_exterior.jpg'
        ],
        specs: [
            {
                image: "/assets/images/icons/surface.png",
                title: "Surface Area",
                count: "675sq m",
            },
            {
                image: "/assets/images/icons/spaces.png",
                title: "Parking Spaces",
                count: "3",
            },
            {
                image: "/assets/images/icons/maid.png",
                title: "Maid’s Quarters",
                count: "1",
            },
            {
                image: "/assets/images/icons/bed.png",
                title: "Bedrooms",
                count: "5",
            },
            {
                image: "/assets/images/icons/bath.png",
                title: "Bathrooms",
                count: "5",
            },
            {
                image: "/assets/images/icons/room.png",
                title: "Living Rooms",
                count: "1",
            },
        ],
    },
    {
        img: '/assets/images/house-types/villa/portrait.jpg',
        name: 'Villa',
        desc: '7-Bedroom Gated Villa',
        slug: 'pent-house',
        projectSlug: ['cosgrove_smart_estate_guzape', 'cosgrove_Smart_city_katampe'],
        headerImg: '/assets/images/house-types/villa/landscape.jpg',
        detailsImg: '',
        moreDesc: '"Every Inch a Masterpiece," the Villa by Cosgrove is a 7-bedroom haven where expansive spaces serve as a canvas for an artful life. With seven meticulously designed bathrooms and three grand living rooms, this residence is a seamless blend of elevated luxury and cutting-edge technology where each space is crafted for a higher level of living and every feature is a tribute to a lifestyle of discerning sophistication.',
        galleryBasePath: '/assets/images/house-types/villa/gallery/',
        gallery: [
            '1-1_exterior.jpg',
            'GZP1_exterior.jpg',
            'GZP2_exterior.jpg',
            'GZP3_exterior.jpg',
            'GZP4_exterior.jpg',
            'GZP5_exterior.jpg',
            'GZP6_exterior.jpg',
            'GZP7_exterior.jpg',
            'side-view-1-scaled_exterior.jpg'
        ],
        specs: [
            {
                image: "/assets/images/icons/surface.png",
                title: "Surface Area",
                count: "675sq m",
            },
            {
                image: "/assets/images/icons/spaces.png",
                title: "Parking Spaces",
                count: "3",
            },
            {
                image: "/assets/images/icons/maid.png",
                title: "Maid’s Quarters",
                count: "1",
            },
            {
                image: "/assets/images/icons/bed.png",
                title: "Bedrooms",
                count: "7",
            },
            {
                image: "/assets/images/icons/bath.png",
                title: "Bathrooms",
                count: "7",
            },
            {
                image: "/assets/images/icons/room.png",
                title: "Living Rooms",
                count: "3",
            },
        ],
    },
];

export interface brochuresItemProp {
    link: string;
    image: string;
    name: string;
    fileType: string;
    fileTypeIcon: string;
}

export const brochures : brochuresItemProp[] = [
    {
        name:'General Cosgrove Brochure',
        image: '/assets/images/bg/cos.png',
       link: '/assets/brochures/general-brochure.pdf',
       fileType: 'PDF',
       fileTypeIcon:'/assets/images/bg/Logotype.png'
    },
    {
        name:'Fourteen by Cosgrove',
        image: '/assets/images/bg/fourteen.png',
       link: '/assets/brochures/fourteen-by-cosgrove.pdf',
       fileType: 'PDF',
       fileTypeIcon:'/assets/images/bg/Logotype.png'
    },
    {
        name:'Nouveau by Cosgrove',
        image: '/assets/images/bg/nouveau.png',
       link: '/assets/brochures/nouveau-by-cosgrove-ebrochure.pdf',
       fileType: 'PDF',
       fileTypeIcon:'/assets/images/bg/Logotype.png'
    },
    {
        name:'The Chateaux by Cosgrove',
        image: '/assets/images/bg/chateaux.png',
       link: '/assets/brochures/the-chateaux-by-cosgrove.pdf',
       fileType: 'PDF',
       fileTypeIcon:'/assets/images/bg/Logotype.png'
    },
];
