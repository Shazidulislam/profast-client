import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Top image from assets
import topImage from "../../assets/others-potho/customer-top.png"; // Replace with your image path
import topImage2 from "../../assets/others-potho/reviewQuote.png"; // Replace with your image path

// Fake profile placeholder (for all 15 users)
const fakeProfile = "https://via.placeholder.com/150";

const reviews = [
  {
    id: 1,
    name: "Awlad Hossin",
    title: "Senior Product Designer",
    description:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    img: topImage
  },
  {
    id: 2,
    name: "Sara Ahmed",
    title: "UI/UX Designer",
    description:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    img: topImage
  },
  {
    id: 3,
    name: "Rifat Khan",
    title: "Product Manager",
    description:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    img: topImage
  },
  {
    id: 4,
    name: "Nabila Rahman",
    title: "Visual Designer",
    description:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    img: topImage
  },
  {
    id: 5,
    name: "Fahim Alam",
    title: "UX Researcher",
    description:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    img: topImage
  },
  {
    id: 6,
    name: "Jannat Hossain",
    title: "Interaction Designer",
    description:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    img: topImage
  },
  {
    id: 7,
    name: "Tariq Islam",
    title: "Senior Product Designer",
    description:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    img: topImage
  },
  {
    id: 8,
    name: "Mim Rashid",
    title: "UI Designer",
    description:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    img: topImage
  },
  {
    id: 9,
    name: "Rumana Sultana",
    title: "Visual Designer",
    description:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    img: topImage
  },
  {
    id: 10,
    name: "Imran Hossain",
    title: "Product Designer",
    description:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    img: topImage
  },
  {
    id: 11,
    name: "Ayesha Khan",
    title: "UX Designer",
    description:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    img: topImage
  },
  {
    id: 12,
    name: "Shakib Alam",
    title: "Interaction Designer",
    description:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    img: topImage
  },
  {
    id: 13,
    name: "Nusrat Jahan",
    title: "Product Manager",
    description:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    img: topImage
  },
  {
    id: 14,
    name: "Rakib Hasan",
    title: "Senior UX Designer",
    description:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    img: topImage
  },
  {
    id: 15,
    name: "Fariha Akter",
    title: "UI/UX Designer",
    description:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    img: topImage
  }
];

const CustomerReview = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px"
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px"
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-white">
      {/* Top Section */}
      <div className="text-center mb-12 px-4">
        <img
          src={topImage}
          alt="Customer Review"
          className="mx-auto mb-6"
        />
        <h2 className="text-[#03373D] text-3xl font-semibold mb-4">
          What our customers are saying
        </h2>
        <p className="text-center text-[#03373D] max-w-3xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro.
          Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>

      {/* Slider / Cards */}
      <div className="px-4 my-6">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-3">
              <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between">
                {/* Top: Image + description */}
                <div className="flex items-start mb-4">
                  <img
                    src={topImage2}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <p className="text-gray-600 text-sm">{review.description}</p>
                </div>

                <hr className="border-dashed mb-4" />

                {/* Bottom: Name & title */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Profile</span>
                  <div className="text-right">
                    <h3 className="text-[#03464D] font-semibold">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerReview;
