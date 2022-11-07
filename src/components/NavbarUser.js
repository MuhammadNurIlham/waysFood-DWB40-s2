import { Container, Nav, Navbar, Button, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useContext, useState } from 'react';
import delivery from '../components/assets/delivery.png';
import User from '../components/assets/user1.png';
import Partner from '../components/assets/partner.png';
import Keranjang from '../components/assets/keranjang.png';
import Product from '../components/assets/product.png';
import Logout from '../components/assets/logout.png';
import LoginModal from '../pages/LoginModal';
import RegisterModal from '../pages/RegisterModal';
import { useQuery } from '@tanstack/react-query';
import { API } from '../config/API';
import { useCart } from 'react-use-cart';
// import { totalItems } from 'react-use-cart'
// import { removeItem } from 'react-use-cart'



function NavbarUser() {
    // useState for form Login
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [state, dispatch] = useContext(UserContext);
    console.log(state);

    // const [totalCart, setTotalCart] = useContext(CartReducer);

    let navigate = useNavigate();
    const handleProfile = () => {
        navigate('/UserProfile')
    }

    // const [state] = useContext(UserContext);
    const id = state.user.id
    const handleAddProduct = () => {
        navigate('/ProductPartner')
    }

    // fetching get data profile
    // let { data: userProfile } = useQuery(["userProfileCache"], async () => {
    //     const response = await API.get(`/user/${id}`);
    //     console.log("ini profile", response.data.data)
    //     return response.data.data;
    // });

    // const { data: userProfile } = useQuery(["profileCacheNavbar"], async () => {
    //     const response = await API.get(`/user/${id}`);
    //     console.log("ini profile", response.data.data);
    //     return response.data.data;
    // })

    // const id = state.user.id;
    const { data: profileNavbar } = useQuery(["profileCacheNavbar"], async () => {
        const response = await API.get(`/user/${id}`);
        console.log("ini respon profile", response.data.data);
        return response.data.data;
    })

    // context
    const logout = () => {
        dispatch({
            type: "LOGOUT",
            isLogin: false,
        });
        return alert('Anda Berhasil Logout')
    }


    // react-use-cart
    const { totalItems } = useCart();
    // console.log("ini total item", totalItems);

    const { removeItem } = useCart();

    return (
        <div>
            <Navbar className='top-page' collapseOnSelect expand="lg" variant="light">
                <Container>
                    {state.isLogin ? (
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
                        {state.isLogin ? (
                            <Nav className='ms-auto'>
                                {state.user.role == "user" ? (
                                    <div className="dropdown">
                                        <Link to="/CartOrder" className='link'>
                                            <button type="button" className="position-relative btn-transparan">
                                                <Badge
                                                    style={{ width: '25px', height: '20px' }}
                                                    className="bg-danger position-absolute badge"
                                                >{totalItems}
                                                </Badge>
                                                <img
                                                    alt="navbar-logo"
                                                    src={Keranjang}
                                                    width="35"
                                                    height="35"
                                                    className="align-top mx-1 pointer"
                                                />
                                            </button>
                                        </Link>
                                        <img
                                            alt="user"
                                            src={profileNavbar?.image ? "http://localhost:5000/uploads/" + profileNavbar?.image : User}
                                            style={{
                                                maxWidth: "50px",
                                                maxHeight: "50px",
                                                objectFit: "cover",
                                            }}
                                            className="dropdown-toggle pointer align-top mx-1 rounded-circle"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        />
                                        <ul className="dropdown-menu">
                                            <li>
                                                <button className="dropdown-item" onClick={() => handleProfile(state.user.id)}>
                                                    Profile
                                                </button>
                                            </li>
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
                                            src={profileNavbar?.image ? "http://localhost:5000/uploads/" + profileNavbar?.image : Partner}
                                            style={{
                                                maxWidth: "50px",
                                                maxHeight: "50px",
                                                objectFit: "cover",
                                            }}
                                            className="dropdown-toggle align-top mx-1 rounded"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        />
                                        <ul className="dropdown-menu">
                                            <li>
                                                <button className="dropdown-item" onClick={() => handleProfile()}>
                                                    <img
                                                        alt="navbar-logo"
                                                        src={User}
                                                        width="20"
                                                        height="20"
                                                        className="align-top mx-1"
                                                    />
                                                    Profile
                                                </button>
                                            </li>
                                            <li className='d-flex'>
                                                <button className="dropdown-item" onClick={() => handleAddProduct()}>
                                                    <img
                                                        alt="navbar-logo"
                                                        src={Product}
                                                        width="20"
                                                        height="20"
                                                        className="align-top mx-1"
                                                    />
                                                    Add Product
                                                    {/* <Link to='/ProductPartner/${sttid}' className='link'>
                                                    </Link> */}
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