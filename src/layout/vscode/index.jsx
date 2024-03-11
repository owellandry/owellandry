/* Home.js */
import styles from "./style.module.css"
import React from "react";
import vscode from '../../assets/vscode.ico'

export default function Home() {
    return (
        <div>
            <div className={styles["vscode-icon"]}>
                <img className={styles["settings-vscode"]} src={vscode} alt="vscode" width={60} height={60} />
                <span className={styles["icon-text"]}>Visual Studio Code</span>
            </div>
        </div>
    );
}

