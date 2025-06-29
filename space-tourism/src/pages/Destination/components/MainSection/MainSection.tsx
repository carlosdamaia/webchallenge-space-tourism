import styles from './MainSection.module.scss'
import DestinationCard from '../DestinationCard/Card';

export default function DestinationMainSection() {
    return (
        <div className={styles.destinationMainSection}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>
                    <span className={styles.number}>
                        01
                    </span>
                    Pick Your Destination
                </h1>
            </div>
            <DestinationCard />
        </div>
    )
}