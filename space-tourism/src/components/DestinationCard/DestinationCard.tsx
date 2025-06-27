import styles from './DestinationCard.module.scss'
import data from '../../../../starter-code/data.json'
import { useState } from 'react';
import { planetImages } from '../../types/images';

const destinations = data.destinations;

export default function DestinationCard() {
    const [selectedPlanet, setSelectedPlanet] = useState(destinations[0]);
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div className={styles.cardContainer}>
            <div className={styles.planetImg}>
                <img 
                    className={styles.planetPng}
                    src={planetImages[selectedPlanet.name]} 
                />
            </div>

            <div className={styles.tabs}>
                {destinations.map((planet) => (
                    <button
                    key={planet.name}
                    className={`
                        ${styles.tabButton}
                        ${selectedPlanet.name === planet.name ? styles.active : ''}
                        ${
                        selectedPlanet.name === planet.name && hovered && hovered !== planet.name
                            ? styles.activeBlurred
                            : ''
                        }
                    `}
                    onClick={() => setSelectedPlanet(planet)}
                    onMouseEnter={() => setHovered(planet.name)}
                    onMouseLeave={() => setHovered(null)}
                    >
                    {planet.name}
                    </button>
                ))}
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