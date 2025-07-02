import { AnimatePresence, motion } from "framer-motion";
import styles from './AnimatedImage.module.scss';

interface AnimatedImageProps {
    imageSrc: string;
    imageAlt: string;
    wrapperClassName?: string;
    imageClassName?: string;
    uniqueKey?: string;
}

export default function AnimatedImage({
    imageSrc,
    imageAlt = '',
    wrapperClassName = '',
    imageClassName = '',
    uniqueKey = imageSrc,
}: AnimatedImageProps ) {
    return (
        <div className={`${styles.animatedImage} ${wrapperClassName}`}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={uniqueKey}
                    className={styles.planetImg}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <img
                        className={`${styles.planetPng} ${imageClassName}`}
                        src={imageSrc}
                        alt={imageAlt}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}