import React from 'react';
import approve from '../components/assets/approve.png';
import cancel from '../components/assets/cancel.png';

function IncomeOrder() {
    return (
        <div className='container'>
            <div className='pt-5 pb-3'>
                <h3 className='title'>Income Transaction</h3>
            </div>
            <table className="table table-bordered border-dark">
                <thead>
                    <tr>
                        <th scope="col">
                            <p className='font-income font-th'>No</p>
                        </th>
                        <th scope="col">
                            <p className='font-income font-th'>Name</p>
                        </th>
                        <th scope="col">
                            <p className='font-income font-th'>Address</p>
                        </th>
                        <th scope="col">
                            <p className='font-income font-th'>Product Order</p>
                        </th>
                        <th scope="col">
                            <p className='font-income font-th'>Status</p>
                        </th>
                        <th scope="col">
                            <p className='font-income font-th'>Action</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <p className='font-income fw-bold'>1</p>
                        </th>
                        <td>
                            <p className='font-income'>Sugeng No Pants</p>
                        </td>
                        <td>
                            <p className='font-income justify-content-md-center'>Cileungsi</p>
                        </td>
                        <td>
                            <p className='font-income'>Paket Geprek, Paket Ke..</p>
                        </td>
                        <td>
                            <p className='text-warning font-income'>Waiting Approve</p>
                        </td>
                        <td>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button class="bg-danger btn-agreement px-4 me-md-2" type="button">Cancel</button>
                                <button class="btn-agreement px-4 bg-success" type="button">Approve</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <p className='font-income fw-bold'>2</p>
                        </th>
                        <td>
                            <p className='font-income'>Haris Gams</p>
                        </td>
                        <td>
                            <p className='font-income'>Serang</p>
                        </td>
                        <td>
                            <p className='font-income'>Paket Geprek, Paket Ke..</p>
                        </td>
                        <td>
                            <p className='text-success font-income'>Success</p>
                        </td>
                        <td><img src={approve} alt='done approve' className='bg-success rounded-pill mx-auto d-block p-1'></img></td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <p className='font-income fw-bold'>3</p>
                        </th>
                        <td>
                            <p className='font-income'>Aziz Union</p>
                        </td>
                        <td>
                            <p className='font-income'>Bekasi</p>
                        </td>
                        <td>
                            <p className='font-income'>Paket Geprek, Paket Ke..</p>
                        </td>
                        <td>
                            <p className='text-danger font-income'>Cancel</p>
                        </td>
                        <td><img src={cancel} alt='done approve' className='bg-danger rounded-pill mx-auto d-block p-1'></img></td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <p className='font-income fw-bold'>4</p>
                        </th>
                        <td>
                            <p className='font-income'>Lae Tanjung Balai</p>
                        </td>
                        <td>
                            <p className='font-income'>Tanjung Balai</p>
                        </td>
                        <td>
                            <p className='font-income'>Paket Geprek, Paket Ke..</p>
                        </td>
                        <td>
                            <p className='text-info font-income'>On The Way</p>
                        </td>
                        <td><img src={approve} alt='done approve' className='bg-success rounded-pill mx-auto d-block p-1'></img></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default IncomeOrder;