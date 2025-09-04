import { Link } from "react-router-dom";
import styles from "./home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <header>
                <h1>Mini React Projects</h1>
                <p>The mini-projects I made while learning React</p>
            </header>
            <div className={styles["projects-container"]}>
                <Link to="/investment-calculator">
                    <p>Investment Calculator</p>
                </Link>
                <Link to="/project-manager">
                    <p>Project Manager</p>
                </Link>
            </div>
        </div>
    )
}