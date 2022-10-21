import React, { useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { DbUser } from '../Data-Dummy/DbUser';
// import NavbarUser from '../NavbarUser';


function LoginModal({ show, setShow, setShowRegister }) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // init useContext
    const [dataUser, dispatch] = useContext(UserContext);

    // useState
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

    const handleOnSubmit = (e) => {
        e.preventDefault()

        const DbUsers = DbUser.find((person) => person.email === form.email)
        if (DbUsers) {
            if (form.email === DbUsers.email && form.password === DbUsers.password && DbUsers.level === "user") {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: form,
                    isLogin: true,
                    vallevel: "user",
                });
                setShow(false)
                return navigate('/User')
            } else if (form.email === DbUsers.email && form.password === DbUsers.password && DbUsers.level === "partner") {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: form,
                    isLogin: true,
                    vallevel: "partner",
                });
                setShow(false)
                return navigate('/IncomeTransaction')
            } else {
                return alert('Password salah')
            }
        } else {
            return alert('Data tidak ditemukan')
        }

    }



    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                onChange={handleOnChange}
                                value={form.email}
                                name='email'
                                type='text'
                                placeholder='Email'
                                autoFocus
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                name="password"
                                type="password"
                                onChange={handleOnChange}
                                value={form.password}
                                placeholder="Password"
                                required
                            />
                        </Form.Group>
                        {/* Button Form Login */}
                        <div className="d-grid gap-2">
                            <Button variant="dark" size="md" type="submit">
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