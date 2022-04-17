import React from 'react';
import image from '../../images/image.webp'

const DoctorInfo = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6 mt-5">
                    <h3 className='text-primary'>Doctor Arora</h3>
                    <p>Patient health is my First priority..here I provide lots of services for your healthy life..I have 10years experience in this profession...if you have any query feel free to ask</p>


                </div>
                <div className="col-md-6">
                    <img src={image} className='w-100' alt="" />
                </div>
            </div>

        </div>
    );
};

export default DoctorInfo;