import styles from './PlanetCard.module.scss'
import data from '../../../../starter-code/data.json'
import { useState } from 'react';

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

            <div className={styles.planetInfo}>
                <h2>{selectedPlanet.name}</h2>
                <p>{selectedPlanet.description}</p>
                <div className={styles.details}>
                    <p>{selectedPlanet.distance}</p>
                    <p>{selectedPlanet.travel}</p>
                </div>
            </div>
        </div>
    )
}