import { AnimatePresence, motion } from "framer-motion";
import styles from './AnimatedImage.module.scss';

interface AnimatedImageProps {
    className?: string;
    imageSrc: string;
    imageAlt: string;
    wrapperClassName?: string;
    imageClassName?: string;
    uniqueKey?: string;
    animationOrientation?: 'x' | 'y';
}

export default function AnimatedImage({
    className = '',
    imageSrc,
    imageAlt = '',
    wrapperClassName = '',
    imageClassName = '',
    uniqueKey = imageSrc,
    animationOrientation = 'x'
}: AnimatedImageProps ) {

    const initial = {
        opacity: 0,
        [animationOrientation]: 300,
    };

    const animate = {
        opacity: 1,
        [animationOrientation]: 0,
    };

    const exit = {
        opacity: 0,
        [animationOrientation]: -300,
    };

    return (
        <div className={`${wrapperClassName}`}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={uniqueKey}
                    className={className}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{ duration: 0.4 }}
                >
                    <img
                        className={`${imageClassName}`}
                        src={imageSrc}
                        alt={imageAlt}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}