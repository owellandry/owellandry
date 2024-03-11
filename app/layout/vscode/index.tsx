// index.tsx
import Image from "next/image";
import dynamic from 'next/dynamic';
import styles from "@/app/layout/vscode/style.module.css";

const Ventana = dynamic(() => import('@/app/layout/vscode/ventana'), { ssr: false });

export default function Home() {
    const isClient = typeof window !== 'undefined';
    const handleClose = () => {}

    return (
        <div>
            <div className={styles["vscode-icon"]}>
                <Image className={styles["settings-vscode"]} src="/menu/vscode.ico" alt="VSCode" width={60} height={60} />
                <span className={styles["icon-text"]}>Visual Studio Code</span>
            </div>
            {isClient && <Ventana onClose={handleClose} />}
        </div>
    );
}
