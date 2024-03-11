/* Home.js */
import Image from "next/image";
import styles from "@/app/layout/notes/style.module.css";

export default function Home() {
    return (
        <div>
            <div className={styles["notes-icon"]}>
                <Image className={styles["settings-notes"]} src="/menu/notes.ico" alt="notes" width={60} height={60} />
                <span className={styles["icon-text"]}>Notas</span>
            </div>
        </div>
    );
}
