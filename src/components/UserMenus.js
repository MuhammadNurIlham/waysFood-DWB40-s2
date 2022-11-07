import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useQuery, useMutation } from '@tanstack/react-query';
import { API } from '../config/API';
import ai from '../components/assets/ai.jpg';
import DeleteModal from './modals/DeleteModal';

// import { CartReducer } from '../context/CartReducer';

function UserMenus() {
    // const [MenuProduct, setMenuProducts] = useState()
    let navigate = useNavigate();

    const handleOrder = () => {
        navigate('/CartOrder')
    }

    const [state, dispatch] = useContext(UserContext);
    const [idDelete, setIdDelete] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let { data: products, refetch } = useQuery(["productsCache"], async () => {
        const response = await API.get("/products");
        console.log("ini esoifjdodsaf", response.data.data)
        return response.data.data;
    });

    // const handleBuy = useMutation(async (e) => {
    //     try{
    //         e.preventDefault();
    //         const config = {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         };

    //         const data = {

    //         }
    //     }
    // })

    const handleDelete = (id) => {
        setIdDelete(id);
        handleShow();
    }

    const deleteById = useMutation(async (id) => {
        try {
            await API.delete(`/product/${id}`);
            refetch();
        } catch (error) {
            console.log(error);
        }
    });

    useEffect(() => {
        if (confirmDelete) {
            handleClose();

            deleteById.mutate(idDelete);
            setConfirmDelete(null)
        }
    }, [confirmDelete]);

    return (
        <div className='container py-5'>
            <div className='row py-3'>
                <h3 className='title'>Geprek Bensu, Menus</h3>
            </div>
            {/* Tampilan User All Product */}
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {products?.map((item, index) => {
                    return (
                        <div className="col" key={index}>
                            <div className="card h-100">{index + 1}
                                <img src={!item?.image ? ai : "http://localhost:5000/uploads/" + item.image} className="card-img-top" alt="image"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.price}</p>
                                </div>
                                <div className="card-footer border-0">
                                    {state.user.role == "partner" ? (
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-order text-center btn-warning" type="button">Edit</button>
                                            <button className="btn btn-order text-center btn-warning" type="button" onClick={() => { handleDelete(item.id) }}>Delete</button>
                                        </div>
                                    ) : (
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-order text-center btn-warning" type="button" onClick={() => handleOrder()}>
                                                Order
                                            </button>
                                        </div>
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <DeleteModal setConfirmDelete={setConfirmDelete} show={show} handleClose={handleClose} />
        </div>
    )
}

export default UserMenus;