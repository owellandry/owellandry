/* Home.js */
import React from "react";
import settings from '../../assets/settings.ico';
import styles from "./style.module.css";

export default function Home() {
    return (
        <div>
            <div className={styles["notes-icon"]}>
                <img className={styles["settings-notes"]} src={settings} alt="notes" width={60} height={60} />
                <span className={styles["icon-text"]}>Notas</span>
            </div>
        </div>
    );
}