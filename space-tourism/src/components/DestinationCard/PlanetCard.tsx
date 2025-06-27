import styles from './PlanetCard.module.scss'
import data from '../../../../starter-code/data.json'
import { useState } from 'react';
import moonPng from '../../assets/destination/image-moon.png';

const planetImages: Record<string, string> = {
  Moon: moonPng,
  // etc.
};

const destinations = data.destinations;

export default function PlanetCard() {
    const [selectedPlanet, setSelectedPlanet] = useState(destinations[0]);

    return (
        <div className={styles.cardContainer}>
            <div className={styles.tabs}>
                {destinations.map((planet) =>
                    <button
                        key={planet.name}
                        className={`${styles.tabButton} ${
                            selectedPlanet.name === planet.name ? styles.active : ''
                        }`}
                        onClick={() => setSelectedPlanet(planet)}
                    >
                        {planet.name}
                    </button>
                )}
            </div>

            <div className={styles.planetImg}>
                <img src={planetImages[selectedPlanet.name]} />
            </div>

            <div className={styles.planetInfo}>
                <h2 className={styles.planetName}>
                    {selectedPlanet.name}
                </h2>
                <p className={styles.planetDescription}>
                    {selectedPlanet.description}
                </p>
                <div className={styles.detailsContainer}>

                    <div className={styles.detailedItem}>
                        <h3 className={styles.detailsTitle}>
                            avg. distance
                        </h3>
                        <p className={styles.details}>
                            {selectedPlanet.distance}
                        </p>
                    </div>

                    <div className={styles.detailedItem}>
                        <h3 className={styles.detailsTitle}>
                            est. travel time
                        </h3>
                        <p className={styles.details}>
                            {selectedPlanet.travel}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}