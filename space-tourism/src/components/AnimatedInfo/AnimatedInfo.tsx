import { AnimatePresence, motion } from "framer-motion";
import styles from './AnimatedInfo.module.scss';

interface AnimatedInfoProps {

}

export default function AnimatedInfo({

}: AnimatedInfoProps ) {
    return (
        <div className={`${styles.animatedInfo}`}>
            <AnimatePresence mode="wait">
                <motion.div

                >
                    
                </motion.div>
            </AnimatePresence>
        </div>
    );
}