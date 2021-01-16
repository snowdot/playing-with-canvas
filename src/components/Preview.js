import React, { useRef, useEffect } from 'react';

export default function Preview({ color, size, cap }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.strokeStyle = `hsl(${color.h},${color.s}%,${color.l}%)`;
        ctx.lineWidth = size;
        ctx.lineCap = cap;

        ctx.beginPath();
        ctx.moveTo(20, 20);
        ctx.lineTo(80, 80);
        ctx.stroke();

        return () => {
            ctx.clearRect(0, 0, 100, 100);
        }
    }, [color, size, cap]);

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
