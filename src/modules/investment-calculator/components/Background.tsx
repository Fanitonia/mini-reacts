import styles from "./background.module.css"

export default function Background() {
    return (
        <>
            <div className={styles["background"]}></div>
            <div className={styles["background-overlay"]}></div>
            <div className={styles["background-color"]}></div>
        </>
    )
}