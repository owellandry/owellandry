/* Home.js */
import React from "react";
import discord from '../../assets/discord.ico';
import styles from "./style.module.css";

export default function Home() {
    return (
        <div>
            <div className={styles["discord-icon"]}>
                <img className={styles["settings-discord"]} src={discord} alt="discord" width={60} height={60} />
                <span className={styles["icon-text"]}>Discord</span>
            </div>
        </div>
    );
}