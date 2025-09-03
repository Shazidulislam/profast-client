import React from 'react';
import Banner from '../../Component/Banner/Banner';
import ServicesSection from '../../Component/ServicesSection/ServicesSection';
import HowItWorks from '../../Component/HowItWorks/HowItWorks';
import BrandSection from '../../Component/BrandSection/BrandSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <ServicesSection></ServicesSection>
            <BrandSection></BrandSection>
        </div>
    );
};

export default Home;