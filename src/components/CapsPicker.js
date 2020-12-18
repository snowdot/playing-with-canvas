import React from 'react';
import Form from 'react-bootstrap/Form';

export default function CapsPicker({ setCaps }) {

    const handleOnChange = e => {
        setCaps(e.target.value);
    }

    return (
        <Form.Group>
            <Form.Label>End caps</Form.Label>
            <Form.Control onChange={handleOnChange} as="select" htmlSize={3}>
                <option value="butt">butt</option>
                <option value="round">round</option>
                <option value="square">square</option>
            </Form.Control>
        </Form.Group>
    );
}
