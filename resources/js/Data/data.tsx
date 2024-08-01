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
        name: 'The Nouveau by Cosgrove, Maitama',
        slug: 'cosgrove_smart_estate_maitama',
        location: 'Maitama',
        description: 'In architecture, as in life, the boldest visions yield the most transformative realities." The Nouveau by Cosgrove in Maitama, Abuja, is not just a development; it\'s a revelation. Forged in a Public-Private Partnership with The Nigeria Police, it\'s a citadel of impenetrable security and cutting-edge automation. Each of the six-bedroom villas is an oasis unto itself, complete with a private pool and garden. Situated in a district synonymous with global-caliber infrastructure, The Nouveau is more than a sanctuary—it\'s the epitome of a life less ordinary, where every square inch resonates with unparalleled sophistication\n',
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
        description: 'Redefining intelligent living in Abuja, Cosgrove Smart Estate Wuye sets the benchmark. Spanning 4.32 hectares, the estate features 160 units each equipped with the latest smart home technology. Cosgrove Smart Estate Wuye offers amenities such as AI face recognition cameras, ANRP (Automatic Number Plate Recognition), smart water treatment, and a playground set within landscaped gardens, and proximity to the Central Business District, Wuse 2 and Maitama. Cosgrove Wuye is a testament to unparalleled sophistication.',
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
        description: 'Three words describe Cosgrove Smart Estate Guzape: Opulence, Sophistication, and Security. Nestled amidst Guzape\'s lush hills, this estate offers a limited collection of five 7-bedroom villas and one-bedroom maid’s quarters, each with its own swimming pool or private garden. Situated minutes from iconic landmarks like the Transcorp Hilton and ECOWAS Secretariat, these villas elevate modern living. With 24/7 security, power supply, cutting-edge smart amenities, and a tranquil ambiance framed by verdant landscapes, each home is a statement.\n',
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
        description: 'Tetra by Cosgrove in Wuye stands as an elite gated enclave, curated for the discerning tech aficionado with a penchant for luxury. Every residence is an artful blend of contemporary design, expansive spaces, and impeccable finishes, all enhanced by cutting-edge smart technology. Nestled in Abuja\'s prime locale, it positions you just moments away from the city\'s iconic landmarks.\n',
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
        description: 'The Fourteen by Cosgrove in Wuye, Abuja, represents a blend of modern design and practical living. This community offers 13 Pine condos and a standout penthouse, all designed with smart features for today\'s lifestyle. With amenities like a pool and gym, coupled with 24/7 security, it ensures both comfort and peace of mind. Its central location, close to schools, hospitals, and malls, makes daily life convenient and effortless.\n',
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
    {
        name: 'NITDA Digital Enterpreneurship & Innovation Center',
        slug: 'nitda',
        location: 'Central Area',
        description: 'Cosgrove is spearheading the NITDA Entrepreneurship and Digital Innovation Center, a prominent 2-tower structure in the CBD Cadastral zone. Designed as the digital hub for the National Information Technology Development Agency (NITDA), the interconnected towers span 9 levels and cover 1,500 sqm. The facility boasts offices, an auditorium, server rooms, a fabrication lab, and studio apartments. Additional amenities include parking spaces, a gym, a restaurant, and residential units. The center is equipped with five elevators and three staircases for efficient movement.\n' +
            '\n\n' +
            'Parking Spaces: Basement floor parking with additional 27 parking spaces\n' +
            'Surface area: 1,500 sqm\n' +
            'Towers: 2 interconnected towers spanning 9 levels\n' +
            'Special Features: Auditorium, server rooms, fabrication lab, studio apartments\n' +
            'Additional Amenities: Gym, restaurant, multi-faith area\n' +
            'Vertical Circulation: Five elevators and three staircases\n',
        detailsImg: '/assets/images/projects/nitda/portrait.jpg',
        mainImg: '/assets/images/projects/nitda/landscape.jpg',
        distFeature: [],
        galleryBasePath: '/assets/images/projects/nitda/gallery/',
        gallery: [
            '9eef280c-966c-4c21-a585-d7e1f31db22c.JPG',
            '84c8152a-d731-4736-a71c-1002863440e6.JPG',
            '395f5ac7-36ab-4e3d-ad31-5da0923c69a5.JPG',
            '797e6a11-997a-4e99-a647-1158afe2d997.JPG',
            'c76b38dd-65b2-4ebc-8eeb-b32a1d5db9c1.JPG',
            'dc836962-5448-4cf0-8121-1dedaa04d159.JPG',
            'ec678c85-e96e-4588-91bf-fd1465a8d110.JPG',
            'IMAGE-1.jpg',
            'IMAGE-2.jpg',
            'IMAGE-3.jpg',
            'IMG-7295.jpg',
            'IMG-7296.jpg',
            'IMG-7297.jpg',
            'IMG-7298.jpg',
            'IMG-7299.jpg',
            'IMG-7300.jpg',
            'IMG-7301.jpg'
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
        slug: 'oakville',
        projectSlug: ['cosgrove_Smart_city_katampe'],
        headerImg: '//assets/images/house-types/oakville/portrait.jpg',
        detailsImg: '',
        moreDesc: 'Behold the new standard of smart living! Oakville is a 5-bedroom semi-detached duplex that sets the bar for residential excellence. This iconic smart home features three distinct living areas, five en-suite bedrooms complete with walk-in closets, and a spacious kitchen. Additional luxuries include a multi-purpose area, a maid\'s room, and parking for up to five cars. \n' +
            'Step into the future with state-of-the-art smart home features like fiber-to-the-home (FTTH), high-tech security with biometric access, and optional central air conditioning. Oakville by Cosgrove is more than a home; it\'s a technological marvel meticulously crafted for tomorrow\'s lifestyle.\n',
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
        slug: 'scarlet_oak',
        projectSlug: ['cosgrove_smart_estate_wuse_2'],
        headerImg: '/assets/images/house-types/scarlet-oak/landscape.jpg',
        detailsImg: '',
        moreDesc: 'Behold the new standard of smart living! Oakville is a 5-bedroom semi-detached duplex that sets the bar for residential excellence. This iconic smart home features three distinct living areas, five en-suite bedrooms complete with walk-in closets, and a spacious kitchen. Additional luxuries include a multi-purpose area, a maid\'s room, and parking for up to five cars. \n' +
            'Step into the future with state-of-the-art smart home features like fiber-to-the-home (FTTH), high-tech security with biometric access, and optional central air conditioning. Oakville by Cosgrove is more than a home; it\'s a technological marvel meticulously crafted for tomorrow\'s lifestyle.\n',
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
        img: '/assets/images/house-types/maple/portrait.jpg',
        name: 'Maple Penthouse',
        desc: '4-Bedroom Penthouse',
        slug: 'maple_penthouse',
        projectSlug: ['cosgrove_smart_estate_wuye', 'cosgrove_Smart_city_katampe'],
        headerImg: '/assets/images/house-types/maple/landscape.jpg',
        detailsImg: '',
        moreDesc: 'Ascend to new heights, where the world unfolds beneath you. This Penthouse has set a new benchmark for apartment living. It has four bedrooms, a large living area and an expansive corridor. The penthouse offers a large terrace measuring 113m2 and the entire apartment has a built-up area of 378m2. It has an additional multi-purpose area configurable for gym/study/home cinema, a maid’s room and designated parking for 2 cars.',
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
                count: "378sq m",
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
                count: "4",
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
        name: 'Château',
        desc: '6-Bedroom Luxury Mansion',
        slug: 'chateau',
        projectSlug: ['the_chateaux'],
        headerImg: '/assets/images/house-types/the-chateau/landscape.jpg',
        detailsImg: '',
        moreDesc: 'The Château is a 6-bedroom mansion with 6 resplendent bathrooms, this palatial residence is a testament to the seamless blend of traditional grandeur and modern technology. Beyond the bedrooms, the mansion unfolds into a series of luxurious amenities, including a home cinema and a gym, with an option of a swimming pool or garden, each designed to enrich resident’s daily experience.',
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
            // {
            //     image: "/assets/images/icons/surface.png",
            //     title: "Surface Area",
            //     count: "0sq m",
            // },
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
            {
                image: "/assets/images/icons/bq.png",
                title: "BQ",
                count: "1",
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
        slug: 'villa',
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
    {
        img: '/assets/images/house-types/maitama/portrait.jpg',
        name: 'The Nouveau Villa',
        desc: '6-Bedroom Villa',
        slug: 'nouveau_villa',
        projectSlug: ['nouveau'],
        headerImg: '/assets/images/house-types/maitama/landscape.jpg',
        detailsImg: '',
        moreDesc: 'Everything you expect, and then some more. This 6-bedroom villa is more than just a home; it is a reflection of its owners\' unique personalities. Finished to perfection, each villa is a symphony of natural light, sophisticated materials, and elegant tones. Large floor-to-ceiling windows illuminate expansive foyers, while high headrooms add an air of grandeur.\n' +
            '\n' +
            'The master bedroom is a sanctuary, complete with a home office and outdoor terrace. Additional spacious bedrooms, accessible walk and bicycle paths, and parking for up to six cars make life here effortlessly luxurious. The community\'s extra-wide roads, backyard, and mini-garden further elevate the living experience. \n' +
            '\n' +
            'Residents of The Nouveau have access to world-class infrastructure, indoor and outdoor recreation and some of the most sophisticated, state-of-the-art security protocols and advanced home automation available anywhere in the world.\n',
        galleryBasePath: '/assets/images/house-types/maitama/gallery/',
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
        specs: [
            // {
            //     image: "/assets/images/icons/surface.png",
            //     title: "Surface Area",
            //     count: "675sq m",
            // },
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
                count: "6.5",
            },
            {
                image: "/assets/images/icons/room.png",
                title: "Living Rooms",
                count: "1",
            },
            {
                image: "/assets/images/icons/clients.png",
                title: "Lounges",
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
        name:'The Nouveau by Cosgrove',
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

export interface FeaturedListItemProp{
    date: string;
    title: string;
    link: string;
}

export const pressList : FeaturedListItemProp[] = [

    {
        date: '12|07|23',
        title: 'Cosgrove boosts housing market with Abuja estate project - The Guardian',
        link: 'https://guardian.ng/news/cosgrove-boosts-housing-market-with-abuja-estate-project/'
    },
    {
        date: '12|07|23',
        title: 'Relief as firm donates accommodation to Abuja displaced orphans - The Nation',
        link: 'https://thenationonlineng.net/relief-as-firm-donates-accommodation-to-abuja-displaced-orphans/'
    },
    {
        date: '12|07|23',
        title: 'Cosgrove gets NITP, COREN, commendations for CSR - This Day',
        link: 'https://thenationonlineng.net/relief-as-firm-donates-accommodation-to-abuja-displaced-orphans/'
    },
    {
        date: '12|07|23',
        title: 'AI in home security - The Business Year',
        link: ''
    },
    {
        date: '06|11|19',
        title: 'In handling real estate competitions we see ourselves as co stakeholders - Daily Times',
        link: 'https://dailytimes.ng/2019/11/06/in-handling-real-estate-competitions-we-see-ourselves-as-co-stakeholders/'
    },
    {
        date: '17|09|19',
        title: 'NIA honours Cosgrove founder, Umar Abdullahi - Punch',
        link: 'https://punchng.com/nia-honours-cosgrove-founder-umar-abdullahi/'
    },
    {
        date: '16|10|19',
        title: 'Cosgrove Plants 1000 Trees To Commemorate 2019 Customer Week - Truth Ng',
        link: 'https://www.truthng.com/photo-news-cosgrove-plants-1000-tress-commemorate-2019-customer-week/'
    },
    {
        date: '15|09|19',
        title: 'Why Cosgrove uses British Standard Steel, Ready-Mix Concrete, despite cost - Truth Ng',
        link: 'https://www.truthng.com/cosgrove-uses-british-standard-steel-ready-mix-concrete-despite-cost-ceo/'
    },
    {
        date: '24|03|19',
        title: 'Cosgrove gets NITP, COREN commendation for constructing 1.5km access road in Maitama - Truth Ng',
        link: 'https://www.truthng.com/cosgrove-gets-nitp-coren-commendation-constructing-1-5km-access-road-maitama/'
    },
    {
        date: '22|07|19',
        title: 'Cosgrove Gets Super Eagles Star As Patron - Daily Trust',
        link: 'https://dailytrust.com/cosgrove-gets-super-eagles-star-as-patron/'
    },
    {
        date: '23|05|19',
        title: 'Cosgrove, 11 others, bag Smart City Award as Osinbajo tasks industry leaders on sustained economic growth - Truth Ng',
        link: 'https://www.truthng.com/cosgrove-11-others-bag-smart-city-award-osinbajo-tasks-industry-leaders-sustained-economic-growth/'
    },
    {
        date: '01|10|20',
        title: 'Focus on Nigeria: Unravelling The Evolution And Progression Of Nigeria’s Economy On The Eve Of Its Diamond Jubilee - Forbes',
        link: 'https://www.forbesafrica.com/brand-voice/2020/09/30/focus-on-nigeria-unravelling-the-evolution-and-progression-of-nigerias-economy-on-the-eve-of-its-diamond-jubilee/'
    },
    {
        date: '08|04|22',
        title: 'CBN Governor Emiefele, Cosgrove CEO Umar Abdullahi, others make Forbes Africa’s list - Daily Nigerian',
        link: 'https://dailynigerian.com/cbn-governor-emiefele-cosgrove/'
    },
    {
        date: '15|09|19',
        title: 'NIA names Cosgrove CEO ‘Real Estate Developer of 2019’ - Premium Times',
        link: 'https://www.premiumtimesng.com/promoted/352434-promoted-nia-names-cosgrove-ceo-real-estate-developer-of-2019.html?tztc=1'
    },
    {
        date: '29|05|23',
        title: 'Buhari confers Cosgrove CEO, Umar Abdullahi, with OFR National Honour - Africa Housing News',
        link: 'https://www.africahousingnews.com/buhari-confers-cosgrove-ceo-umar-abdullahi-with-ofr-national-honour/'
    },
    {
        date: '20|12|2021',
        title: 'Cosgrove’s Wuye Smart Estate Gives Abuja Panache In Property - Daily Trust',
        link: 'https://dailytrust.com/cosgroves-wuye-smart-estate-gives-abuja-panache-in-property/'
    },
    {
        date: '20|08|2018',
        title: 'Cosgrove Set To Boost FCT Real Estate Market - Daily Trust',
        link: 'https://dailytrust.com/cosgrove-set-to-boost-fct-real-estate-market-266585/'
    },
];
