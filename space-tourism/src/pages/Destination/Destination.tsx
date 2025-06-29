import DestinationMainSection from './components/MainSection/MainSection'
import Header from '../../components/Header/Header'
import styles from './Destination.module.scss'

export default function Destination() {
    return (
        <div className={styles.destinationPage}>
            <Header />
            <DestinationMainSection />
        </div>
    )
}