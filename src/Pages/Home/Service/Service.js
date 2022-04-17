import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    const navigate = useNavigate();


    const navigateToCheckOut = () => {
        navigate(`/checkout`)
    }
    return (
        <div className='col-md-4'>
            <div className="card h-100 card-img ">
                <img src={img} alt="" />
                <h4>Name:{name}</h4>
                <h5>Price:{price}</h5>
                <p>description:{description}</p>
                <button onClick={() => navigateToCheckOut()} className='btn btn-primary'>Book</button>



            </div>


        </div>
    );
};

export default Service;