// ventana.tsx
import styles from "@/app/layout/vscode/style.module.css";

interface VentanaProps {
    onClose: () => void;
}

export default function Ventana({ onClose }: VentanaProps) {
    return (
        <div className={styles["modal-background"]} onClick={onClose}>
            <div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()}>
                <p>Contenido de la ventana modal</p>
            </div>
        </div>
    );
}
