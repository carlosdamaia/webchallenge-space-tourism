import HamburguerButton from '../HamburguerButton/HamburguerButton'
import styles from './NavBar.module.scss'

export default function NavBar() {
    return (
        <>
            <div className={styles.NavContainer}>
                <nav className={`${styles.mainMenu} flex flexAlignItemsCenter flexJustifyContentSpaceBetween`}>

                    <HamburguerButton />
                
                    <ul id="headerList" className={styles.HeaderList}>
                    <li className={`${styles.headerListItem}`}>
                        <a className={`${styles.LinkList} flexRow`}><span className={styles.number}>00 </span>Home</a>
                    </li>

                    <li className={styles.HeaderListItem}>
                        <a className={styles.LinkList}><span className={styles.number}>01 </span>Destination</a>
                    </li>

                    <li className={styles.HeaderListItem}>
                        <a className={styles.LinkList}><span className={styles.number}>02 </span>Crew</a>
                    </li>

                    <li className={styles.HeaderListItem}>
                        <a className={styles.LinkList}><span className={styles.number}>03 </span>Technology</a>
                    </li>
                    </ul>
                    
                </nav>
            </div>
        </>
    )
}