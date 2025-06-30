import PageTitle from '../../../../components/PageTitle/PageTitle'
import TechCard from '../TechCard/TechCard'
import styles from './MainSection.module.scss'

export default function MainSection() {
    return (
        <div className={styles.mainSection}>
            <PageTitle page='technology' />
            <TechCard />
        </div>
    )
}