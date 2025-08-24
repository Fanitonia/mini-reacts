import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Projects</h1>
            <div>
                <Link to="/faninvest">
                    <p>Faninvest</p>
                </Link>
                <Link to="/project-management">
                    <p>Project Management</p>
                </Link>
            </div>
            
        </div>
    )
}