import styles from './DestinationMainSection.module.scss'
import PlanetCard from '../DestinationCard/PlanetCard';

export default function DestinationMainSection() {
    return (
        <>
            <div className={styles.titleAndImage}>
                <h1>
                    <span>
                        01
                    </span>
                    Pick Your Destination
                </h1>
            </div>
            <PlanetCard />
        </>
    )
}