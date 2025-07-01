import styles from './CrewCard.module.scss'
import data from '../../../../../../starter-code/data.json'
import { useState } from 'react';
import { crewImages } from '../../../../types/images';
import { AnimatePresence, motion } from 'framer-motion';

const crew = data.crew;

export default function CrewCard() {
    const [selectedCrew, setSelectedCrew] = useState(crew[0])

    return (
        <AnimatePresence mode='wait'>
            <motion.div 
                key={selectedCrew.name}
                className={styles.cardContainer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >
                <div className={styles.crewInfo}>
                    <div className={styles.infoText}>
                        <div className={styles.presentation}>
                            <h2 className={styles.role}>
                                {selectedCrew.role}
                            </h2>
                            <h3 className={styles.name}>
                                {selectedCrew.name}
                            </h3>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.bio}>
                                {selectedCrew.bio}
                            </p>
                        </div>
                    </div>
                    <div className={styles.tabs}>
                        {crew.map((staff) => (
                            <button 
                                key={staff.name}
                                className={`
                                    ${styles.tabsButton}
                                    ${selectedCrew.name === staff.name ? styles.active : ''}
                                `}
                                onClick={() => setSelectedCrew(staff)}
                            />
                        ))}
                    </div>
                </div>

                
                <div className={styles.imageContainer}>
                    <div className={styles.wrapper}>
                        <img className={styles.crewImg} src={crewImages[selectedCrew.name]} />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}