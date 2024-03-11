// app/page/BackPc.tsx

import Image from 'next/image';
import { useState } from 'react';
import './BackPc.css';

export default function BackPc() {
    const [likes, setLikes] = useState(0);

    const handleLikeClick = () => {
        setLikes(likes + 1);
    };

    return (
        <div className="">
            <div className="container-folder">
                <Image className="container-folder-bdr" src="/menu/folder.ico" alt="Carpeta" width={80} height={80} />
                <span className="icon-text">carpeta</span>
            </div>
            <button onClick={handleLikeClick}>Like ({likes})</button>
        </div>
    );
}
