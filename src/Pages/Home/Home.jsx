import React from 'react';
import Banner from '../../Component/Banner/Banner';
import ServicesSection from '../../Component/ServicesSection/ServicesSection';
import HowItWorks from '../../Component/HowItWorks/HowItWorks';
import BrandSection from '../../Component/BrandSection/BrandSection';
import BenefitsSection from '../../Component/BenefitsSection/BenefitsSection';
import Merchant from '../../Component/Merchant/Merchant';
import CustomerReview from '../../Component/CustomerReview/CustomerReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <ServicesSection></ServicesSection>
            <BrandSection></BrandSection>
            <BenefitsSection></BenefitsSection>
            <Merchant></Merchant>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;