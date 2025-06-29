import styles from './TabsButton.module.scss'
import data from '../../../../../../starter-code/data.json'
import { useState } from 'react';

const destinations = data.destinations;

type TabsButtonProps = {
  destinations: { name: string }[];
  selectedPlanet: { name: string };
  setSelectedPlanet: (planet: any) => void;
};

export default function TabsButton({
    destinations,
    selectedPlanet,
    setSelectedPlanet
}: TabsButtonProps) {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
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
    )
}