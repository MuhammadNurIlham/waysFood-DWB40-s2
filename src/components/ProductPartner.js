import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useQuery, useMutation } from '@tanstack/react-query';
import { API } from '../config/API';
import ai from '../components/assets/ai.jpg';
import * as Icon from "react-icons/fa";
import rupiah from 'rupiah-format';
import imgEmpty from '../components/assets/empty.png'
import { Table } from 'react-bootstrap';
import DeleteModal from './modals/DeleteModal';
import { useCart } from "react-use-cart";


function ProductPartner() {
    const [state, dispatch] = useContext(UserContext);
    const [idDelete, setIdDelete] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const navigate = useNavigate();
    const { id } = useParams()

    let { data: products, refetch } = useQuery(["productsCache"], async () => {
        const response = await API.get("/product");
        console.log("ini esoifjdodsaf", response.data.data)
        return response.data.data;
    });
    
    const handleEdit = (id) => {
        navigate('/EditProduct/' + id)
    }

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

    // product base on user id partner
    const user_id = state.user.id
    let { data: productList, isLoading } = useQuery(['productListCache'], async () => {
        const response = await API.get(`/product/${id}`);
        console.log("ini response product list", productList);
        return response.data.data;
    });

    const { addItem } = useCart();
    // console.log("ini total item", totalItems);

    return (
        <div className='container'>
            {/* Tampilan All Product Base on ID user Product */}
            <div className="product">
                <p className="h1 mt-4">List Product, {state.user.name}</p>
                <hr />
                <div className="add-produc text-end mb-3">
                    {state.user.role == "partner" ?
                        (
                            <Link to={"/AddProduct/" + id} className="btn btn-primary">Add Product <Icon.FaPlusCircle /></Link>
                        ) : (
                            <Link to={"/Home"} className="btn btn-primary">Back</Link>
                        )}

                </div>
                {productList?.length !== 0 ? (
                    <Table striped bordered hover variant='primary'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Description</th>
                                <th>price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList?.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="align-middle text-center">{index + 1}</td>
                                    <td className="align-middle">
                                        <img
                                            src={!item?.image ? ai : "http://localhost:5000/uploads/" + item.image}
                                            style={{
                                                width: "100px",
                                                height: "100px",
                                                objectFit: "cover",
                                            }}
                                            alt={item?.name}
                                        />
                                    </td>
                                    <td className="align-middle">{item?.name}</td>
                                    <td className="align-middle">
                                        {item?.desc}
                                    </td>
                                    <td className="align-middle">
                                        {rupiah.convert(item?.price)}
                                    </td>
                                    <td className="align-middle">{item?.qty}</td>
                                    <td className="align-middle">
                                        {state.user.role == "partner" ?
                                            (
                                                // <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                //     <button class="btn btn-primary me-md-2" type="button">Button</button>
                                                //     <button class="btn btn-primary" type="button">Button</button>
                                                // </div>
                                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                                    <button className="btn me-md-2 btn-order text-center btn-warning" type="button" onClick={() => { handleEdit(item?.id) }}>
                                                        Edit
                                                    </button>
                                                    <button className="btn btn-order text-center btn-warning" type="button" onClick={() => { handleDelete(item?.id) }}>
                                                        Delete
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="d-grid gap-2">
                                                    <button className="btn btn-order text-center btn-warning" type="button" onClick={() => addItem(item)}>Order</button>
                                                    {/* <button className="btn btn-order text-center btn-warning" type="button" onClick={() => { handleDelete(item?.id) }}>Delete</button> */}
                                                </div>
                                            )}

                                    </td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </Table>
                ) : (
                    <div className="text-center pt-5">
                        <img
                            src={imgEmpty}
                            className="img-fluid rounded"
                            style={{ width: "20%" }}
                            alt="empty"
                        />
                        <div className="mt-3 text-danger fw-bold fs-3">No data product</div>
                    </div>
                )}
            </div>
            <DeleteModal setConfirmDelete={setConfirmDelete} show={show} handleClose={handleClose} />
        </div>
    )
}

export default ProductPartner;