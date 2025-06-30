import Header from '../../components/Header/Header'
import MainSection from './Components/MainSection/MainSection'
import styles from './Crew.module.scss'

export default function Crew() {
    return (
        <div className={styles.crew}>
            <Header />
            <MainSection />
        </div>
    )
}