import React, { useState } from 'react';
import { Button, Form, Modal, Alert } from 'react-bootstrap';
import { useMutation } from "@tanstack/react-query";
import { API } from '../config/API'
import { useNavigate } from 'react-router-dom';

function RegisterModal({ show, setShow, setShowLogin }) {
    const handleClose = () => setShow(false);

    // let navigate = useNavigate();

    const [message, setMessage] = useState(null);

    const [form, setForm] = useState({
        email: "",
        password: "",
        name: "",
        gender: "",
        phone: "",
        role: "",
    });
    const { email, password, name, gender, phone, role } = form;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    //function for handle insert data with useMutation
    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();
            const response = await API.post("/register", form);
            const alert = (
                <Alert variant="success">Berhasil mendaftarkan akun!</Alert>
            );
            setMessage(alert);
            console.log("ini response register", response);
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
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
                            <Form.Select aria-label="Default select example" name='role' onChange={handleChange}>
                                <option>As User</option>
                                <option value={"user"}>
                                    User
                                </option>
                                <option value={"partner"}>
                                    Partner
                                </option>
                            </Form.Select>
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <input type={"submit"} value={"Register"} variant="dark" size="md" onClick={() => {
                                setShow(false);
                                setShowLogin(true);
                            }}/>
                        </div>
                    </Form>
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