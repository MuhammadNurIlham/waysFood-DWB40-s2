import React, { Component, useEffect, useState } from 'react';
import map from '../components/assets/map1.png';
import addFile from '../components/assets/addFile.png';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Form } from 'react-bootstrap'
import { API } from '../config/API'

function EditProfileUser() {
    const navigate = useNavigate();
    const [state, dispatch] = useContext(UserContext);
    const id = state.user.id
    const [preview, setPreview] = useState(null);

    const [form, setForm] = useState({
        image: "",
        email: "",
        name: "",
        phone: "",
        location: ""
    });

    const { data: profiles } = useQuery(["profilesCache"], async () => {
        const response = await API.get(`/user/${id}`);
        console.log("ini response edit profile", response.data.data);
        return response.data.data;
    })

    useEffect(() => {
        if (profiles) {
            // setPreview(profiles.image);
            setForm({
                ...form,
                image: profiles.image,
                email: profiles.email,
                name: profiles.name,
                phone: profiles.phone,
                location: profiles.location
            });
        }
    }, [profiles]);

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

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            const formData = new FormData();
            if (form.image) {
                formData.set('image', form?.image[0], form?.image[0]?.name)
            }
            formData.set('name', form.name);
            formData.set('email', form.email);
            formData.set('phone', form.phone);
            formData.set('location', form.location);

            const response = await API.patch("/user/" + profiles.id, formData)

            console.log("ini response data update", response.data)
            navigate('/UserProfile');
        } catch (error) {
            console.log(error);
        }
    })

    return (
        <div className='container py-5'>
            {state.user.role === "user" ? (
                <div>
                    <h3 className='title py-3'>Edit Profile</h3>
                </div>
            ) : (
                <div>
                    <h3 className='title py-3'>Edit Profile Partner</h3>
                </div>)
            }
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
                            onChange={handleChange}
                            value={form?.name}
                            name='name'
                            type="text"
                            className="form-control px-2 py-2"
                            id="exampleFormControlInput1"
                            placeholder="Fullname"></input>
                    </div>
                    <div className='col-2 mb-3'>
                        <input type='file' id='upload' name='image' hidden onChange={handleChange}></input>
                        <label for='upload' className='pointer'>Attach File
                            <img src={addFile} alt='maps' className='px-2 py-1 addFile'></img>
                        </label>
                        {/* <button class="btn btn-outline-secondary" type="file" id="button-addon2">
                        </button> */}
                    </div>
                </div>
                <div className='row'>
                    <div className='col mb-3'>
                        <input
                            onChange={handleChange}
                            value={form?.email}
                            name='email'
                            type="email"
                            className="form-control px-2 py-2"
                            id="exampleFormControlInput1"
                            placeholder="Email"></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col mb-3'>
                        <input
                            onChange={handleChange}
                            value={form?.phone}
                            name='phone'
                            type="tel"
                            className="form-control px-2 py-2"
                            id="exampleFormControlInput1"
                            placeholder="Phone"></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-9 mb-3'>
                        <input
                            onChange={handleChange}
                            value={form?.location}
                            name='location'
                            type="text"
                            className="form-control px-2 py-2"
                            id="exampleFormControlInput1"
                            placeholder="Location"></input>
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
                    {/* <Link to="/UserProfile" className="link"> */}
                    <button class="btn btn-primary btn-edit" type="submit">Save</button>
                    {/* </Link> */}
                </div>

            </Form>
        </div>
    )
}

export default EditProfileUser;