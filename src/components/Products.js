import React, { useContext } from 'react';
import { useState } from 'react';
import geprek from './assets/geprek.png';
import nasgor from './assets/nasgor.png';
import pecelAyam from './assets/pecelAyam.png';
import kopikenangan from './assets/kopikenangan.png';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([
        { image: geprek, name: "Ayam Geprek", radius: "0,2 Km" },
        { image: nasgor, name: "Nasi Goreng Mas Rony", radius: "0,6 Km" },
        { image: pecelAyam, name: "Pecel Ayam Prambanan", radius: "0,6 Km" },
        { image: kopikenangan, name: "Kopi Kenangan", radius: "1,6 Km" }
    ])

    const [dataUser, dispatch] = useContext(UserContext);

    const warningLogin = () => {
        return alert('Anda belum Login, silahkan login terlebih dahulu')
    }

    return (
        <div className='container'>
            <div className='row py-2 mt-4'>
                <h3 className='title'>Restaurant Near You</h3>
            </div>
            <div className='row'>
                <div className="d-lg-flex gap-4 justify-content-between">
                    {products.map((product) => (
                        <div className="card my-3 pointer">
                            <img src={product.image} className="card-img-top" alt=""></img>
                            {dataUser.isLogin ? (
                                <Link to="/UserMenus" className='link'>
                                    <div className="card-body">
                                        <h6 className="title">{product.name}</h6>
                                        <p className="card-text font-income">{product.radius}</p>
                                    </div>
                                </Link>
                            ) : (
                                <Link to="/" className='link'>
                                    <div className="card-body" onClick={() => warningLogin()}>
                                        <h6 className="title">{product.name}</h6>
                                        <p className="card-text font-income">{product.radius}</p>
                                    </div>
                                </Link>
                            )}
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products;