// @ts-ignore
import { ReactComponent as AutomaticNumberplateRecognition }  from '/public/assets/images/features/automatic-numberplate-recognition.svg';
// @ts-ignore
import { ReactComponent as CentralSecurityControl }           from '/public/assets/images/features/central-security-control.svg';
// @ts-ignore
import { ReactComponent as CommercialHub }                    from '/public/assets/images/features/commercial-hub.svg';
// @ts-ignore
import { ReactComponent as FacialRecognition }                from '/public/assets/images/features/facial-recognition.svg';
// @ts-ignore
import { ReactComponent as FacilityManagementServices }       from '/public/assets/images/features/facility-management-services.svg';
// @ts-ignore
import { ReactComponent as FiberToTheHome }                   from '/public/assets/images/features/fiber-to-the-home.svg';
// @ts-ignore
import { ReactComponent as FullFiberOpticsCabling }           from '/public/assets/images/features/full-fiber-optics-cabling.svg';
// @ts-ignore
import { ReactComponent as MotionSensors }                    from '/public/assets/images/features/motion-sensors.svg';
// @ts-ignore
import { ReactComponent as PedestrianBiometricAccessControl } from '/public/assets/images/features/pedestrian-biometric-access-control.svg';
// @ts-ignore
import { ReactComponent as PlaygroundAndGreenery }            from '/public/assets/images/features/playground-and-greenery.svg';
// @ts-ignore
import { ReactComponent as SecurityAlarm }                    from '/public/assets/images/features/security-alarm.svg';
// @ts-ignore
import { ReactComponent as SmartStreetLights }                from '/public/assets/images/features/smart-street-lights.svg';
// @ts-ignore
import { ReactComponent as SwimmingPoolAndGym }               from '/public/assets/images/features/swimming-pool-and-gym.svg';
// @ts-ignore
import { ReactComponent as UninterruptedPowerSupply }         from '/public/assets/images/features/uninterrupted-power-supply.svg';
// @ts-ignore
import { ReactComponent as UninterruptedTreatedWaterSupply }  from '/public/assets/images/features/uninterrupted-treated-water-supply.svg';

import type React from 'react';

export const featureIconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    'automatic-numberplate-recognition':     AutomaticNumberplateRecognition,
    'central-security-control':              CentralSecurityControl,
    'commercial-hub':                        CommercialHub,
    'facial-recognition':                    FacialRecognition,
    'facility-management-services':          FacilityManagementServices,
    'fiber-to-the-home':                     FiberToTheHome,
    'full-fiber-optics-cabling':             FullFiberOpticsCabling,
    'motion-sensors':                        MotionSensors,
    'pedestrian-biometric-access-control':   PedestrianBiometricAccessControl,
    'playground-and-greenery':               PlaygroundAndGreenery,
    'security-alarm':                        SecurityAlarm,
    'smart-street-lights':                   SmartStreetLights,
    'swimming-pool-and-gym':                 SwimmingPoolAndGym,
    'uninterrupted-power-supply':            UninterruptedPowerSupply,
    'uninterrupted-treated-water-supply':    UninterruptedTreatedWaterSupply,
};

export const featureIconOptions: { key: string; label: string }[] = [
    { key: 'automatic-numberplate-recognition',   label: 'Automatic numberplate recognition' },
    { key: 'central-security-control',            label: 'Central security control' },
    { key: 'commercial-hub',                      label: 'Commercial hub' },
    { key: 'facial-recognition',                  label: 'Facial recognition' },
    { key: 'facility-management-services',        label: 'Facility management services' },
    { key: 'fiber-to-the-home',                   label: 'Fiber to the home' },
    { key: 'full-fiber-optics-cabling',           label: 'Full fiber optics cabling' },
    { key: 'motion-sensors',                      label: 'Motion sensors' },
    { key: 'pedestrian-biometric-access-control', label: 'Pedestrian biometric access control' },
    { key: 'playground-and-greenery',             label: 'Playground and greenery' },
    { key: 'security-alarm',                      label: 'Security alarm' },
    { key: 'smart-street-lights',                 label: 'Smart street lights' },
    { key: 'swimming-pool-and-gym',               label: 'Swimming pool and gym' },
    { key: 'uninterrupted-power-supply',          label: 'Uninterrupted power supply' },
    { key: 'uninterrupted-treated-water-supply',  label: 'Uninterrupted treated water supply' },
];
