import React from "react";
import liveTrackingImg from "../../assets/others-potho/benifite1.png";
import safeDeliveryImg from "../../assets/others-potho/benifite2.png";
import customerSupportImg from "../../assets/others-potho/benifite3.png";

const benefitsData = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    img: liveTrackingImg,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    img: customerSupportImg,
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    img: safeDeliveryImg,
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-12 bg-gray-100 my-4">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {benefitsData.map((item, index) => (
          <div
            key={index}
            className="flex bg-white p-6 rounded-lg shadow-md items-center"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-24 h-24 md:w-28 md:h-28 object-contain"
            />

            {/* Vertical Line */}
            <div className="w-px bg-gray-300 mx-4 h-24"></div>

            {/* Title & Description */}
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
