/* Home.js */
import React from "react";
import settings from '../../assets/settings.ico';
import styles from "./style.module.css";

export default function Home() {
    return (
        <div>
            <div className={styles["settings-icon"]}>
                <img className={styles["settings-settings"]} src={settings} alt="Settings" width={60} height={60} />
                <span className={styles["icon-text"]}>Ajustes</span>
            </div>
        </div>
    );
}