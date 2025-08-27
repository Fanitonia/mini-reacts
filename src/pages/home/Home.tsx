import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

export default function Home() {
    return (
        <div className={styles.container}>
            <header>
                <h1>Mini React Projects</h1>
                <p>The mini-projects I made while learning React</p>
            </header>
            <hr />
            <div className={styles["projects-container"]}>
                <Link to="/investment-calculator">
                    <p>Investment Calculator</p>
                </Link>
                <Link to="/project-management">
                    <p>Project Management</p>
                </Link>
            </div>
            
        </div>
    )
}