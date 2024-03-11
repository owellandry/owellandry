/* Home.js */
import Image from "next/image";
import styles from "@/app/layout/console/style.module.css";

export default function Home() {
    return (
        <div>
            <div className={styles["console-icon"]}>
                <Image className={styles["settings-console"]} src="/menu/console.ico" alt="console" width={60} height={60} />
                <span className={styles["icon-text"]}>consola</span>
            </div>
        </div>
    );
}
