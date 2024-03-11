/* Home.js */
import Image from "next/image";
import styles from "@/app/layout/safari/style.module.css";

export default function Home() {
    return (
        <div>
            <div className={styles["safari-icon"]}>
                <Image className={styles["settings-safari"]} src="/menu/safari.ico" alt="Safari" width={60} height={60} />
                <span className={styles["icon-text"]}>Safari</span>
            </div>
        </div>
    );
}
