import React, { useContext, useState } from 'react';
import ProfileUser from '../components/assets/profileUser.png';
import delivery from '../components/assets/delivery.png';
import geprek from '../components/assets/geprek.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useQuery } from '@tanstack/react-query';
import { API } from '../config/API'

function UserProfile() {
    const [state, dispatch] = useContext(UserContext);
    const id = state.user.id;
    const { data: profile } = useQuery(["profileCache"], async () => {
        const response = await API.get(`/user/${id}`);
        console.log("ini respon profile", response.data.data);
        return response.data.data;
    })


    // const [ profile, setProfile] = useState('')
    // const [data, setData] = useState('')
    // useEffect(() => {
    //     const getData = async(e) => {
    //         try{
    //             const response = await API.get("/user", {
    //                 headers: {
    //                     Authorization: `Bearer ${localStorage.token}`
    //                 }
    //             });
    //             setProfile(response.data.data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getData()
    // }, [setData])



    return (
        <div className='container'>
            {/* {state.user.role === "partner" ? ( */}
            <div className="row py-5">
                <div className="col-lg-6 py-2">
                    <h3 className='title py-3'>My Profile</h3>
                    <div className='d-flex'>
                        <figure className="figure">
                            <img src={profile?.image ? "http://localhost:5000/uploads/" + profile?.image : ProfileUser}
                                className="figure-img img-fluid rounded"
                                alt="user"
                                style={{
                                    maxWidth: "300px",
                                    maxHeight: "300px",
                                    objectFit: "cover",
                                    marginBottom: "10px",
                                }}></img>
                            <Link to="/EditProfile" className="link">
                                <p className="caption-btn text-center py-1">Edit Profile</p>
                            </Link>
                        </figure>
                        <div className='px-3'>
                            <div className='user-profile'>Fullname</div>
                            <p className='data-user'>{profile?.name}</p>
                            <div className='user-profile'>Email</div>
                            <p className='data-user'>{profile?.email ? profile?.email : "-"}</p>
                            <div className='user-profile'>Phone</div>
                            <p className='data-user'>{profile?.phone ? profile?.phone : "undefined"}</p>
                            <div className='user-profile'>Location</div>
                            <p className='data-user'>{profile?.location ? profile?.location : "undefined"}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 py-2">
                    <h3 className='title py-3'>History Transaction</h3>
                    <div className="card card-profile">
                        <div className="card-body d-flex justify-content-between">
                            <div>
                                <h5 className="card-title title">Geprek Bensu</h5>
                                <p className="card-text date-order"><span className='fw-bold'>Saturday</span>, 12 March 2022</p>
                            </div>
                            <div className='d-flex'>
                                <div className='title fs-4'>WaysFood</div>
                                <img src={delivery} alt=''></img>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className='d-flex justify-content-between'>
                                <p className='card-text date-order fw-bold text-danger'>Total : Rp 45.000</p>
                                <span className='card-text badge bg-light d-flex align-items-center text-wrap date-order fw-bold text-success'>Finished</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Condition is True
             ) : (
             Start Condition is False
             <div className="row py-5">
            //     //     <div className="col-lg-6 py-2">
            //     //         <h3 className='title py-3'>Profile Partner</h3>
            //     //         <div className='d-flex'>
            //     //             <figure className="figure">
            //     //                 <img src={geprek} className="figure-img img-fluid rounded" alt="user"></img>
            //     //                 <Link to="/EditProfile" className="link">
            //     //                     <p className="caption-btn text-center py-1">Edit Profile Partner</p>
            //     //                 </Link>
            //     //             </figure>
            //     //             <div className='px-3'>
            //     //                 <div className='user-profile'>Fullname</div>
            //     //                 <p className='data-user'>Geprek Bensu</p>
            //     //                 <div className='user-profile'>Email</div>
            //     //                 <p className='data-user'>bensu@mail.com</p>
            //     //                 <div className='user-profile'>Phone</div>
            //     //                 <p className='data-user'>081234567890</p>
            //     //             </div>
            //     //         </div>
            //     //     </div>
            //     //     <div className="col-lg-6 py-2">
            //     //         <h3 className='title py-3'>History Transaction</h3>
            //     //         <div className="card card-profile">
            //     //             <div className="card-body d-flex justify-content-between">
            //     //                 <div>
            //     //                     <h5 className="card-title title">Andi</h5>
            //     //                     <p className="card-text date-order"><span className='fw-bold'>Saturday</span>, 12 March 2022</p>
            //     //                 </div>
            //     //                 <div className='d-flex'>
            //     //                     <div className='title fs-4'>WaysFood</div>
            //     //                     <img src={delivery} alt=''></img>
            //     //                 </div>
            //     //             </div>
            //     //             <div className='card-body'>
            //     //                 <div className='d-flex justify-content-between'>
            //     //                     <p className='card-text date-order fw-bold text-danger'>Total : Rp 45.000</p>
            //     //                     <span className='card-text badge bg-light d-flex align-items-center text-wrap date-order fw-bold text-success'>Finished</span>
            //     //                 </div>
            //     //             </div>
            //     //         </div>
            //     //     </div>
             </div>
             )
             } */}
        </div>
    )
}

export default UserProfile;