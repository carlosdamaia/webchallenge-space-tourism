import { AnimatePresence, motion } from "framer-motion";

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
        <div className={`${wrapperClassName}`}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={uniqueKey}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
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