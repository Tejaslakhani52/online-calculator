import React from "react";

const ServicesData = [
  {
    image: "/icons/Arithmetic.svg",
    name: "Basic Arithmetic Calculators",
    text: "Need quick maths solutions? Our basic arithmetic calculators are here to help you with everyday calculations, from addition to division.",
  },
  {
    image: "/icons/Financial.svg",
    name: "Financial Calculators",
    text: "Plan your financial future with ease. From mortgage calculations to investment planning, our financial calculators have you covered.",
  },
  {
    image: "/icons/fitness.svg",
    name: "Health and Fitness Calculators",
    text: "Your health matters. Calculate your BMI, BMR, and other health-related metrics for a fitter you.",
  },
  {
    image: "/icons/Scientific.svg",
    name: "Scientific Calculators",
    text: "Solve complex equations, perform advanced calculations, and explore the world of science effortlessly.",
  },
  {
    image: "/icons/Conversion.svg",
    name: "Conversion Tools",
    text: "Convert units, currencies, and more. Our conversion tools make unit transformations a breeze.",
  },
  {
    image: "/icons/DateAndTime.svg",
    name: "Date and Time Calculators",
    text: "Need to schedule an event or calculate time differences? Our date and time calculators are at your service.",
  },
];

export default function Services() {
  return (
    <div className=" py-[50px] pb-[70px] w-[90%] lg:w-[80%] mx-auto">
      <h2 className="text-[25px] sm:text-[33px] f_red  text-center font-[700] pb-14">
        <span className="text-[#f87171]">Our</span> Comprehensive List of
        Services
      </h2>
      <div className="flex justify-between flex-wrap ">
        {ServicesData?.map((item) => (
          <div
            className="sm:w-[50%] md:w-[30%] flex flex-col gap-[15px] mb-[40px]"
            onClick={() => router.push(item?.path)}
          >
            <img src={item?.image} alt="" className="w-[50px]" />

            <h3 className="font-semibold text-[20px]">{item?.name}</h3>

            <p className="text-[#5C5C5C] text-[16px]">{item?.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
