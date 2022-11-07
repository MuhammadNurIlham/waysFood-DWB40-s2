import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
// import NavbarUser from '../NavbarUser';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { useMutation } from "@tanstack/react-query";
import { API } from '../../config/API';


function LoginModal() {
    let navigate = useNavigate();
    // For Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [message, setMessage] = useState(null);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const { email, password } = form;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            const data = await API.post("/login", from);

            const alert = <Alert variant='success'>Login Berhasil</Alert>
            setMessage(alert);

            let payload = data.data.data;
            dispatch({
                type: "LOGIN_SUCCESS",
                payload,
            });
            navigate("/home");
            console.log("isi payload", payload);
            console.log("this is data login", data);
        } catch (err) {
            console.log(err);
            const alert = <Alert variant='danger'>Login Gagal! || email or password salah</Alert>
            setMessage(alert);
        }
    });

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
                    {message && message}
                    <Form onSubmit={(e) => handleSubmit.mutate(e)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                autoFocus
                                value={email}
                                name="email"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                name="password"
                                onChange={handleChange}
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