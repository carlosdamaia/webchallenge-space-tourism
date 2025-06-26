import styles from './HomeMainSection.module.scss'

export default function HomeMainSection() {
    return(
        <section className={styles.mainSection}>
            <div className={styles.textDiv}>

                <p className={styles.callout}>
                    So, you want to travel to
                </p>

                <h1 className={styles.title}>
                    Space
                </h1>

                <p className={styles.text}>
                    Let's face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we'll give you a truly out of this world experience!
                </p>
                
            </div>

            <div className={styles.buttonDiv}>
                <button className={styles.exploreButton}>
                    Explore
                </button>
            </div>
        </section>
    )
}