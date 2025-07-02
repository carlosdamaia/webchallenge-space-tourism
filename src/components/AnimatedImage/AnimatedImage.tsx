import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import LoadingImg from "../LoadingImg/LoadingImg";

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

    const [isLoaded, setIsLoaded] = useState(false);

    return (
        
        <div className={`${wrapperClassName}`}>
            {!isLoaded && <LoadingImg />}

            <img
                src={imageSrc}
                alt={imageAlt}
                onLoad={() => setIsLoaded(true)}
                style={{ display: 'none' }}
            />

            <AnimatePresence mode="wait">
                {isLoaded && (
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
                )}
            </AnimatePresence>
        </div>
    );
}