import { planetImages } from '../../../../types/images';
import styles from './AnimatedImage.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

export default function AnimatedImage({ selectedPlanet }) {
    return (
        <div className={styles.animatedImage}>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={selectedPlanet.name}
                    className={styles.planetImg}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: .4 }}
                >
                    <img 
                        className={styles.planetPng}
                        src={planetImages[selectedPlanet.name]} 
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    )
}