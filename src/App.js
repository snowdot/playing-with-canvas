import React, { useState } from 'react'
import './css/App.css';
import Preview from './components/Preview';
import ColorPicker from './components/ColorPicker';
import SizePicker from './components/SizePicker';
import CapsPicker from './components/CapPicker';
import Canvas from './components/Canvas';
import Download from './components/Download';

export default function App() {
    const [color, setColor] = useState({
        h: 180,
        s: 50,
        l: 50
    });
    const [size, setSize] = useState(10);
    const [cap, setCap] = useState('round');
    const [canvas, setCanvas] = useState(null);

    return (
        <>
            <main className="container">
                <section className="details">
                    <Preview
                        color={color}
                        size={size}
                        cap={cap}
                    />
                    <ColorPicker
                        color={color}
                        setColor={setColor}
                    />
                    <SizePicker
                        setSize={setSize}
                    />
                    <CapsPicker
                        setCap={setCap}
                    />
                </section>
                <Canvas
                    color={color}
                    size={size}
                    cap={cap}
                    setCanvas={setCanvas}
                />
            </main>
            <Download
                canvas={canvas}
            />
        </>
    );
}
