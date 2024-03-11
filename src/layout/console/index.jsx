/* Home.js */
import React from "react";
import console from '../../assets/console.ico';
import styles from "./style.module.css";

export default function Home() {
    return (
        <div>
            <div className={styles["console-icon"]}>
                <img className={styles["settings-console"]} src={console} alt="console" width={60} height={60} />
                <span className={styles["icon-text"]}>consola</span>
            </div>
        </div>
    );
}