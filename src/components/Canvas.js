import React, { useEffect, useRef, useState } from 'react';

export default function Canvas({ color, size, cap, setCanvas }) {
    const canvasRef = useRef(null);
    const [imageData, setImageData] = useState(null);
    const [innerSize, setInnerSize] = useState({
        width: window.innerHeight,
        height: window.innerWidth
    });

    useEffect(() => {
        let drawing = false;

        const dpi = window.devicePixelRatio;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.height = innerSize.width * dpi;
        canvas.width = innerSize.height * dpi;

        context.strokeStyle = `hsl(${color.h},${color.s}%,${color.l}%)`;
        context.lineWidth = size;
        context.lineCap = cap;

        if (imageData) {
            context.putImageData(imageData, 0, 0);
        }

        const getMousePositions = e => {
            const rect = canvas.getBoundingClientRect();
            const x = Math.trunc((e.clientX - rect.left));
            const y = Math.trunc((e.clientY - rect.top));
            return { x, y };
        }

        const mouseDownEvent = e => {
            const { x, y } = getMousePositions(e);
            drawing = true;
            context.moveTo(x, y);
        }

        const mouseMoveEvent = e => {
            if (drawing) {
                const { x, y } = getMousePositions(e);
                context.lineTo(x, y);
                context.stroke();
            }
        }

        const mouseMoveUp = () => {
            drawing = false;
            const image = context.getImageData(0, 0, canvas.width, canvas.height);
            setImageData(image);
            setCanvas(canvas);
        }

        canvas.addEventListener('mousedown', mouseDownEvent);
        canvas.addEventListener('mouseup', mouseMoveUp);
        canvas.addEventListener('mousemove', mouseMoveEvent);

        return () => {
            canvas.removeEventListener('mousedown', mouseDownEvent);
            canvas.removeEventListener('mouseup', mouseMoveUp);
            canvas.removeEventListener('mousemove', mouseMoveEvent);
        }
    }, [innerSize, color, size, cap, imageData, setCanvas]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    const handleResize = () => {
        setInnerSize({
            width: window.innerHeight,
            height: window.innerWidth
        });
    }

    return <canvas
        ref={canvasRef}
        className="canvas"
    ></canvas>;
}
