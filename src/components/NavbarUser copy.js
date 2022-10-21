import { Container, Nav, Navbar, Button, Modal, Form } from 'react-bootstrap';
import delivery from '../components/assets/delivery.png';
import User from '../components/assets/user1.png';
import Keranjang from '../components/assets/keranjang.png'
import { useState } from 'react';


function NavbarUser() {
    // useState for form Login
    const [showSignIn, setShowSignIn] = useState(false);
    const handleClose = () => setShowSignIn(false);
    const handleShow = () => setShowSignIn(true);
    // end useState form Login

    // useState for form Register
    const [showSignUp, setShowSignUp] = useState(false);
    const handleCloseReg = () => setShowSignUp(false);
    const handleShowReg = () => setShowSignUp(true);
    // end useState form Register


    return (
        <div>
            <Navbar className='top-page' collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand className='navbar-title pointer'>
                        WaysFood
                        <img
                            alt="navbar-logo"
                            src={delivery}
                            width="35"
                            height="35"
                            className="align-top mx-1"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            {/* Register */}
                            <Button variant="dark" className='mx-1 my-1' onClick={handleShowReg}>Register</Button>
                            <Modal show={showSignUp} onHide={handleCloseReg}>
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
                                    <Button variant="secondary">Register
                                    </Button>
                                </Modal.Body>
                                <Modal.Footer className='justify-content-center'>
                                    <p>Already have an account ? Klik <span className='fw-bold pointer log-reg'>Here</span>
                                    </p>
                                </Modal.Footer>
                            </Modal>

                            {/* Login */}
                            <Button variant="dark" className='mx-1 my-1' onClick={handleShow}>Login</Button>
                            <Modal show={showSignIn} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Login</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control
                                                // onChange={handleOnChange}
                                                // value={form.email}
                                                type="email"
                                                placeholder="Email"
                                                autoFocus
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control
                                                // onChange={handleOnChange}
                                                // value={form.password}
                                                type="password"
                                                placeholder="Password"
                                            />
                                        </Form.Group>
                                        {/* Button Form Login */}
                                        <Button variant="secondary" type="submit">
                                            Login
                                        </Button>
                                        {/* End Button Form Login */}
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer className='justify-content-center'>
                                    <p>Don't have an account ? Klik <span className='fw-bold pointer log-reg'>Here</span></p>
                                </Modal.Footer>
                            </Modal>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Navbar className='top-page' collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand className='navbar-title cursor-pointer' href="#home">
                        WaysFood
                        <img
                            alt="navbar-logo"
                            src={delivery}
                            width="35"
                            height="35"
                            className="align-top mx-1"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <img
                                alt="navbar-logo"
                                src={Keranjang}
                                width="35"
                                height="35"
                                className="align-top mx-1"
                            />{' '}
                        </Nav>
                        <div className="dropdown">
                            <img
                                alt="user"
                                src={User}
                                width="35"
                                height="35"
                                className="dropdown-toggle align-top mx-1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            />
                            <ul className="dropdown-menu">
                                <li><button class="dropdown-item">Profile</button></li>
                                <li><hr class="dropdown-divider"></hr></li>
                                <li><button class="dropdown-item">Logout</button></li>
                            </ul>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </div>
    );
}

export default NavbarUser;