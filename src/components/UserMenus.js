import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MenuProduct } from '../Data-Dummy/MenuProduct';
import { UserContext } from '../context/UserContext';
// import { CartReducer } from '../context/CartReducer';

function UserMenus() {
    // const [MenuProduct, setMenuProducts] = useState()
    const [dataUser, dispatch] = useContext(UserContext);

    // const [totalCart, setTotalCart] = useContext(CartReducer);

    // function AddCounter(item) {
    //     let newData = totalCart.counter;
    //     newData.push({ ...item });
    //     setTotalCart({
    //         type: "Add",
    //         setCounter: newData,
    //     })
    //     // console.log(totalCart);
    // }

    return (
        <div className='container py-5'>
            <div className='row py-3'>
                <h3 className='title'>Geprek Bensu, Menus</h3>
            </div>
            <div className='row'>
                <div className='user-menu justify-content-between'>
                    {MenuProduct.map((menuProduct) => {
                        return (
                            <div className='card my-3'>
                                <img src={menuProduct.image} className='card-img-top' alt=''></img>
                                <div className='card-body'>
                                    <h6 className='title'>{menuProduct.name}</h6>
                                    <p className='card-text date-order fw-bold'>{menuProduct.price}</p>
                                    {dataUser.level === "user" ? (
                                        <div class="d-grid gap-2">
                                            <button class="btn btn-order text-center btn-warning" type="button" onClick={() => alert("Test")}>
                                                Order
                                            </button>
                                        </div>
                                    ) : (
                                        <Link to="/AddProduct" className="link">
                                            <div class="d-grid gap-2">
                                                <button class="btn btn-order text-center btn-warning" type="button">Edit Product</button>
                                            </div>
                                        </Link>
                                    )
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default UserMenus;