import React from 'react';
import Form from 'react-bootstrap/Form';

export default function SizePicker({ setSize }) {

    const handleOnChange = e => {
        setSize(Number(e.target.value));
    }

    return (
        <Form.Group>
            <Form.Label>Size</Form.Label>
            <Form.Control onChange={handleOnChange} as="select" htmlSize={3}>
                <option value="1">1px</option>
                <option value="2">2px</option>
                <option value="3">3px</option>
                <option value="4">4px</option>
                <option value="5">5px</option>
                <option value="6">6px</option>
                <option value="7">7px</option>
                <option value="8">8px</option>
                <option value="9">9px</option>
                <option value="10">10px</option>
            </Form.Control>
        </Form.Group>
    );
}
