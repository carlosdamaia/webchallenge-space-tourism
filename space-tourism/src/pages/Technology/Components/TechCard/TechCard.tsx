import styles from './TechCard.module.scss'
import data from '../../../../../../starter-code/data.json'
import { useState } from 'react';
import { technologyImages } from '../../../../types/images';
import { isMobile } from '../../../../utils/utils';

const technology = data.technology;

export default function TechCard() {
    const [selectedTech, setselectedTech] = useState(technology[0])

    return (
        <div className={styles.cardContainer}>
            <div className={styles.techInfo}>
                <div className={styles.tabs}>
                    {technology.map((tech, index) => (
                        <button 
                            key={tech.name}
                            className={`
                                ${styles.tabsButton}
                                ${selectedTech.name === tech.name ? styles.active : ''}
                            `}
                            onClick={() => setselectedTech(tech)}
                        >{index + 1}</button>
                    ))}
                </div>

                <div className={styles.explanation}>
                    <div className={styles.rankAndName}>
                        <div className={styles.fixedTitle}>
                            <h2>the terminology...</h2>
                        </div>
                        <div className={styles.name}>
                            <h1>
                                {selectedTech.name}
                            </h1>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.text}>
                            {selectedTech.description}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img src={isMobile() 
                    ? technologyImages[selectedTech.name].landscape 
                    : technologyImages[selectedTech.name].portrait} 
                />
            </div>
        </div>
    )
}