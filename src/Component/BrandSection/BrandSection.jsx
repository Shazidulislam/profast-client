import React from "react";
import Marquee from "react-fast-marquee";

// Import logos from your assets folder
import logo1 from "../../assets/brands/amazon.png";
import logo2 from "../../assets/brands/amazon_vector.png";
import logo3 from "../../assets/brands/casio.png";
import logo4 from "../../assets/brands/moonstar.png";
import logo5 from "../../assets/brands/randstad.png";
import logo6 from "../../assets/brands/start-people 1.png";
import logo7 from "../../assets/brands/start.png";


const logos = [logo1, logo2, logo3, logo4, logo5 , logo6 , logo7];

const BrandSection = () => {
  return (
    <section className="bg-gray-50 rounded-lg py-16 px-6">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#03373D]">
          We've helped thousands of sales teams
        </h2>
      </div>

      {/* Marquee */}
      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center mx-12">
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default BrandSection;
