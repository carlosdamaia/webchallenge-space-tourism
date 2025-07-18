import PageTitle from '../../../../components/PageTitle/PageTitle'
import CrewCard from '../CrewCard/CrewCard'
import styles from './MainSection.module.scss'

export default function MainSection() {
    return (
        <div className={styles.mainSection}>
            <PageTitle page='crew' />
            <CrewCard />
        </div>
    )
}