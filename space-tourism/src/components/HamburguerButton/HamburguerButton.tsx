import styles from './HamburguerButton.module.scss'

export default function HamburguerButton() {
    return(
        <a id="btnHamburguer" href="#" className={`${styles.hamburguerButton} hideForDesktop hideForTablet`}>
            <span></span>
            <span></span>
            <span></span>
        </a>
    )
}