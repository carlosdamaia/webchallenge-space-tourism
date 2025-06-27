import { Turn as Hamburger } from 'hamburger-react'
import styles from './NavBar.module.scss'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
                        <NavLink 
                            to="/" 
                            className={({ isActive }) =>
                                `${styles.linkList} ${isActive ? styles.active : ''}`
                            }
                        >
                            <span className={`${styles.number} hideForTablet`}>
                                00 
                            </span>
                                Home
                        </NavLink>
                    </li>

                    <li className={styles.headerListItem}>
                        <NavLink 
                            to="/destination" 
                            className={({ isActive }) =>
                                `${styles.linkList} ${isActive ? styles.active : ''}`
                            }
                        >
                            <span className={`${`${styles.number} hideForTablet`} hideForTablet`}>
                                01 
                            </span>
                                Destination
                        </NavLink>
                    </li>

                    <li className={styles.headerListItem}>
                        <NavLink 
                            to="/crew" 
                            className={({ isActive }) =>
                                `${styles.linkList} ${isActive ? styles.active : ''}`
                            }
                        >
                            <span className={`${styles.number} hideForTablet`}>
                                02 
                            </span>
                                Crew
                        </NavLink>
                    </li>

                    <li className={styles.headerListItem}>
                        <NavLink 
                            to="/technology" 
                            className={({ isActive }) =>
                                `${styles.linkList} ${isActive ? styles.active : ''}`
                            }
                        >
                            <span className={`${styles.number} hideForTablet`}>
                                03 
                            </span>
                                Technology
                        </NavLink>
                    </li>
                    </ul>
                    
                </nav>
            </div>
        </>
    )
}