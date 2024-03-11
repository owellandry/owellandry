/* Home.js */
import React from "react";
import chrome from '../../assets/chrome.ico';
import styles from "./style.module.css";

export default function Home() {
    return (
        <div>
            <div className={styles["chrome-icon"]}>
                <img className={styles["settings-chrome"]} src={chrome} alt="chrome" width={60} height={60} />
                <span className={styles["icon-text"]}>Google Chrome</span>
            </div>
        </div>
    );
}