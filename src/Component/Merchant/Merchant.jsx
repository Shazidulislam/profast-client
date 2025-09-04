import React from "react";
import marcentImg from "../../assets/others-potho/marcent.png"
import beMarcentImg from "../../assets/others-potho/be-a-merchant-bg.png"

const Merchant = () => {
  return (
    <div data-aos="zoom-in" style={{backgroundImage:`url(${beMarcentImg})` }} className="p-20 bg-no-repeat bg-[#03373D] text-white my-10 rounded-2xl">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={marcentImg}
            className="max-w-sm rounded-lg "
          />
          <div>
            <h1 className=" text-2xl md:text-5xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
            <p className="py-6">
              We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
            </p>
            <button className="px-8 py-3 bg-[#CAEB66] text-gray-700 font-bold rounded-full">Become a Merchant</button>
            <button className="px-8 py-3 ms-2 mt-3 md:mt-0 outline-2 outline-[#CAEB66]  text-[#CAEB66] font-bold rounded-full">Earn with Profast Courier</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchant;
