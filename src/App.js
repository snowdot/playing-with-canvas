import React, { useState } from 'react'
import './fonts/App.css';
import Preview from './components/Preview';
import ColorPicker from './components/ColorPicker';
import SizePicker from './components/SizePicker';
import CapsPicker from './components/CapsPicker';

export default function App() {
    const [color, setColor] = useState({
        h: 180,
        s: 50,
        l: 50
    });
    const [size, setSize] = useState(1);
    const [caps, setCaps] = useState('');

    return (
        <main className="container">
            <section className="details">
                <Preview color={color} />
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
        </main>
    );
}
