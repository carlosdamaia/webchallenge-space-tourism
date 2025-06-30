import styles from './CrewCard.module.scss'
import data from '../../../../../../starter-code/data.json'
import { useState } from 'react';
import { crewImages } from '../../../../types/images';

const crew = data.crew;

export default function CrewCard() {
    const [selectedCrew, setSelectedCrew] = useState(crew[0])

    return (
        <div className={styles.cardContainer}>

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
        </div>
    )
}