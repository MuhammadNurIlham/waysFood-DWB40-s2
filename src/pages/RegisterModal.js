import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function RegisterModal({ show, setShow, setShowLogin }) {
    const handleClose = () => setShow(false);

    return (
        <>
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
                                <option value="User">User</option>
                                <option value="Partner">Partner</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                    <div className="d-grid gap-2">
                        <Button variant="dark" size="md" onClick={() => {
                            setShow(false);
                            setShowLogin(true);
                        }}>
                            Register
                        </Button>
                    </div>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                    <p>Already have an account ? Klik <span className='fw-bold pointer log-reg'
                        onClick={() => {
                            setShow(false);
                            setShowLogin(true);
                        }}
                    >Here</span>
                    </p>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default RegisterModal;
// render(<Example />);