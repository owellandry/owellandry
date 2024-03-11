/* Home.js */
import Image from "next/image";
import styles from "@/app/layout/chrome/style.module.css";

export default function Home() {
    return (
        <div>
            <div className={styles["chrome-icon"]}>
                <Image className={styles["settings-chrome"]} src="/menu/chrome.ico" alt="chrome" width={60} height={60} />
                <span className={styles["icon-text"]}>Google Chrome</span>
            </div>
        </div>
    );
}
