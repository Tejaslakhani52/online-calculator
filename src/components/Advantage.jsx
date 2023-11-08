import React from "react";

export default function Advantage() {
  return (
    <div className=" py-[50px] pb-[70px] w-[90%] lg:w-[80%] mx-auto">
      <h2 className="f_red text-[25px] sm:text-[33px] text-center font-[700] pb-14">
        <span className="f_red text-[#FE7B79]"> Explore </span>the Calcmasters
        Advantage
      </h2>
      <div className="flex items-center gap-10 max-md:flex-col ">
        <div className="flex-1">
          <div className="mb-4">
            <h3 className="text-[20px] font-semibold mb-2 f_Inter">
              Innovation at Your Fingertips
            </h3>
            <p className="text-[16px] font-medium text-[#5C5C5C]">
              At CalcMasters, we're not content with the status quo. We
              constantly push the boundaries of innovation to bring you new and
              exciting calculators. Stay tuned for regular updates and the
              introduction of cutting-edge tools to make your life easier.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-[20px] font-semibold mb-2 f_Inter">
              Community and Support
            </h3>
            <p className="text-[16px] font-medium text-[#5C5C5C]">
              Join our community of calculation enthusiasts and professionals.
              Share your experiences, seek advice, and learn new ways to harness
              the power of numbers. Our support team is here to assist you
              whenever you need help or have questions.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-[20px] font-semibold mb-2 f_Inter">
              Customised Solutions
            </h3>
            <p className="text-[17px] font-medium text-[#5C5C5C]">
              Have specific needs? We offer customization services to develop
              calculators tailored to your unique requirements. Our team of
              experts will work with you to create specialised tools for your
              business or personal use.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-[20px] font-semibold mb-2 f_Inter">
              Your One-Stop Calculator Destination
            </h3>
            <p className="text-[17px] font-medium text-[#5C5C5C]">
              Have specific needs? We offer customization services to develop
              calculators tailored to your unique requirements. Our team of
              experts will work with you to create specialised tools for your
              business or personal use.
            </p>
          </div>
        </div>

        <div className="flex-1 ">
          <img src="./images/advantage.svg" alt="" className="ml-auto block" />
        </div>
      </div>
    </div>
  );
}
