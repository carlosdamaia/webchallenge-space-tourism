import Header from '../../components/Header/Header'
import MainSection from './Components/MainSection/MainSection'
import styles from './Technology.module.scss'

export default function Technology() {
    return (
        <div className={styles.technology}>
            <Header />
            <MainSection />
        </div>
    )
}