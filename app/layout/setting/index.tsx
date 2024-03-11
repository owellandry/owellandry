/* Home.js */
import Image from "next/image";
import styles from "@/app/layout/setting/style.module.css";

export default function Home() {
    return (
        <div>
            <div className={styles["settings-icon"]}>
                <Image className={styles["settings-settings"]} src="/menu/settings.ico" alt="Settings" width={60} height={60} />
                <span className={styles["icon-text"]}>Ajustes</span>
            </div>
        </div>
    );
}
