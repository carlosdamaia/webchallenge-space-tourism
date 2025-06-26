import styles from './NavBar.module.scss'

export default function NavBar() {
    return (
        <>
            <div className={styles.NavContainer}>
                <nav className="main-menu flex flex-ai-c flex-jc-sb">

                    <a id="btnHamburguer" href="#" className="hamburguer-btn hide-for-desktop hide-for-tablet">
                    <span></span>
                    <span></span>
                    <span></span>
                    </a>
                
                    <ul id="headerList" className={styles.HeaderList}>
                    <li className={styles.HeaderListItem}>
                        <a className={styles.LinkList}><span className={styles.number}>00 </span>Home</a>
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