import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function RegisterModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="dark" className='mx-1 my-1' onClick={handleShow}>Register</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Fullname"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Gender"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Phone"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Select aria-label="Default select example">
                                <option>As User</option>
                                <option value="1">User</option>
                                <option value="2">Partner</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                    <Button variant="secondary" onClick={handleClose}>
                        Register
                    </Button>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                    <p>Already have an account ? Klik <span className='fw-bold'>Here</span></p>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RegisterModal;
// render(<Example />);