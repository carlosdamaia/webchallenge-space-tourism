import styles from './TechCard.module.scss'
import data from '../../../../../../starter-code/data.json'
import { useState } from 'react';
import { technologyImages } from '../../../../types/images';
import { isMobile } from '../../../../utils/utils';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedImage from '../../../../components/AnimatedImage/AnimatedImage';
import { style } from 'framer-motion/client';

const technology = data.technology;

export default function TechCard() {
    const [selectedTech, setselectedTech] = useState(technology[0])
    const selectedImg = technologyImages[selectedTech.name]
    const imageSrc = isMobile() ? selectedImg.landscape : selectedImg.portrait

    return (
        <AnimatePresence mode='wait'>

        <motion.div 
            //key={selectedTech.name}
            className={styles.cardContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
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
            
            <AnimatedImage 
                className={styles.animatedImage}
                imageSrc={imageSrc}
                imageAlt=''
                wrapperClassName={styles.imageContainer}
                imageClassName={styles.image}
                uniqueKey={selectedTech.name}
            />

        </motion.div>
        </AnimatePresence>

    /*
    <div className={styles.imageContainer}>
        <img className={styles.image} src={isMobile() 
            ? technologyImages[selectedTech.name].landscape 
            : technologyImages[selectedTech.name].portrait} 
        />
    </div>
    */
    )
}