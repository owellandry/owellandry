/* Home.js */
import Image from "next/image";
import styles from "@/app/layout/discord/style.module.css";

export default function Home() {
    return (
        <div>
            <div className={styles["discord-icon"]}>
                <Image className={styles["settings-discord"]} src="/menu/discord.ico" alt="discord" width={60} height={60} />
                <span className={styles["icon-text"]}>Discord</span>
            </div>
        </div>
    );
}
