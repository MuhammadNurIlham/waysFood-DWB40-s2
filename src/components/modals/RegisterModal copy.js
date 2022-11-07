import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

import { useMutation } from "@tanstack/react-query";
import { API } from '../../config/API';
import { useNavigate } from 'react-router-dom';


function RegisterModal() {
    let navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [message, setMessage] = useState(null);

    // variable for store data with usestate
    const [form, setForm] = useState({
        email: "",
        password: "",
        name: "",
        gender: "",
        phone: "",
        user: "",
        partner: "",
    });

    const { email, password, name, gender, phone, user, partner } = form;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            const response = await API.post("/register", form);
            const alert = (
                <Alert variant="success">Berhasil mendaftarkan akun!</Alert>
            );
            setMessage(alert);

            console.log("this is response register", response)
        } catch (e) {
            console.log(e);
            const alert = (
                <Alert variant="danger">Gagal mendaftarkan akun!</Alert>
            );

            setMessage(alert);
        }
    });

    return (
        <>
            <Button variant="dark" className='mx-1 my-1' onClick={handleShow}>Register</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {message && message}
                    <Form onSubmit={(e) => handleSubmit.Mutate(e)}>
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
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Fullname"
                                value={name}
                                name="name"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Gender"
                                value={gender}
                                name="gender"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Phone"
                                value={phone}
                                name="phone"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Select aria-label="Default select example">
                                <option>As User</option>
                                <option value={user} name="user" onChange={handleChange}>
                                    User
                                </option>
                                <option value={partner} name="partner" onChange={handleChange}>
                                    Partner
                                </option>
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