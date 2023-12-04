import CalTitleBanner from "@/components/common/CalTitleBanner";
import CalculateButton from "@/components/common/CalculateButton";
import CommonInput from "@/components/common/CommonInput";
import FormBox from "@/components/common/FormBox";
import Layout from "@/components/common/Layout";
import Head from "next/head";
import React, { useState } from "react";

export default function index() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const percentage = (input1 * input2) / 100;
    const formattedResult = percentage.toFixed(4);
    setResult(percentage);
  };

  const [input11, setInput11] = useState(0);
  const [input12, setInput12] = useState(0);
  const [result1, setResult1] = useState(null);

  const handleCalculate1 = () => {
    const percentage = (input11 * 100) / input12;
    const formattedResult = percentage.toFixed(4);
    setResult1(percentage);
  };

  const [originalValue, setOriginalValue] = useState(0);
  const [newValue, setNewValue] = useState(0);
  const [percentageChange, setPercentageChange] = useState(null);

  const handleCalculate2 = () => {
    const change = newValue - originalValue;
    const percentageChange = (change / Math.abs(originalValue)) * 100;
    setPercentageChange(percentageChange);
  };

  return (
    <div>
      <Head>
        <title>Date to Date Calculator: Simplify Date Calculations</title>
        <meta
          name="description"
          content="Discover Date Calculator Magic! Calculate Dates Effortlessly 📅 | Must-Have Tool for Planning"
        />
      </Head>
      <CalTitleBanner title={"Percentage Calculator"} />

      <Layout
        box1={
          <>
            <p className="py-[30px] text-[17px]">
              Date calculations are an essential part of our daily lives.
              Whether you're planning an event, tracking financial transactions,
              or simply figuring out how many days are left until your vacation,
              date calculations play a crucial role. In this article, we'll
              delve into the world of date calculators and explore how they
              simplify various aspects of our lives.
            </p>
            <FormBox
              title={
                "Percentage Calculator is a free online tool to calculate percentages."
              }
            >
              <div
                className="flex items-center gap-4 pt-4 pb-5 flex-wrap"
                style={{ borderBottom: "1px solid #C2C2C2" }}
              >
                <p className="whitespace-nowrap text-[15px] sm:text-[17px] font-medium  ">
                  What is
                </p>
                <div className="max-w-[100px]">
                  <CommonInput value={input1} setValue={setInput1} />
                </div>

                <p className="whitespace-nowrap text-[15px] sm:text-[17px] font-medium  ">
                  % of
                </p>
                <div className="max-w-[100px]">
                  <CommonInput value={input2} setValue={setInput2} />
                </div>

                <p className="whitespace-nowrap text-[15px] sm:text-[17px] font-medium  ">
                  ?
                </p>
                <div className="flex justify-end items-center gap-4 w-full">
                  <button
                    className="bg-[#f87171] py-[4px] px-[20px] text-white font-semibold rounded-[4px]"
                    style={{ border: "4px solid #f87171" }}
                    onClick={handleCalculate}
                  >
                    Calculate
                  </button>

                  <div className="max-w-[100px]">
                    <input
                      type="number"
                      className="common_input"
                      disabled
                      value={result}
                    />
                  </div>
                  <p className="whitespace-nowrap opacity-0 text-[15px] sm:text-[17px] font-medium  ">
                    %
                  </p>
                </div>
              </div>

              <div
                className="flex items-center gap-4 py-5 flex-wrap"
                style={{ borderBottom: "1px solid #C2C2C2" }}
              >
                <div className="max-w-[100px]">
                  <CommonInput value={input11} setValue={setInput11} />
                </div>

                <p className="whitespace-nowrap text-[15px] sm:text-[17px] font-medium  ">
                  is what percent of
                </p>
                <div className="max-w-[100px]">
                  <CommonInput value={input12} setValue={setInput12} />
                </div>

                <p className="whitespace-nowrap text-[15px] sm:text-[17px] font-medium  ">
                  ?
                </p>
                <div className="flex justify-end items-center gap-4 w-full">
                  <button
                    className="bg-[#f87171] py-[4px] px-[20px] text-white font-semibold rounded-[4px]"
                    style={{ border: "4px solid #f87171" }}
                    onClick={handleCalculate1}
                  >
                    Calculate
                  </button>

                  <div className="max-w-[100px]">
                    <input
                      type="number"
                      className="common_input"
                      disabled
                      value={result1}
                    />
                  </div>

                  <p className="whitespace-nowrap text-[15px] sm:text-[17px] font-medium  ">
                    %
                  </p>
                </div>
              </div>

              <p className="whitespace-nowrap text-[15px] sm:text-[17px] font-medium pt-5 pb-2">
                What is the percentage increase/decrease
              </p>

              <div
                className="flex items-center gap-4 pb-5 flex-wrap"
                style={{ borderBottom: "1px solid #C2C2C2" }}
              >
                <p className="whitespace-nowrap text-[15px] sm:text-[17px] font-medium  ">
                  from
                </p>
                <div className="max-w-[100px]">
                  <CommonInput
                    value={originalValue}
                    setValue={setOriginalValue}
                  />
                </div>

                <p className="whitespace-nowrap text-[15px] sm:text-[17px] font-medium  ">
                  to
                </p>
                <div className="max-w-[100px]">
                  <CommonInput value={newValue} setValue={setNewValue} />
                </div>

                <p className="whitespace-nowrap text-[15px] sm:text-[17px] font-medium  ">
                  ?
                </p>
                <div className="flex justify-end items-center gap-4 w-full">
                  <button
                    className="bg-[#f87171] py-[4px] px-[20px] text-white font-semibold rounded-[4px]"
                    style={{ border: "4px solid #f87171" }}
                    onClick={handleCalculate2}
                  >
                    Calculate
                  </button>

                  <div className="max-w-[100px]">
                    <input
                      type="number"
                      className="common_input"
                      disabled
                      value={percentageChange}
                    />
                  </div>

                  <p className="whitespace-nowrap text-[15px] sm:text-[17px] font-medium  ">
                    %
                  </p>
                </div>
              </div>
            </FormBox>
          </>
        }
      />
    </div>
  );
}
