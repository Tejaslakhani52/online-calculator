import { scrollToPosition } from "@/commonFunction";
import AnswareBox from "@/components/common/AnswareBox";
import CalTitleBanner from "@/components/common/CalTitleBanner";
import CalculateButton from "@/components/common/CalculateButton";
import CancleButton from "@/components/common/CancleButton";
import CommonInput from "@/components/common/CommonInput";
import FormBox from "@/components/common/FormBox";
import H2TitleText from "@/components/common/H2TitleText";
import Layout from "@/components/common/Layout";
import TitleAndComponent from "@/components/common/TitleAndComponent";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function Index() {
  const [birthDate, setBirthDate] = useState({
    year: "2000",
    month: "11",
    day: "4",
  });

  const [secondDate, setSecondDate] = useState({
    sYear: "",
    sMonth: "",
    sDay: "",
  });
  console.log("secondDate: ", secondDate);

  const [ageInfo, setAgeInfo] = useState(null);

  const [showAns, setShowAns] = useState(false);
  const [wrong, setWrong] = useState(false);

  useEffect(() => {
    if (showAns) {
      scrollToPosition(500);
    }
  }, [showAns]);

  useEffect(() => {
    const today = new Date();
    const sYear = today.getFullYear();
    const sMonth = (today.getMonth() + 1).toString().padStart(2, "0");
    const sDay = today.getDate().toString().padStart(2, "0");
    setSecondDate({ sYear, sMonth, sDay });
  }, []);

  const calculateAge = () => {
    console.log(
      "birthDate: ",
      (birthDate?.year).length,
      (secondDate?.sYear).length
    );
    if (birthDate?.month > 12 || secondDate?.sMonth > 12) {
      toast.error("Enter months from 1 to 12");
      setWrong("Enter months from 1 to 12");
    } else if (birthDate?.day > 31 || secondDate?.sDay > 31) {
      toast.error("Enter days from 1 to 31");
      setWrong("Enter days from 1 to 31");
    } else if (
      (birthDate?.year).length != 4 ||
      (secondDate?.sYear).length != 4
    ) {
      toast.error("Enter years using 4 digits");
      setWrong("Enter years using 4 digits");
    } else setWrong("");

    const { year, month, day } = birthDate;
    const { sYear, sMonth, sDay } = secondDate;
    if (year && month && day) {
      const birthDateObj = new Date(`${year}-${month}-${day}`);
      const secondDateObj = new Date(`${sYear}-${sMonth}-${sDay}`);

      let ageInYears = secondDateObj.getFullYear() - birthDateObj.getFullYear();
      let ageInMonths = secondDateObj.getMonth() - birthDateObj.getMonth();
      let ageInDays = secondDateObj.getDate() - birthDateObj.getDate();

      if (ageInDays < 0) {
        ageInMonths--;
        ageInDays += new Date(
          secondDateObj.getFullYear(),
          secondDateObj.getMonth(),
          0
        ).getDate();
      }
      if (ageInMonths < 0) {
        ageInYears--;
        ageInMonths += 12;
      }

      const ageDifference = secondDateObj - birthDateObj;
      const ageInSeconds = ageDifference / 1000;
      const ageInAllDays = ageDifference / (1000 * 60 * 60 * 24);
      const ageInHours = ageDifference / (1000 * 60 * 60);
      const ageInMinutes = ageDifference / (1000 * 60);
      const ageInWeeks = ageDifference / (1000 * 60 * 60 * 24 * 7);

      const formattedBirthDate = birthDateObj.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      const formattedAgeOn = secondDateObj.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      const formattedAgeInSeconds = ageInSeconds.toLocaleString();
      const formattedAgeInMinutes = Math.floor(ageInMinutes).toLocaleString();
      const formattedAgeInHours = Math.floor(ageInHours).toLocaleString();
      const formattedAgeInDays = Math.floor(ageInAllDays).toLocaleString();
      const formattedAgeInWeeks = Math.floor(ageInWeeks).toLocaleString();

      setAgeInfo({
        age: ageInYears,
        bornOn: `${formattedBirthDate}`,
        ageOn: `${formattedAgeOn}`,
        def1: `${ageInYears} years ${ageInMonths} months ${ageInDays} days`,
        def2: `${ageInMonths + ageInYears * 12} months ${ageInDays} days`,
        def3: `${formattedAgeInDays} days`,
        def4: `${formattedAgeInHours} hours`,
        def5: `${formattedAgeInMinutes} minutes`,
        def6: `${formattedAgeInWeeks} weeks`,
        def7: `${formattedAgeInSeconds} seconds`,
      });

      scrollToPosition(500);

      setShowAns(true);

      console.log("ageInfo: ", ageInfo);
    }
  };

  return (
    <div>
      <Head>
        <title>Age Calculator: Your Personal Timeless Age Calculator</title>
        <meta
          name="description"
          content="Discover Your True Age with Age Calculator! Get Your Age in Seconds in years, months, weeks and days online.. Try It Now Today! "
        />
      </Head>
      <CalTitleBanner
        title={"Age Calculator: Your Personal Timeless Age Calculator"}
      />
      <Layout
        box1={
          <>
            <p className="py-[30px] text-[17px]">
              Welcome to the Online Age Calculator, where your journey to
              discovering your true age begins. Are you curious to know your
              real age? Say goodbye to guesswork and embrace the precision of
              science with our revolutionary tool. Prepare to be amazed as we
              unveil the five pain points that make this online age calculator
              an absolute must-try:
            </p>
            <FormBox title={"Age Calculator"}>
              <div className="flex items-center gap-4">
                <p className="whitespace-nowrap text-[15px] sm:text-[17px] font-medium mt-3">
                  Date of Birth:{" "}
                </p>
                <div className="flex items-end gap-2">
                  <TitleAndComponent title="Month">
                    <CommonInput
                      value={birthDate.month}
                      setValue={(value) =>
                        setBirthDate({ ...birthDate, month: value })
                      }
                    />
                  </TitleAndComponent>
                  <TitleAndComponent title="Day">
                    <CommonInput
                      value={birthDate.day}
                      setValue={(value) =>
                        setBirthDate({ ...birthDate, day: value })
                      }
                    />
                  </TitleAndComponent>

                  <TitleAndComponent title="Year">
                    <div className="min-w-[80px]">
                      <CommonInput
                        value={birthDate.year}
                        setValue={(value) =>
                          setBirthDate({ ...birthDate, year: value })
                        }
                      />
                    </div>
                  </TitleAndComponent>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <p className="whitespace-nowrap font-medium text-[15px] sm:text-[17px]">
                  Second Date:
                </p>
                <div className="flex items-end gap-2">
                  <TitleAndComponent title="Month">
                    <CommonInput
                      value={secondDate.sMonth}
                      setValue={(value) =>
                        setSecondDate({ ...secondDate, sMonth: value })
                      }
                    />
                  </TitleAndComponent>
                  <TitleAndComponent title="Day">
                    <CommonInput
                      value={secondDate.sDay}
                      setValue={(value) =>
                        setSecondDate({ ...secondDate, sDay: value })
                      }
                    />
                  </TitleAndComponent>

                  <TitleAndComponent title="Year">
                    <div className="min-w-[80px]">
                      <CommonInput
                        value={secondDate.sYear}
                        setValue={(value) =>
                          setSecondDate({ ...secondDate, sYear: value })
                        }
                      />
                    </div>
                  </TitleAndComponent>
                </div>
              </div>

              <div className="flex justify-between pt-[20px] text-[18px] pb-[20px]">
                <CalculateButton onClick={calculateAge}>
                  Calculate
                </CalculateButton>

                <CancleButton
                  onClick={() => {
                    setBirthDate({
                      year: "",
                      month: "",
                      day: "",
                    });
                    setSecondDate({
                      sYear: "",
                      sMonth: "",
                      sDay: "",
                    });
                    setShowAns(false);
                  }}
                >
                  CLEAR
                </CancleButton>
              </div>
            </FormBox>

            <AnswareBox showAns={showAns}>
              {wrong !== "" ? (
                <div className="bg-[#FFE9E9] flex items-center gap-5 py-[20px] px-[20px] mb-5">
                  <img src="./images/warning.png" alt="" className="w-[40px]" />
                  <p className="text-[#F00]">{wrong}</p>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-[20px] flex-wrap mb-4">
                    <p className="text-[18px] w-[100px]">Age :</p>
                    <p className="text-[25px] font-semibold">
                      {ageInfo?.age === 0
                        ? ageInfo?.def2
                        : `${ageInfo?.age} years`}
                    </p>
                  </div>
                  <div className="flex items-center gap-[20px] flex-wrap mb-4">
                    <p className="text-[18px] w-[100px]">Born on :</p>
                    <p className="text-[21px] font-semibold">
                      {ageInfo?.bornOn}
                    </p>
                  </div>
                  <div className="flex items-center gap-[20px] flex-wrap mb-4">
                    <p className="text-[18px] w-[100px]">Age on :</p>
                    <p className="text-[21px] font-semibold">
                      {ageInfo?.ageOn}
                    </p>
                  </div>
                  <div className="flex items-center gap-[20px] flex-wrap pt-4 mb-2">
                    <p className="text-[18px] w-[100%]">
                      Exact age in different units:
                    </p>
                    <p className="text-[18px] font-semibold">
                      = {ageInfo?.def1}
                    </p>
                  </div>
                  <div className="flex items-center gap-[20px] flex-wrap  mb-2">
                    <p className="text-[18px] font-semibold">
                      = {ageInfo?.def2}
                    </p>
                  </div>
                  <div className="flex items-center gap-[20px] flex-wrap mb-2 ">
                    <p className="text-[18px] font-semibold">
                      = {ageInfo?.def6}
                    </p>
                  </div>
                  <div className="flex items-center gap-[20px] flex-wrap  mb-2">
                    <p className="text-[18px] font-semibold">
                      = {ageInfo?.def3}
                    </p>
                  </div>

                  <div className="flex items-center gap-[20px] flex-wrap mb-2 ">
                    <p className="text-[18px] font-semibold">
                      = {ageInfo?.def4}
                    </p>
                  </div>

                  <div className="flex items-center gap-[20px] flex-wrap  mb-2">
                    <p className="text-[18px] font-semibold">
                      = {ageInfo?.def5}
                    </p>
                  </div>

                  <div className="flex items-center gap-[20px] flex-wrap  mb-2">
                    <p className="text-[18px] font-semibold">
                      = {ageInfo?.def7}
                    </p>
                  </div>
                </div>
              )}
            </AnswareBox>

            <H2TitleText title={"Lost in Time? Find Your True Age Instantly!"}>
              <p className="p_text">
                Have you ever felt that your true age is a well-kept secret?
                Unveil the mystery with a single click. Our online age
                calculator will tell you exactly how many years, months, and
                days you've been on this planet, leaving no room for
                speculation.
              </p>
            </H2TitleText>

            <h2 className="h2_Title">
              Key Features Of Our Online Age Calculator:
            </h2>
            <div className="ml-5">
              <div className="key">
                <h3>Age in Years:</h3>
                <p>
                  Age in Years: Get your age in years with a single click,
                  making it easy to know exactly how long you've been on this
                  planet.
                </p>
              </div>
              <div className="key">
                <h3>Age in Months:</h3>
                <p>
                  For a more detailed perspective, discover your age in months.
                  It's perfect for tracking milestones and life events.
                </p>
              </div>
              <div className="key">
                <h3>Age in Days:</h3>
                <p>
                  Zoom in further and calculate your age in days. This feature
                  is great for celebrating those special anniversaries and
                  achievements.
                </p>
              </div>
              <div className="key">
                <h3>Age Difference:</h3>
                <p>
                  Compare ages by entering two different dates and see the age
                  gap between them. It's a helpful tool for checking age
                  disparities between family members, friends, or events.
                </p>
              </div>
              <div className="key">
                <h3>Shareable Results:</h3>
                <p>
                  Easily share your calculated age with friends and family
                  through social media or messaging platforms.
                </p>
              </div>
            </div>

            <H2TitleText
              title={"Age Gracefully - How Does Your Lifestyle Compare?"}
            >
              <p className="p_text">
                Worried about the effects of your daily habits on your age? Our
                age calculator goes beyond the numbers. It provides insights
                into how your lifestyle, exercise, and diet choices stack up
                against your actual age. Discover areas for improvement and
                start ageing gracefully.
              </p>
            </H2TitleText>

            <H2TitleText
              title={"Unlock the Fountain of Youth - Reverse Aging Tips"}
            >
              <p className="p_text">
                Turn back the clock with personalised anti-aging
                recommendations. Based on your real age, our online calculator
                will suggest tailored tips to help you look and feel younger.
                Say hello to a rejuvenated you.
              </p>
            </H2TitleText>

            <H2TitleText title={"Discover the Key to a Healthier Future"}>
              <p className="p_text">
                Know your real age, and take control of your health. Our
                calculator will connect the dots between your age, health
                choices, and potential risks. Get insights into potential health
                concerns and start making informed decisions today.
              </p>
            </H2TitleText>

            <H2TitleText title={"Stay Ahead in the Game - Financial Planning"}>
              <p className="p_text">
                Your true age might have a significant impact on your financial
                future. Explore the correlation between your age and financial
                planning. Our calculator will help you make wiser investment
                choices and ensure a secure tomorrow.
              </p>
            </H2TitleText>

            <H2TitleText
              title={"Don't Let Your True Age Be a Mystery Any Longer"}
            >
              <p className="p_text">
                At Online Age Calculator, we understand the importance of
                knowing your real age, and how it affects your life decisions.
                Our pain formula is designed to grab your attention and increase
                your opt-in and sales rate. We address the common pain points
                such as curiosity, lifestyle choices, aging gracefully, health
                concerns, and financial planning.
              </p>

              <p className="p_text mt-3">
                By offering solutions for each of these challenges, we can
                guarantee that the mystery of your true age is no longer a
                puzzle. It's the moment to control of your life, make
                well-informed choices, and set out on a path towards a brighter,
                healthier, and more secure future with the help of an online age
                calculator.
              </p>
            </H2TitleText>

            <h2 className="h2_Title">Your Journey to Age Enlightenment</h2>
            <p className="text-[15px] font-[600] mb-1">
              Unleash the Power of Knowledge
            </p>
            <p className="p_text">
              Imagine the transformation that awaits you once you have unveiled
              your true age. with this knowledge, you can make life decisions
              with confidence. Here's what to expect on your journey to age
              enlightenment:
            </p>
            <div className="ml-5">
              <div className="key">
                <h3>1. Self-Discovery:</h3>
                <p>
                  The first step is understanding your true age, and with that
                  knowledge, comes a deeper understanding of yourself. Embrace
                  your age and start making choices that align with your
                  authentic self.
                </p>
              </div>
              <div className="key">
                <h3>2. Lifestyle Enhancement:</h3>
                <p>
                  By improving a deeper understanding of your age and the
                  choices you make in your daily life, you can take important
                  steps to improve your health, well-being, and overall quality
                  of life. It's the perfect moment to controll yourself from
                  those unhealthy habits and start on a journey towards
                  vitality.
                </p>
              </div>
              <div className="key">
                <h3>3. Timeless Beauty:</h3>
                <p>
                  Our anti-aging tips aren't just about looking younger; they're
                  about feeling younger too. Experience the confidence that
                  comes with rejuvenation and embracing your age with grace.
                </p>
              </div>
              <div className="key">
                <h3>4. Health Empowerment:</h3>
                <p>
                  With age-appropriate health recommendations, you can take
                  charge of your well-being. Identify potential health concerns
                  early and take action before they become major issues. Your
                  health is your wealth.
                </p>
              </div>
              <div className="key">
                <h3>5. Financial Security:</h3>
                <p>
                  Your age can be a compass for financial planning. It's time to
                  secure your financial future by making wise investment choices
                  that align with your age and goals.
                </p>
              </div>
            </div>

            <H2TitleText title={"It All Begins with a Simple Calculation"}>
              <p className="p_text">
                Our online age calculator is user-friendly, accurate, and
                available at your fingertips. All it takes is a few seconds to
                begin your journey to age enlightenment.
              </p>
            </H2TitleText>

            <H2TitleText title={"Ready to Start?"}>
              <p className="p_text">
                Uncover your true age now! Simply input your details into our
                calculator, and let the magic unfold. Your path to
                self-discovery, lifestyle enhancement, timeless beauty, health
                empowerment, and financial security begins here.
              </p>

              <p className="p_text mt-3">
                Don't let your true age remain a mystery. Take that first step
                towards a brighter, healthier, and more secure future. Join the
                revolution, and start your journey to age enlightenment today!
              </p>
            </H2TitleText>

            <H2TitleText title={"The Time Is Now"}>
              <p className="p_text">
                Every second that passes is an opportunity to take charge of
                your life. With the Online Age Calculator, you're not just
                discovering your age; you're unveiling your potential. The time
                is now; Age enlightenment awaits.
              </p>
            </H2TitleText>
          </>
        }
      />
    </div>
  );
}
