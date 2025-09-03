import React from "react";
import { FaTruck, FaMoneyBillWave, FaWarehouse, FaBuilding } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaTruck size={40} className="text-[#03464D]" />,
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 2,
    icon: <FaMoneyBillWave size={40} className="text-[#03464D]" />,
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 3,
    icon: <FaWarehouse size={40} className="text-[#03464D]" />,
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 4,
    icon: <FaBuilding size={40} className="text-[#03464D]" />,
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const HowItWorks = () => {
  return (
    <section className="text-gray-100 bg-gray-50 py-16 px-6">
      {/* Heading */}
      <div className=" max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl text-[#03373D] font-bold  mb-4">
          How it Works
        </h2>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className=" text-xl text-[#03373D] lg:text-2xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
