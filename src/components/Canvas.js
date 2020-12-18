import React, { useEffect, useRef } from 'react';

export default function Canvas({ color, size, caps }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    
        let painting = false;
    
        const paint = e => {
            if(!painting) return;
    
            ctx.strokeStyle = `hsl(${color.h},${color.s}%,${color.l}%)`;
            ctx.lineWidth = size;
            ctx.lineCap = caps;
            
            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX, e.clientY);
        }
    
        const startPosition = e => {
            painting = true;
            paint(e);
        }
    
        const finishPosition = () => {
            painting = false;
            ctx.beginPath();
        }
    
        canvas.addEventListener('mousedown', startPosition);
        canvas.addEventListener('mouseup', finishPosition);
        canvas.addEventListener('mousemove', paint);

        return () => {
            canvas.removeEventListener('mousedown', startPosition);
            canvas.removeEventListener('mouseup', finishPosition);
            canvas.removeEventListener('mousemove', paint);
        }
    });

    return <canvas ref={canvasRef}></canvas>;
}
