import React from 'react';
import Form from 'react-bootstrap/Form';

export default function CapPicker({ setCap }) {

    const handleOnChange = e => {
        setCap(e.target.value);
    }

    return (
        <Form.Group>
            <Form.Label>End cap</Form.Label>
            <Form.Control onChange={handleOnChange} as="select" htmlSize={3}>
                <option value="butt">butt</option>
                <option value="round">round</option>
                <option value="square">square</option>
            </Form.Control>
        </Form.Group>
    );
}
