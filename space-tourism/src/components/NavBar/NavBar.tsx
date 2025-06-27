import { Turn as Hamburger } from 'hamburger-react'
import styles from './NavBar.module.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to="/" className={styles.linkList}>
                            <span className={`${styles.number} hideForTablet`}>
                                00 
                            </span>
                                Home
                        </Link>
                    </li>

                    <li className={styles.headerListItem}>
                        <Link to="/destination" className={styles.linkList}>
                            <span className={`${`${styles.number} hideForTablet`} hideForTablet`}>
                                01 
                            </span>
                                Destination
                        </Link>
                    </li>

                    <li className={styles.headerListItem}>
                        <Link to="#" className={styles.linkList}>
                            <span className={`${styles.number} hideForTablet`}>
                                02 
                            </span>
                                Crew
                        </Link>
                    </li>

                    <li className={styles.headerListItem}>
                        <Link to="#" className={styles.linkList}>
                            <span className={`${styles.number} hideForTablet`}>
                                03 
                            </span>
                                Technology
                        </Link>
                    </li>
                    </ul>
                    
                </nav>
            </div>
        </>
    )
}