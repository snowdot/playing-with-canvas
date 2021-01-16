import React, { useEffect, useRef, useState } from 'react';

export default function Canvas({ color, size, caps }) {
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
        context.lineCap = caps;

        if (imageData) {
            context.putImageData(imageData, 0, 0);
        }

        const mouseDownEvent = e => {
            drawing = true;
            context.moveTo(e.clientX, e.clientY);
        }

        const mouseMoveEvent = e => {
            if (drawing) {
                context.lineTo(e.clientX, e.clientY);
                context.stroke();
            }
        }

        const mouseMoveUp = () => {
            drawing = false;
            const image = context.getImageData(0, 0, canvas.width, canvas.height);
            setImageData(image);
        }

        canvas.addEventListener('mousedown', mouseDownEvent);
        canvas.addEventListener('mouseup', mouseMoveUp);
        canvas.addEventListener('mousemove', mouseMoveEvent);

        return () => {
            canvas.removeEventListener('mousedown', mouseDownEvent);
            canvas.removeEventListener('mouseup', mouseMoveUp);
            canvas.removeEventListener('mousemove', mouseMoveEvent);
        }
    }, [innerSize, color, size, caps, imageData]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('resize');
        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('remove');
        }
    }, []);

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
