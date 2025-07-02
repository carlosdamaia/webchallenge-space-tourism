import styles from './MainSection.module.scss'
import DestinationCard from '../DestinationCard/Card';
import PageTitle from '../../../../components/PageTitle/PageTitle';
import { AnimatePresence, motion } from 'framer-motion';

export default function DestinationMainSection() {
    return (
        <AnimatePresence mode='wait'>
        <motion.div 
            className={styles.destinationMainSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
        >
            <PageTitle page='destination' />
            <DestinationCard />
        </motion.div>

        </AnimatePresence>
    )
}