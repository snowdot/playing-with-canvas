import React from 'react';
import Form from 'react-bootstrap/Form';

export default function ColorPicker({ color, setColor }) {


    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setColor({
            ...color,
            [name]: value
        });
    }

    const createGradient = () => {
        let output = '-webkit-linear-gradient(left';
        for(let i = 0; i < 36; i++) {
            output += `, hsl(${i*10}, 100%, 50%)`
        }
        output += ')';
        return output;
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Hue</Form.Label>
                <Form.Control
                    name="h"
                    type="range"
                    onChange={handleOnChange}
                    min={0}
                    max={360}
                    value={color.h}
                    style={{backgroundImage: createGradient()}}
                />
                <Form.Label>Saturation</Form.Label>
                <Form.Control
                    name="s"
                    type="range"
                    onChange={handleOnChange}
                    min={0}
                    max={100}
                    value={color.s}
                    style={{backgroundImage: `-webkit-linear-gradient(left, hsl(${color.h},0%,${color.l}%),hsl(${color.h},100%,${color.l}%))`}}
                />
                <Form.Label>Lightness</Form.Label>
                <Form.Control
                    name="l"
                    type="range"
                    onChange={handleOnChange}
                    min={0}
                    max={100}
                    value={color.l}
                    style={{backgroundImage: `-webkit-linear-gradient(left, hsl(${color.h},${color.s}%,0%),hsl(${color.h},${color.s}%,100%))`}}
                />
            </Form.Group>
        </Form>
    );
}
