import marsPng from '../assets/destination/image-mars.png';
import titanPng from '../assets/destination/image-titan.png';
import europaPng from '../assets/destination/image-europa.png';
import moonPng from '../assets/destination/image-moon.png';
import anoushehAnsari from '../assets/crew/image-anousheh-ansari.png'
import markShuttleworth from '../assets/crew/image-mark-shuttleworth.png'
import victorGlover from '../assets/crew/image-victor-glover.png'
import douglasHurley from '../assets/crew/image-douglas-hurley.png'
import launchLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import launchPortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg';
import spaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg';
import capsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg';
import capsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';

export const planetImages: Record<string, string> = {
    Moon: moonPng,
    Mars: marsPng,
    Titan: titanPng,
    Europa: europaPng,
}

export const crewImages: Record<string, string> = {
    'Douglas Hurley': douglasHurley,
    'Anousheh Ansari': anoushehAnsari,
    'Mark Shuttleworth': markShuttleworth,
    'Victor Glover': victorGlover,
}

export const technologyImages: Record<string, { portrait: string; landscape: string }> = {
  'Launch vehicle': {
    portrait: launchPortrait,
    landscape: launchLandscape
  },
  'Spaceport': {
    portrait: spaceportPortrait,
    landscape: spaceportLandscape
  },
  'Space capsule': {
    portrait: capsulePortrait,
    landscape: capsuleLandscape
  }
};