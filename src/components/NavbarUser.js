import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { CartReducer } from '../context/CartReducer';
import { useContext, useState } from 'react';
import delivery from '../components/assets/delivery.png';
import User from '../components/assets/user1.png';
import Partner from '../components/assets/partner.png';
import Keranjang from '../components/assets/keranjang.png'
import Product from '../components/assets/product.png';
import Logout from '../components/assets/logout.png';
import LoginModal from '../pages/LoginModal';
import RegisterModal from '../pages/RegisterModal';



function NavbarUser() {
    // useState for form Login
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const [dataUser, dispatch] = useContext(UserContext);
    // console.log(dataUser.level);

    // const [totalCart, setTotalCart] = useContext(CartReducer);

    const logout = () => {
        dispatch({
            type: "LOGOUT",
            isLogin: false,
        });
        return alert('Anda Berhasil Logout')
    }

    return (
        <div>
            <Navbar className='top-page' collapseOnSelect expand="lg" variant="light">
                <Container>
                    {dataUser.isLogin ? (
                        <Navbar.Brand className='navbar-title pointer' >
                            <Link to="/Home" className='link'>
                                WaysFood
                                <img
                                    alt="navbar-logo"
                                    src={delivery}
                                    width="35"
                                    height="35"
                                    className="align-top mx-1"
                                />
                            </Link>
                        </Navbar.Brand>
                    ) : (
                        <Navbar.Brand className='navbar-title pointer'>
                            <Link to="/" className='link'>
                                WaysFood
                                <img
                                    alt="navbar-logo"
                                    src={delivery}
                                    width="35"
                                    height="35"
                                    className="align-top mx-1"
                                />
                            </Link>
                        </Navbar.Brand>
                    )}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {dataUser.isLogin ? (
                            <Nav className='ms-auto'>
                                {dataUser.level === "user" ? (
                                    <div className="dropdown">
                                        <Link to="/CartOrder" className='link'>
                                            <button type="button" className="position-relative btn-transparan">
                                                <img
                                                    alt="navbar-logo"
                                                    src={Keranjang}
                                                    width="35"
                                                    height="35"
                                                    className="align-top mx-1 pointer"
                                                />
                                                <span className="position-absolute top-40 start-70 translate-middle badge rounded-pill bg-danger">
                                                    {/* {totalCart.counter.length} */}
                                                </span>
                                            </button>
                                        </Link>
                                        <img
                                            alt="user"
                                            src={User}
                                            width="35"
                                            height="35"
                                            className="dropdown-toggle pointer align-top mx-1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        />
                                        <ul className="dropdown-menu">
                                            <li>
                                                <button class="dropdown-item">
                                                    <Link to="/UserProfile" className='link'>
                                                        Profile
                                                    </Link>
                                                </button></li>
                                            <li><hr class="dropdown-divider"></hr></li>
                                            <li>
                                                <button class="dropdown-item" onClick={() => logout()}>
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    <div className="dropdown">
                                        <img
                                            alt="user"
                                            src={Partner}
                                            width="35"
                                            height="35"
                                            className="dropdown-toggle align-top mx-1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        />
                                        <ul className="dropdown-menu">
                                            <li>
                                                <button class="dropdown-item">
                                                    <Link to="/UserProfile" className='link'>
                                                        <img
                                                            alt="navbar-logo"
                                                            src={User}
                                                            width="20"
                                                            height="20"
                                                            className="align-top mx-1"
                                                        />
                                                        Profile
                                                    </Link>
                                                </button>
                                            </li>
                                            <li className='d-flex'>
                                                <button class="dropdown-item">
                                                    <Link to='/AddProduct' className='link'>
                                                        <img
                                                            alt="navbar-logo"
                                                            src={Product}
                                                            width="20"
                                                            height="20"
                                                            className="align-top mx-1"
                                                        />
                                                        Add Product
                                                    </Link>
                                                </button>
                                            </li>
                                            <li><hr class="dropdown-divider"></hr></li>
                                            <li className='d-flex'>
                                                <button class="dropdown-item" onClick={() => logout()}>
                                                    <img
                                                        alt="navbar-logo"
                                                        src={Logout}
                                                        width="20"
                                                        height="20"
                                                        className="align-top mx-1"
                                                    />
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>)
                                }
                            </Nav>
                        ) : (
                            <Nav className='ms-auto'>
                                <Button variant="dark" className='mx-1 my-1' onClick={() => setShowRegister(true)}>Register</Button>
                                <Button variant="dark" className='mx-1 my-1' onClick={() => setShowLogin(true)}>Login</Button>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            <LoginModal show={showLogin} setShow={setShowLogin} setShowRegister={setShowRegister} />
            <RegisterModal show={showRegister} setShow={setShowRegister} setShowLogin={setShowLogin} />

        </div >
    );
}

export default NavbarUser;