// src/layout/modules/chrome.jsx

import React from "react";
import { FaWindowClose, FaMinus, FaSquare, FaArrowLeft, FaArrowRight, FaRedo, FaHome, FaLock, FaStar } from 'react-icons/fa';
import styles from "./chrome.module.css";
import Content from "./content/chrome.content";

export default function ModalChrome({ showModal, toggleModal }) {
    return (
        <div>
            {showModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <div className={styles.contentButton}>
                            <div className={styles.chromeContentButton}>
                                <button className={styles.buttonClose} onClick={toggleModal}><FaWindowClose /></button>
                                <button className={styles.buttonMinimize} onClick={toggleModal}><FaMinus /></button>
                                <button className={styles.buttonOpen} onClick={toggleModal}><FaSquare /></button>
                            </div>
                        </div>
                        <div className={styles.BarraBusqueda}>
                            <div className={styles.chromeSearch}>
                                <div className={styles.iconsBarraBusqueda}>
                                    <FaArrowLeft />
                                    <div className={styles.iconBack}>
                                        <FaArrowRight />
                                    </div>
                                    <FaRedo />
                                    <div className={styles.iconHome}>
                                        <FaHome />
                                    </div>
                                </div>
                                <div className={styles.contentSearch}>
                                    <div className={styles.contentSearchIcons}>
                                        <div className={styles.iconLook}>
                                            <FaLock />
                                        </div>
                                            <span className={styles.textIconSearch}>
                                                <a href="http://owellandry.xyz" target="_blank" rel="noopener noreferrer">owellandry.xyz</a>
                                            </span>
                                        <div className={styles.iconStart}>
                                            <FaStar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contentCodeChrome}>
                            <Content/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
