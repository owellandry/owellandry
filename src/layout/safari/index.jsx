/* Home.js */
import React from "react";
import safari from '../../assets/safari.ico';
import styles from "./style.module.css";

export default function Home() {
    return (
        <div>
            <div className={styles["safari-icon"]}>
                <img className={styles["settings-safari"]} src={safari} alt="Safari" width={60} height={60} />
                <span className={styles["icon-text"]}>Safari</span>
            </div>
        </div>
    );
}