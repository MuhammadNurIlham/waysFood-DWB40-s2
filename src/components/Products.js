import React, { useContext } from 'react';
import geprek from './assets/geprek.png';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { API } from '../config/API';

function Products() {
    const navigate = useNavigate();

    const ListProduct = (id) => {
        navigate(`/ProductPartner/${id}`)
    }

    let { data: productPartner } = useQuery(['productPartnerCache'], async () => {
        const response = await API.get('/users');
        const partner = response.data.data.filter((p) => p.role === "partner")
        return partner
    });

    const [state, dispatch] = useContext(UserContext);



    return (
        <div className='container'>
            {state.isLogin ? (state.user.role === "user" ?
                (
                    <div className='row py-2 mt-4'>
                        <h3 className='title'>Restaurant Near You</h3>
                    </div>
                ) : (
                    <div className='row py-2 mt-4'>
                        <h3 className='title'>Your Product</h3>
                    </div>
                )
            ) : (
                <div className='row py-2 mt-4'>
                    <h3 className='title'>Restaurant Near You</h3>
                </div>
            )}
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {productPartner?.map((item, index) => {
                    return (
                        <div className="col pb-3">
                            <div className="card h-100" key={item.id}>
                                <img src={!item?.image ? geprek : "http://localhost:5000/uploads/" + item?.image}
                                    className="card-img-top img-fluid"
                                    style={{
                                        maxHeight: "300px",
                                        objectFit: "cover",
                                    }}
                                    alt={item.name}></img>
                                <div className="card-body">
                                    <h5 className="card-title pointer" onClick={() => ListProduct(item.id)}>{item?.name}</h5>
                                    <p className="card-text">{item?.location} - 1.2 Km</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products;