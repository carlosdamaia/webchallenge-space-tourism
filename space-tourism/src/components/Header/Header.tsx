import styles from './Header.module.scss';
import NavBar from '../NavBar/NavBar'
import logo from '../../assets/shared/logo.svg'

export default function Header() {
    return(
        <header className={styles.Header}>
            <img src={logo} alt='Logo'/>
            <div className={`${styles.divider} hideForTablet hideForMobile`} />
            <NavBar />
        </header>
    )
}