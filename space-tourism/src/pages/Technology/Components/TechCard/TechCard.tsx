import styles from './TechCard.module.scss'
import data from '../../../../../../starter-code/data.json'
import { useState } from 'react';
import { technologyImages } from '../../../../types/images';
import { isMobile } from '../../../../utils/utils';
import AnimatedImage from '../../../../components/AnimatedImage/AnimatedImage';
import AnimatedInfo from '../../../../components/AnimatedInfo/AnimatedInfo';

const technology = data.technology;

export default function TechCard() {
    const [selectedTech, setselectedTech] = useState(technology[0])
    const selectedImg = technologyImages[selectedTech.name]
    const animationOrientation = isMobile() ? undefined : 'y';
    const imageSrc = isMobile() ? selectedImg.landscape : selectedImg.portrait;

    return (
        <div 
            className={styles.cardContainer}
        >
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

                <AnimatedInfo 
                    key={selectedTech.name}
                    className={styles.explanation}
                    animationOrientation={animationOrientation}
                    duration={.8}
                >
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
                </AnimatedInfo>
            </div>
            
            <AnimatedImage 
                className={styles.animatedImage}
                imageSrc={imageSrc}
                imageAlt=''
                wrapperClassName={styles.imageContainer}
                imageClassName={styles.image}
                uniqueKey={selectedTech.name}
                animationOrientation={animationOrientation}
            />

        </div>
    )
}