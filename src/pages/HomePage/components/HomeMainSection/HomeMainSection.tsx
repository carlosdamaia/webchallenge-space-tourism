import { NavLink } from 'react-router-dom';
import styles from './HomeMainSection.module.scss'
import { AnimatePresence, motion } from 'framer-motion';

export default function HomeMainSection() {
    return(
        <AnimatePresence mode='wait'>
            <motion.div 
                className={styles.mainSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >
                <div className={styles.textDiv}>

                    <p className={styles.callout}>
                        So, you want to travel to
                    </p>

                    <h1 className={styles.title}>
                        Space
                    </h1>

                    <p className={styles.text}>
                        Let's face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we'll give you a truly out of this world experience!
                    </p>
                    
                </div>

                <div className={styles.buttonDiv}>
                    <NavLink 
                    className={styles.exploreButton}
                        to='/destination'
                    >
                        Explore
                    </NavLink>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}