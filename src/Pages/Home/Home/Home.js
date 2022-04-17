import React from 'react';
import DoctorInfo from '../../DoctorInfo/DoctorInfo';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <DoctorInfo></DoctorInfo>


        </div>

    );
};

export default Home;