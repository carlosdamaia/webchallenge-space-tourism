import styles from './Header.module.scss';
import NavBar from '../NavBar/NavBar'
import logo from '../../assets/shared/logo.svg'
import { Link } from 'react-router';

export default function Header() {
    return(
        <header className={styles.Header}>
            <Link to='/'>
                <img src={logo} alt='Logo'/>
            </Link>
            <div className={`${styles.divider} hideForTablet hideForMobile`} />
            <NavBar />
        </header>
    )
}