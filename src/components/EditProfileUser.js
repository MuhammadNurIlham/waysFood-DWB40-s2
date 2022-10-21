import React, { Component } from 'react';
import map from '../components/assets/map1.png';
import addFile from '../components/assets/addFile.png';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function EditProfileUser() {
    const [dataUser, dispatch] = useContext(UserContext);

    const handleEditUser = () => {
        return alert("Perubahan data user telah disimpan")
    }
    const handleEditPartner = () => {
        return alert("Perubahan data partner telah disimpan")
    }

    return (
        <div className='container py-5'>
            {dataUser.level === "user" ? (
                <div>
                    <h3 className='title py-3'>Edit Profile</h3>
                </div>
            ) : (
                <div>
                    <h3 className='title py-3'>Edit Profile Partner</h3>
                </div>)
            }
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
                <div className='col-9 mb-3'>
                    <input type="text" className="form-control px-2 py-2" id="exampleFormControlInput1" placeholder="Location"></input>
                </div>
                <div className='col-3 mb-3'>
                    {/* <!-- Button trigger modal --> */}
                    <div className="d-grid gap-2">
                        <button className="caption-btn py-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Select On Map<img src={map} alt='maps' className='px-2'></img>
                        </button>
                    </div>
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-fullscreen-xl-down">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <iframe
                                        style={{ width: '100%', height: '100%' }}
                                        src="https://maps.google.com/maps?q=Dumbways%20&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                    ></iframe>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn caption-btn py-2 px-5" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn caption-btn py-2 px-5" data-bs-dismiss="modal">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end py-3">
                {dataUser.level === "user" ? (
                    <Link to="/UserProfile" className="link">
                        <button class="btn btn-primary btn-edit" type="button" onClick={handleEditUser}>Save</button>
                    </Link>
                ) : (
                    <Link to="/UserProfile" className="link">
                        <button class="btn btn-primary btn-edit" type="button" onClick={handleEditPartner}>Save</button>
                    </Link>)
                }
            </div>
        </div>
    )
}

export default EditProfileUser;