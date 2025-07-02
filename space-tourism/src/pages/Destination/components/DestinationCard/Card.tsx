import styles from './Card.module.scss'
import data from '../../../../../../starter-code/data.json'
import { useState } from 'react';
import TabsButton from '../TabsButton/TabsButton';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedImage from '../AnimatedImage/AnimatedImage';

const destinations = data.destinations;

export default function Card() {
    const [selectedPlanet, setSelectedPlanet] = useState(destinations[0]);

    return (
        <div className={styles.cardContainer}>
            <AnimatedImage selectedPlanet={selectedPlanet} />

            <div className={styles.planetInfo}>
                <TabsButton 
                    destinations={destinations}
                    selectedPlanet={selectedPlanet}
                    setSelectedPlanet={setSelectedPlanet}
                />
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={selectedPlanet.name}
                        className={styles.animatedInfo}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: .4 }}
                    >
                        <div className={styles.planetMainInfo}>
                            <h2 className={styles.planetName}>
                                {selectedPlanet.name}
                            </h2>
                            <p className={styles.planetDescription}>
                                {selectedPlanet.description}
                            </p>
                        </div>

                        <div className={styles.divider}></div>

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
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}