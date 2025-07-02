import launchLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import launchPortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceportLandscape from '../../assets/technology/image-spaceport-landscape.jpg';
import spaceportPortrait from '../../assets/technology/image-spaceport-portrait.jpg';
import capsuleLandscape from '../../assets/technology/image-space-capsule-landscape.jpg';
import capsulePortrait from '../../assets/technology/image-space-capsule-portrait.jpg';

export const technologyImages: Record<string, { portrait: string; landscape: string }> = {
  'Launch vehicle': {
    portrait: launchPortrait,
    landscape: launchLandscape,
  },
  Spaceport: {
    portrait: spaceportPortrait,
    landscape: spaceportLandscape,
  },
  'Space capsule': {
    portrait: capsulePortrait,
    landscape: capsuleLandscape,
  },
};
