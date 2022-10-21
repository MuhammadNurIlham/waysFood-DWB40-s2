import React, { useContext } from 'react';
import map from '../components/assets/map1.png';
import geprek from '../components/assets/geprek.png';
import nasgor from '../components/assets/nasgor.png';
import hapus from '../components/assets/hapus.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CartReducer } from '../context/CartReducer';
import { Alert } from 'react-bootstrap';


function ChartOrder() {

    const handleOrder = () => {
        alert('Order Success')
    };


    return (
        <div className='container'>
            <div className='pt-5 pb-3'>
                <h3 className='title'>Geprek Bensu</h3>
            </div>
            <div className='py-2'>
                <h5 className='data-user color-brown'>Delivery Location</h5>
            </div>
            <div className='row'>
                <div className='col-9'>
                    <div class="mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name address"></input>
                    </div>
                </div>
                <div className='col-3'>
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
            {/* row for rectangle */}
            <div className='row'>
                <div className='col-8'>
                    <div className='rectangle'></div>
                </div>
                <div className='col-4'>
                    <div className='rectangle'></div>
                </div>
            </div>
            {/* end rectangle */}

            {/* row cart order */}
            <div className='row'>
                {/* first cart order */}
                <div className='col-8'>
                    <div className='row'>
                        <div className='col'>
                            <div className='d-flex pt-3'>
                                <img
                                    src={geprek}
                                    alt='geprek'
                                    width="150"
                                    height="100"></img>
                                <div className='py-3 px-2 justify-content-between'>
                                    <h6 className='py-1'>Paket Geprek</h6>
                                    <div className='d-flex'>
                                        <button className='py-1 px-2 btn-less btn-transparan fw-bold fs-5' onClick={() => Alert("Test")}>
                                            -
                                        </button>
                                        <button className='py-1 px-2 mx-2 btn-transparan btn-equal fw-bold fs-5'>
                                            0
                                            {/* {totalCart.counter.length} */}
                                        </button>
                                        <button className='btn-add py-1 ps-2 btn-transparan fw-bold fs-5' onClick={() => Alert("Testt")}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='d-flex pt-3 justify-content-end'>
                                <div className='py-3 px-2'>
                                    <h6 className='py-1 text-danger'>Rp 15.000</h6>
                                    <div className='d-flex justify-content-end'>
                                        <img src={hapus} alt='delete' className='py-2' onClick={() => Alert("test")}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                {/* end first cart order */}

                {/* total price order */}
                <div className='col-4'>
                    <div className='row d-flex justify-content-between'>
                        <div className='col'>
                            <p>Subtotal</p>
                            <p>Qty</p>
                            <p>Ongkir</p>
                        </div>
                        <div className='col'>
                            <p className='text-danger'>Rp 35.000</p>
                            <p>2</p>
                            <p className='text-danger'>Rp 10.000</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='rectangle'></div>
                    </div>
                    <div className='row d-flex justify-content-between'>
                        <div className='col'>
                            <p className='fw-bold text-danger'>Total</p>
                        </div>
                        <div className='col'>
                            <p className='fw-bold text-danger'>Rp 45.000</p>
                        </div>
                    </div>
                </div>

                {/* end total price order */}
            </div>
            <div className='cart'></div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end py-3">
                <Link to="/UserMenus" className="link">
                    <button class="btn btn-primary btn-edit" type="button" onClick={handleOrder}>Order</button>
                </Link>
            </div>
        </div>
    )
}

export default ChartOrder;