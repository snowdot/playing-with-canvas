import React, { useState } from 'react'
import './fonts/App.css';
import Preview from './components/Preview';
import ColorPicker from './components/ColorPicker';

export default function App() {
    const [color, setColor] = useState({
        h: 180,
        s: 50,
        l: 50
    });

    return (
        <main className="container">
            <section className="details">
                <Preview color={color} />
                <ColorPicker
                    color={color}
                    setColor={setColor}    
                />
            </section>
        </main>
    );
}
