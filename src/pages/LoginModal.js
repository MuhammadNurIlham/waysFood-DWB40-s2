import React, { useContext, useState } from 'react';
import { Button, Form, Modal, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useMutation } from "@tanstack/react-query";
import { API } from '../config/API';
import { UserContext } from '../context/UserContext';
// import { DbUser } from '../Data-Dummy/DbUser';
// import NavbarUser from '../NavbarUser';


function LoginModal({ show, setShow, setShowRegister }) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // init useContext
    const [state, dispatch] = useContext(UserContext);

    // useState
    const [message, setMessage] = useState(null);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    // take data input base on event change realtime
    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        // console.log(form);
    }

    // init useNavigate
    const navigate = useNavigate()

    const handleOnSubmit = useMutation(async (e) => {
        try {
            e.preventDefault()
            const data = await API.post('/login', form);
            const alert = <Alert variant='success'>Login Berhasil!</Alert>
            setMessage(alert);

            let payload = data.data.data;
            if (payload.role == "user") {
                navigate('/UserProfile');
            } else if (payload.role == "partner") {
                navigate('/IncomeTransaction');
            }
            dispatch({
                type: "LOGIN_SUCCESS",
                payload,
            });

            handleClose()

            // navigate('/User')
            console.log("isi payload", payload)
            console.log("isi datanya", data);
        } catch (e) {
            console.log(e)
            const alert = <Alert variant='danger'>Login Gagal!</Alert>
            setMessage(alert);
        }
    });

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {message && message}
                    <Form onSubmit={(e) => handleOnSubmit.mutate(e)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                onChange={handleOnChange}
                                value={form.email}
                                name='email'
                                type='email'
                                placeholder='Email'
                                autoFocus
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                name="password"
                                type="password"
                                value={form.password}
                                onChange={handleOnChange}
                                placeholder="Password"
                                required
                            />
                        </Form.Group>
                        {/* Button Form Login */}
                        <div className="d-grid gap-2">
                            <Button variant="dark" size="md" type="submit" value={"Login"}>
                                Login
                            </Button>
                        </div>
                        {/* End Button Form Login */}
                    </Form>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                    <p>Don't have an account ? Klik <span className='fw-bold pointer log-reg'
                        onClick={() => {
                            setShow(false);
                            setShowRegister(true);
                        }}
                    >Here</span></p>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LoginModal;
// render(<Example />);