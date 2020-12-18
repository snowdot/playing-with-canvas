import React, { useRef, useEffect } from 'react';

export default function Preview({ color, size, caps }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.strokeStyle = `hsl(${color.h},${color.s}%,${color.l}%)`;
        ctx.lineWidth = size;
        ctx.lineCap = caps;

        ctx.beginPath();
        ctx.moveTo(20,20);
        ctx.lineTo(80,80);
        ctx.stroke();

        return () => {
            ctx.clearRect(0,0,100,100);
        }
    }, [color, size, caps]);

    return (
        <canvas
            ref={canvasRef}
            className="preview"
            width="100px"
            height="100px"
        >
        </canvas>
    )
}
