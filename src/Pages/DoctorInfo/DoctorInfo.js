import React from 'react';
import image from '../../images/image.webp'

const DoctorInfo = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6 mt-5">
                    <h3 className='text-primary'>Doctor Arora</h3>
                    <p>As you know health is wealth.Therefore patient health is my First priority. Here I provide lots of services for your healthy life.I have 10 years experience in this profession. If you have any query feel free to ask</p>


                </div>
                <div className="col-md-6">
                    <img src={image} className='w-100' alt="" />
                </div>
            </div>

        </div>
    );
};

export default DoctorInfo;