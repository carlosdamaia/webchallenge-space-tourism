import { AnimatePresence, motion } from "framer-motion";

interface AnimatedInfoProps {
    children: React.ReactNode;
    className?: string;
    uniqueKey?: string;
    animationOrientation?: 'x' | 'y';
}

export default function AnimatedInfo({
    children,
    className = '',
    uniqueKey,
    animationOrientation = 'x',
}: AnimatedInfoProps ) {

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
        <AnimatePresence mode="wait">
            <motion.div
                key={uniqueKey}
                className={className}
                initial={initial}
                animate={animate}
                exit={exit}
                transition={{ duration: 0.4 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}