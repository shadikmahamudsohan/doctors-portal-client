import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import OurTerms from './OurTerms';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12 container mx-auto'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <OurTerms></OurTerms>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;