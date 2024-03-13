// src/layout/Home.js

import React, { useState } from "react";
import styles from "./style.module.css";
import ModalChrome from '../modules/chrome';
import chromeIcon from '../../assets/chrome.ico'; // Importa la imagen de Chrome

export default function Home() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <ModalChrome showModal={showModal} toggleModal={toggleModal} />
            <div className={styles["chrome-icon"]}>
                <img 
                    className={styles["settings-chrome"]} 
                    src={chromeIcon} 
                    alt="chrome" 
                    width={60} 
                    height={60} 
                    onClick={toggleModal}
                />
                <span className={styles["icon-text"]}>Google Chrome</span>
            </div>
        </div>
    );
}
