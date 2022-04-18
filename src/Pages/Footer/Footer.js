import React from 'react';
import instagram from '../../images/insta.png'
import facebook from '../../images/facebook1.png'

const Footer = () => {
    return (

        <div className='bg-black text-light mt-3 d-flex justify-content-evenly' >

            <div className='mt-5'>
                <h5>Physical Care</h5>
            </div>
            <div>
                <h5>Services</h5>
                <small>collecting blood sample</small> <br />
                <small>measuring blood pressure</small>
                <p><small>Regular basic health checkup</small></p>
            </div>
            <div>
                <h5>Contact us</h5>
                <p>email:physicalcare@gmail.com</p>
                <img src={instagram} alt="" className='mx-2' />
                <img src={facebook} alt="" />

            </div>

        </div>



    );
};

export default Footer;