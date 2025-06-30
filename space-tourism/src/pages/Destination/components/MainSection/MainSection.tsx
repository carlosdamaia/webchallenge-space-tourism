import styles from './MainSection.module.scss'
import DestinationCard from '../DestinationCard/Card';
import PageTitle from '../../../../components/PageTitle/PageTitle';

export default function DestinationMainSection() {
    return (
        <div className={styles.destinationMainSection}>
            <PageTitle page='destination' />
            <DestinationCard />
        </div>
    )
}