import { Turn as Hamburger } from 'hamburger-react'
import styles from './NavBar.module.scss'
import { useState } from 'react';

export default function NavBar() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div className={styles.NavContainer}>
                <div 
                    className={
                        `${styles.hamburgerButton} 
                        hideForTablet 
                        hideForDesktop`
                    } 
                >
                    <Hamburger color={'#D0D6F9'} toggled={isOpen} toggle={setOpen}/>
                </div>
                
                <nav className={`${styles.mainMenu} ${isOpen ? styles.open : ''}`}>
                
                    <ul id="headerList" className={styles.headerList}>
                    <li className={`${styles.headerListItem}`}>
                        <a className={styles.linkList}><span className={`${styles.number} hideForTablet`}>00 </span>Home</a>
                    </li>

                    <li className={styles.headerListItem}>
                        <a className={styles.linkList}><span className={`${`${styles.number} hideForTablet`} hideForTablet`}>01 </span>Destination</a>
                    </li>

                    <li className={styles.headerListItem}>
                        <a className={styles.linkList}><span className={`${styles.number} hideForTablet`}>02 </span>Crew</a>
                    </li>

                    <li className={styles.headerListItem}>
                        <a className={styles.linkList}><span className={`${styles.number} hideForTablet`}>03 </span>Technology</a>
                    </li>
                    </ul>
                    
                </nav>
            </div>
        </>
    )
}