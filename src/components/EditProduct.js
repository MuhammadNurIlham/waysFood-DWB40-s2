import React, { Component, useEffect, useState } from 'react';
import map from '../components/assets/map1.png';
import addFile from '../components/assets/addFile.png';
import { useQuery, useMutation } from '@tanstack/react-query';
import { API } from '../config/API';
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const backToProduct = () => {
        navigate('/Home')
    }

    const [productId, setProductId] = useState([]);
    const [preview, setPreview] = useState([]);
    const [form, setForm] = useState({
        image: "",
        name: "",
        desc: "",
        price: "",
        qty: "",
    });

    let { data: product } = useQuery(["productCache"], async () => {
        const response = await API.get('/product' + id);
        return response.data.data;
    });

    useEffect(() => {
        if (product) {
            setPreview(product.image);
            setForm({
                ...form,
                name: product.name,
                desc: product.desc,
                price: product.price,
                qty: product.qty,
            });
        }
    }, [product]);

    const handleChange = (e) => {
        setForm({
            [e.target.name]:
                e.target.type === "file" ? e.target.files : e.target.value,
        });

        if (e.target.type === "file") {
            let url = URL.createObjectURL(e.target.files[0]);
            setPreview(url);
        }
    };

    const handleSubmit = async (e) => {
        try {
            e.prevent.Default();

            const formData = new formData();
            if (form.image) {
                formData.set("image", form?.image[0], form?.image[0]?.name);
            }
            formData.set("name", form.name);
            formData.set("desc", form.desc);
            formData.set("price", form.price);
            formData.set("qty", form.qty);

            const response = await API.patch('/product' + product.id, formData);
            console.log("ini data update product", response);

            // navigate('/ProductPartner');
            navigate('/Home');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container py-5'>
            <div>
                <h3 className='title py-3'>Edit Product</h3>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start py-3">
                <button class="btn btn-primary btn-edit py-3 fs-5" type="submit" onClick={() => backToProduct()}>
                    Back
                </button>
            </div>
            <Form onSubmit={(e) => handleSubmit.mutate(e)}>
                {preview && (
                    <div>
                        <img
                            src={preview}
                            style={{
                                maxWidth: "150px",
                                maxHeight: "150px",
                                objectFit: "cover",
                                marginBottom: "10px",
                            }}
                            alt={preview}
                        />
                    </div>
                )}
                <div className='row'>
                    <div className='col-10 mb-3'>
                        <input
                            type="text"
                            className="form-control px-2 py-3"
                            id="exampleFormControlInput1"
                            placeholder="Product Name"
                            name='name'
                            value={form?.name}
                            onChange={handleChange}></input>
                    </div>
                    <div className='col-2 mb-3'>
                        <input
                            type='file'
                            id='upload'
                            name='image'
                            hidden onChange={handleChange}></input>
                        <label for='upload' className='pointer'>Attach File
                            <img src={addFile} alt='maps' className='px-2 py-1 addFile'></img>
                        </label>
                        {/* <button className="btn btn-outline-secondary py-3" type="file" id="button-addon2">
                        </button> */}
                    </div>
                </div>
                <div className='row'>
                    <div className='col mb-3'>
                        <textarea
                            type="textarea"
                            className="form-control px-2 py-3"
                            id="exampleFormControlInput1"
                            placeholder="Product Description"
                            name='desc'
                            value={form?.desc}
                            onChange={handleChange}
                            style={{
                                height: "200px"
                            }}></textarea>
                    </div>
                </div>
                <div className='row'>
                    <div className='col mb-3'>
                        <input
                            type="tel"
                            className="form-control px-2 py-3"
                            id="exampleFormControlInput1"
                            placeholder="price (Rp.)"
                            name='price'
                            value={form?.price}
                            onChange={handleChange}></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col mb-3'>
                        <input
                            type="tel"
                            className="form-control px-2 py-3"
                            id="exampleFormControlInput1"
                            placeholder="Qty Product"
                            name='qty'
                            value={form?.qty}
                            onChange={handleChange}></input>
                    </div>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end py-3">
                    <button class="btn btn-primary btn-edit py-3 fs-5" type="submit">
                        Update Product
                    </button>
                </div>
            </Form>
        </div >
    )
}

export default EditProduct;