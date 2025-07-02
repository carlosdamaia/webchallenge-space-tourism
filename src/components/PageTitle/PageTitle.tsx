import styles from './PageTitle.module.scss';

export default function PageTitle({ page }: { page: 'destination' | 'crew' | 'technology' }) {
    const pages = {
        destination: 'pick your destination',
        crew: 'meet your crew',
        technology: 'space launch 101'
    };

    const pageKeys = Object.keys(pages);
    const index = pageKeys.indexOf(page);
    const formatedIndex = String(index + 1).padStart(2, '0');
    const title = pages[page];

    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>
                <span className={styles.number}>
                    {formatedIndex}
                </span>
                {title}
            </h1>
        </div>
    )
}