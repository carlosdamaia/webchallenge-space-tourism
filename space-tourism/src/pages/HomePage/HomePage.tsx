import Header from '../../components/Header/Header';
import HomeMainSection from './components/HomeMainSection/HomeMainSection';
import styles from './HomePage.module.scss';

export default function HomePage() {
    return (
        <div className={styles.HomePage}>
            <Header />
            <HomeMainSection />
        </div>
    )
}