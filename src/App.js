import React, { useState } from 'react'
import './fonts/App.css';
import Preview from './components/Preview';
import ColorPicker from './components/ColorPicker';
import SizePicker from './components/SizePicker';
import CapsPicker from './components/CapsPicker';
import Canvas from './components/Canvas';

export default function App() {
    const [color, setColor] = useState({
        h: 180,
        s: 50,
        l: 50
    });
    const [size, setSize] = useState(10);
    const [caps, setCaps] = useState('round');

    return (
        <main className="container">
            <section className="details">
                <Preview
                    color={color}
                    size={size}
                    caps={caps}
                />
                <ColorPicker
                    color={color}
                    setColor={setColor}    
                />
                <SizePicker
                    setSize={setSize}
                />
                <CapsPicker
                    setCaps={setCaps}
                />
            </section>
            <Canvas
                color={color}
                size={size}
                caps={caps}
            />
        </main>
    );
}
