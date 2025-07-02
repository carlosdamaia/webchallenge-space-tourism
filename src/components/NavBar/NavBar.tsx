import { Turn as Hamburger } from 'hamburger-react'
import styles from './NavBar.module.scss'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Destination', path: '/destination' },
  { name: 'Crew', path: '/crew' },
  { name: 'Technology', path: '/technology' },
];

export default function NavBar() {
    const [isOpen, setOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className={styles.NavContainer}>
            <div 
                className={
                    `${styles.hamburgerButton} 
                    hideForTablet 
                    hideForDesktop`
                } 
            >
                <Hamburger 
                    color={'#D0D6F9'} 
                    toggled={isOpen} 
                    toggle={setOpen}
                />
            </div>

            <nav className={`${styles.mainMenu} ${isOpen ? styles.open : ''}`}>
                <ul id="headerList" className={styles.headerList}>
                    {navItems.map((item, index) => (
                        <li key={item.name} className={styles.headerListItem}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => {
                            const base = styles.linkList;
                            const active = isActive ? styles.active : '';
                            const hovered = hoveredIndex !== null && hoveredIndex !== index ? styles.activeBlurred : '';
                            return `${base} ${active} ${hovered}`;
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <span className={styles.number}>0{index}</span> {item.name}
                        </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}