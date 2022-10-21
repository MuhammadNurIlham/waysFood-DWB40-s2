import React from 'react';
import addFile from '../components/assets/addFile.png';
import { Link } from 'react-router-dom';


function AddProduct() {

    const handleEditProduct = () => {
        return alert('Success')
    }

    return (
        <div className='container py-5'>
            <div>
                <h3 className='title py-3'>Add Product</h3>
            </div>
            <div className='row'>
                <div className='col-10 mb-3'>
                    <input type="text" className="form-control px-2 py-2" id="exampleFormControlInput1" placeholder="Title"></input>
                </div>
                <div className='col-2 mb-3'>
                    <button class="btn btn-outline-secondary" type="file" id="button-addon2">
                        <input type='file' id='upload' hidden></input>
                        <label for='upload' className='pointer'>Attach File
                            <img src={addFile} alt='maps' className='px-2 py-1 addFile'></img>
                        </label>
                    </button>
                </div>
            </div>
            <div className='row'>
                <div className='col mb-3'>
                    <input type="text" className="form-control px-2 py-2" id="exampleFormControlInput1" placeholder="Price"></input>
                </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end py-3">
                <Link to="/UserMenus" className="link">
                    <button class="btn btn-primary btn-edit" type="button" onClick={handleEditProduct}>Save</button>
                </Link>
            </div>
        </div>
    )
}

export default AddProduct;