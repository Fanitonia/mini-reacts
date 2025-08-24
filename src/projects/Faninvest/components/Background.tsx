import styles from "./Background.module.scss"

export default function Background() {
    return (
        <>
            <div className={styles["background"]}></div>
            <div className={styles["background-overlay"]}></div>
            <div className={styles["background-color"]}></div>
        </>
    )
}