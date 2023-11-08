import H2TitleText from "@/components/common/H2TitleText";
import React from "react";

export default function index() {
  return (
    <div className="bg-[#F8F8F8] p-[20px] sm:p-[30px]">
      <div className="w-[100%] sm:w-[80%] mx-auto">
        <div className="bg-[#fff] rounded-[20px] py-[40px]">
          <h1 className="text-[33px] sm:text-[45px] font-[900] f_red text-center">
            <span className="text-[#f87171]">Privacy</span> Policy
          </h1>
        </div>

        <h2 className="text-[25px] sm:text-[30px] font-[700] mt-[30px] mb-2">
          Privacy Policy for calculator net
        </h2>
        <p className="p_text">
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit calculater-net.com (the
          "Website").
        </p>

        <H2TitleText title={"1. Information We Collect"}>
          <p className="p_text">
            We may collect the following information when you visit our Website:
          </p>

          <div className="ml-8 mb-8">
            <div className="key">
              <h3>Personal Information:</h3>
              <p className="mb-4">
                This may include your name, email address, and other contact
                information that you provide when you contact us through the
                Website.
              </p>
            </div>

            <div className="key">
              <h3>Automatically Collected Information:</h3>
              <p className="mb-4">
                We may collect certain information automatically, such as your
                IP address, device type, and browser information.
              </p>
            </div>
          </div>
        </H2TitleText>

        <H2TitleText title={"2. How We Use Your Information"}>
          <div className="ml-5 mb-8">
            <p className="p_text">We use the information we collect to: </p>

            <div className="key">
              <ul className="list-disc ml-4">
                <li>Respond to your inquiries and provide customer support.</li>
                <li>
                  Improve and optimize our Website by analyzing usage patterns.
                </li>
                <li>
                  Send you updates and newsletters (if you have subscribed to
                  them).
                </li>
              </ul>
            </div>
          </div>
        </H2TitleText>

        <H2TitleText title={"3. Sharing Your Information"}>
          <p className="p_text">
            We do not sell, trade, or otherwise transfer your personal
            information to other parties or resources. We may share your
            information with service providers who assist us in operating the
            Website, but they are obligated to keep your information
            confidential.{" "}
          </p>
        </H2TitleText>

        <H2TitleText title={"4. Cookies"}>
          <p className="p_text">
            Our Website may use cookies to enhance your experience. You can set
            your browser to refuse all the cookies or to indicate when a cookie
            is being sent to your device.
          </p>
        </H2TitleText>

        <H2TitleText title={"5. Your Rights"}>
          <p className="p_text">
            You have the right to access, update, or delete your personal
            information at any time. You can do so by contacting us through the
            contact information provided below.
          </p>
        </H2TitleText>

        <H2TitleText title={"6. Security"}>
          <p className="p_text">
            We take reasonable measures to protect your personal information
            from unauthorised access or disclosure. However, no method of data
            transmission over the Internet is 100% secure.
          </p>
        </H2TitleText>

        <H2TitleText title={"7. Changes to This Privacy Policy"}>
          <p className="p_text">
            We reserve the right to modify this Privacy Policy at any point to
            account for alterations in our procedures or for various
            operational, legal, or regulatory purposes
          </p>
        </H2TitleText>

        <H2TitleText title={"8. Contact Us"}>
          {/* <p className="p_text">
            If you have any questions or daut about this Privacy Policy, please
            contact us at: Email: [Your Contact Email] Mailing Address: [Your
            Mailing Address]
          </p> */}
        </H2TitleText>
      </div>
    </div>
  );
}
