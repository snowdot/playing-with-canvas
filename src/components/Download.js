import React, { useRef } from 'react';

export default function Download({ canvas }) {
    const linkRef = useRef(null);

    const handleOnClick = () => {
        const link = linkRef.current;
        link.href = canvas.toDataURL();
    }

    return (
        <a
            ref={linkRef}
            className="download"
            href="#canvas"
            download="canvas.png"
            onClick={handleOnClick}
        >
            <i className="fas fa-file-download"></i>
        </a>
    )
}
