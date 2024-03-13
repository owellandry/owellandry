/* Home.js */
import React from "react";
import Notes from '../../assets/notes.ico';
import styles from "./style.module.css";

export default function Home() {
    return (
        <div>
            <div className={styles["notes-icon"]}>
                <img className={styles["settings-notes"]} src={Notes} alt="notes" width={60} height={60} />
                <span className={styles["icon-text"]}>Notas</span>
            </div>
        </div>
    );
}