import styles from './Card.module.scss'
import data from '../../../../../../starter-code/data.json'
import { useState } from 'react';
import { planetImages } from '../../../../types/images';
import TabsButton from '../TabsButton/TabsButton';
import { AnimatePresence, motion } from 'framer-motion';

const destinations = data.destinations;

export default function Card() {
    const [selectedPlanet, setSelectedPlanet] = useState(destinations[0]);

    return (
        <AnimatePresence mode='wait'>

        <motion.div  
            key={selectedPlanet.name}
            className={styles.cardContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
        >
            <div className={styles.planetImg}>
                <img 
                    className={styles.planetPng}
                    src={planetImages[selectedPlanet.name]} 
                />
            </div>

            <div className={styles.planetInfo}>
                
                <TabsButton 
                    destinations={destinations}
                    selectedPlanet={selectedPlanet}
                    setSelectedPlanet={setSelectedPlanet}
                />

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
            </div>
        </motion.div>
        </AnimatePresence>
    )
}