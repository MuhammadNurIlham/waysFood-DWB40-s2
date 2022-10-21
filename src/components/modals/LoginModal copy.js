import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
// import NavbarUser from '../NavbarUser';


function LoginModal() {
    // For Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // For Login
    // const [login, setLogin] = useState(false);

    return (
        <>
            {/* Button Login Navbar */}
            <Button variant="dark" className='mx-1 my-1' onClick={handleShow}>Login</Button>
            {/* End Button Login Navbar */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
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
                    </Form>

                    {/* Button Form Login */}
                    <Button variant="secondary" onClick={handleClose}>
                        Login
                    </Button>
                    {/* End Button Form Login */}

                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                    <p>Don't have an account ? Klik <span>Here</span></p>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LoginModal;
// render(<Example />);