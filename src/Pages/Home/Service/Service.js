import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='col-md-4'>
            <div className="card h-100 card-img ">
                <img src={img} alt="" />
                <h4>Name:{name}</h4>
                {/* <p>Peice:{price}</p>
                <p>description:{description}</p> */}
                <button className='btn btn-primary mt-0'>Check Out</button>



            </div>


        </div>
    );
};

export default Service;