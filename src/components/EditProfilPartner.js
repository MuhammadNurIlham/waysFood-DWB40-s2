import React, { Component } from 'react';
import map from '../components/assets/map1.png';
import addFile from '../components/assets/addFile.png';
import { Outlet, Navigate } from 'react-router-dom';

function EditProfilePartner() {

    const handleSaveEdit = () => {
        return alert("Perubahan telah disimpan")
    }

    return (
        <div className='container py-5'>
            <div>
                <h3 className='title py-3'>Edit Profile</h3>
            </div>
            <div className='row'>
                <div className='col-10 mb-3'>
                    <input type="text" className="form-control px-2 py-2" id="exampleFormControlInput1" placeholder="Fullname"></input>
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
                    <input type="email" className="form-control px-2 py-2" id="exampleFormControlInput1" placeholder="Email"></input>
                </div>
            </div>
            <div className='row'>
                <div className='col mb-3'>
                    <input type="text" className="form-control px-2 py-2" id="exampleFormControlInput1" placeholder="Phone"></input>
                </div>
            </div>
            <div className='row'>
                <div className='col-10 mb-3'>
                    <input type="text" className="form-control px-2 py-2" id="exampleFormControlInput1" placeholder="Location"></input>
                </div>
                <div className='col-2 mb-3'>
                    <button className='caption-btn py-2'>Select on Map<img src={map} alt='maps' className='px-2'></img></button>
                </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end py-3">
                <Link to="/" className="link">
                    <button class="btn btn-primary btn-edit" type="button" onClick={handleSaveEdit}>Save</button>
                </Link>
            </div>
        </div>
    )
}

export default EditProfilePartner;