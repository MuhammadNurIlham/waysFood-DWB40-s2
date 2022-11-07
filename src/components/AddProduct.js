import React, { useState, useEffect } from 'react';
import addFile from '../components/assets/addFile.png';
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import { API } from '../config/API'


function AddProduct() {
    let navigate = useNavigate();
    const [categories, setCategories] = useState([]); //store all category data
    const [preview, setPreview] = useState(null); // set for image preview

    const [form, setForm] = useState({
        image: "",
        name: "",
        desc: "",
        price: 0,
        qty: 0,
    });
    const getCategories = async () => {
        try {
            const response = await API.get('/products');
            setCategories(response.data.data);
        } catch (error) {
            console.log("ini error line 26", error)
        }
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
                e.target.type === "file" ? e.target.files : e.target.value,
        });

        //create image preview
        if (e.target.type === "file") {
            let url = URL.createObjectURL(e.target.files[0]);
            setPreview(url);
        }
    };

    const { id } = useParams()
    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            const formData = new FormData();
            formData.set("image", form.image[0], form.image[0].name);
            formData.set("name", form.name);
            formData.set("desc", form.desc);
            formData.set("price", form.price);
            formData.set("qty", form.qty);

            const response = await API.post("/product", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                },
            });
            navigate(`/ProductPartner/${id}`);
            console.log("ini insert product", response);
        } catch (error) {
            console.log("ini error navigate product", error);
        }
    });

    useEffect(() => {
        getCategories();
    }, []);

    // const handleAddProduct = () => {
    //     navigate('/UserMenus')
    // }

    // const handleEditProduct = () => {
    //     return alert('Success')
    // }

    return (
        <div className='container py-5'>
            <div>
                <h3 className='title py-3'>Add Product</h3>
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
                        <input type="text" className="form-control px-2 py-3" id="exampleFormControlInput1" placeholder="Product Name" name='name' onChange={handleChange}></input>
                    </div>
                    <div className='col-2 mb-3'>
                        <input type='file' id='upload' name='image' hidden onChange={handleChange}></input>
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
                            onChange={handleChange}
                            style={{
                                height: "200px"
                            }}></textarea>
                    </div>
                </div>
                <div className='row'>
                    <div className='col mb-3'>
                        <input type="tel" className="form-control px-2 py-3" id="exampleFormControlInput1" placeholder="price (Rp.)" name='price' onChange={handleChange}></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col mb-3'>
                        <input type="tel" className="form-control px-2 py-3" id="exampleFormControlInput1" placeholder="Qty Product" name='qty' onChange={handleChange}></input>
                    </div>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end py-3">
                    <button class="btn btn-primary btn-edit py-3 fs-5" type="submit">
                        Add Product
                    </button>
                    {/* <Link to="/UserMenus" className="link">
                    </Link> */}
                </div>
            </Form>
        </div >
    )
}

export default AddProduct;