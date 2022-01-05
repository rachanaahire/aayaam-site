import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


function ContactUs(props) {
    const [nav, setNav] = useState('');
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Contact Us
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ padding: '10px' }}>
                        &#9971; &nbsp; NIT Trichy, Tiruchirappalli, Tamil Nadu, 620015 <br />
                        &#128231; &nbsp; aayaam@nitt.edu
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ContactUs;
