import CalTitleBanner from "@/components/common/CalTitleBanner";
import CalculateButton from "@/components/common/CalculateButton";
import CommonInput from "@/components/common/CommonInput";
import FormBox from "@/components/common/FormBox";
import H2TitleText from "@/components/common/H2TitleText";
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
    <div className="bg-[#F8F8F8] pb-[100px]">
      <Head>
        <title>Instant Math Mastery: Percentage Calculator Power</title>
        <meta
          name="description"
          content="Unlock Instant Math Magic! Effortlessly Crunch Numbers with Our Percentage Calculator. Calculate, Conquer, and Amaze in Just a Click! 🔢✨"
        />
      </Head>
      <CalTitleBanner
        title={"Instant Math Mastery: Percentage Calculator Power"}
      />

      <Layout
        box1={
          <>
            <p className="py-[10px] text-[17px]"></p>
            <FormBox title={"Percentage Calculator"}>
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

              <div className="flex items-center gap-4 pb-5 flex-wrap">
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

            <H2TitleText title={"What is a percentage calculator?"}>
              <p className="p_text mt-5">
                A percentage calculator is a tool or method used to determine
                the percentage of a given value in relation to another value. It
                is commonly employed to simplify calculations involving
                proportions, ratios, or comparisons.
              </p>

              <p className="p_text mt-5">
                The basic formula for calculating a percentage is:
              </p>

              <p className="p_text mt-5">
                <span className="font-semibold">Percentage=</span> (
                part/whole)*100
              </p>

              <p className="p_text mt-5">Where:</p>
              <div className="ml-8 mb-8">
                <div className="key">
                  <ul className="list-disc ml-4">
                    <li>Percentage is the percentage you're trying to find.</li>
                    <li>Part is the value you're comparing to the whole.</li>
                    <li>Whole is the total or complete value.</li>
                  </ul>
                </div>
              </div>

              <p className="p_text mt-5">
                Percentage calculators can be used for a variety of purposes,
                such as calculating discounts, markups, tax rates, exam scores,
                and many other situations where a relative comparison is needed.
                Many online tools and software applications are available to
                make percentage calculations quick and easy.
              </p>
            </H2TitleText>

            <H2TitleText
              title={
                "Percentage Calculators can be Helpful in Various Scenarios"
              }
            >
              <div className="ml-8 mb-8">
                <div className="key">
                  <h3>Discounts and Markups:</h3>
                  <p className="mb-4">
                    When shopping, you might want to calculate the final price
                    after applying a discount or markup. The percentage
                    calculator can help you determine the adjusted price based
                    on the percentage reduction or increase.
                  </p>
                </div>
                <div className="key">
                  <h3> Tax Calculations: </h3>
                  <p className="mb-4">
                    When calculating taxes on a given amount, such as sales tax
                    or income tax, a percentage calculator simplifies the
                    process. You can easily find out the tax amount or the total
                    amount after tax.
                  </p>
                </div>
                <div className="key">
                  <h3>Grades and Scores:</h3>
                  <p className="mb-4">
                    In education, percentages are often used to represent grades
                    or scores on exams and assignments. You can use a percentage
                    calculator to determine your final grade or score based on
                    the total points possible.
                  </p>
                </div>
                <div className="key">
                  <h3> Financial Calculations:</h3>
                  <p className="mb-4">
                    Investors and financial analysts use percentage calculations
                    for various purposes, including return on investment (ROI),
                    interest rates, and portfolio performance.
                  </p>
                </div>

                <div className="key">
                  <h3> Fitness and Health: </h3>{" "}
                  <p className="mb-4">
                    When setting fitness goals or tracking progress, percentages
                    can be useful. For example, you might want to calculate the
                    percentage of body weight lost or gained.
                  </p>
                </div>
                <div className="key">
                  <h3>Population Growth: </h3>{" "}
                  <p className="mb-4">
                    Demographers and researchers use percentage calculations to
                    analyze population growth rates over time.
                  </p>
                </div>
                <div className="key">
                  <h3>Tip Calculation: </h3>{" "}
                  <p className="mb-4">
                    When dining at a restaurant, you can use a percentage
                    calculator to determine the tip amount based on a percentage
                    of the total bill.
                  </p>
                </div>
                <div className="key">
                  <h3> Data Analysis: </h3>{" "}
                  <p className="mb-4">
                    In data science and statistics, percentages are often used
                    to describe the distribution of values or the prevalence of
                    certain characteristics within a dataset.
                  </p>
                </div>
                <div className="key">
                  <h3> Loan Interest: </h3>{" "}
                  <p className="mb-4">
                    When borrowing money or investing, understanding the
                    interest rate is crucial. Percentage calculators can help
                    determine the amount of interest accrued over time or the
                    total repayment amount.
                  </p>
                </div>
                <div className="key">
                  <h3>Population Distribution: </h3>{" "}
                  <p className="mb-4">
                    Sociologists and researchers use percentages to analyze
                    demographic data, such as the distribution of age groups,
                    gender, or ethnicities within a population.
                  </p>
                </div>
                <div className="key">
                  <h3> Business Metrics: </h3>{" "}
                  <p className="mb-4">
                    Entrepreneurs and business analysts use percentages to
                    measure various business metrics, such as profit margins,
                    market share, and customer satisfaction rates.
                  </p>
                </div>
                <div className="key">
                  <h3> Probability and Statistics: </h3>{" "}
                  <p className="mb-4">
                    In probability theory, percentages are often used to express
                    the likelihood of an event occurring. In statistics,
                    percentages help describe the relative frequency of
                    different outcomes in a dataset.
                  </p>
                </div>
                <div className="key">
                  <h3> Budgeting:</h3>
                  <p>
                    {" "}
                    When creating a budget, percentages can be used to allocate
                    funds to different expense categories. For example, you
                    might allocate a certain percentage of your income to
                    housing, food, savings, and entertainment.
                  </p>
                </div>
                <div className="key">
                  <h3> Stock Market Changes: </h3>{" "}
                  <p className="mb-4">
                    Investors use percentage changes to analyze stock market
                    fluctuations. They calculate the percentage increase or
                    decrease in stock prices to make informed investment
                    decisions.
                  </p>
                </div>
                <div className="key">
                  <h3> Environmental Studies: </h3>{" "}
                  <p className="mb-4">
                    Environmental scientists may use percentages to express
                    changes in pollution levels, deforestation rates, or other
                    environmental indicators.
                  </p>
                </div>
                <div className="key">
                  <h3> Chemistry and Science: </h3>{" "}
                  <p className="mb-4">
                    In scientific experiments, percentages are used to express
                    concentrations, reaction yields, and other important
                    parameters.
                  </p>
                </div>
                <div className="key">
                  {" "}
                  <h3>Quality Control: </h3>{" "}
                  <p className="mb-4">
                    In manufacturing and production, percentages can be used to
                    assess the defect rate, product quality, and adherence to
                    specifications.
                  </p>
                </div>
                <div className="key">
                  <h3> Project Management: </h3>{" "}
                  <p className="mb-4">
                    Project managers often use percentages to track project
                    progress, completion rates, and resource utilization.
                  </p>
                </div>
              </div>
            </H2TitleText>

            <H2TitleText title={"Percentage Difference Formula"}>
              <p className="p_text mt-5">
                The percentage difference between two values is calculated using
                the following formula:
              </p>

              <p className="p_text mt-5">In this formula:</p>

              <div className="ml-8 mb-8">
                <h2 className="mt-5 font-semibold text-[20px] ">FORMULA</h2>
                <div className="key">
                  <ul className="list-disc ml-4">
                    <li>
                      Value 1 and Value 2 are the two values you are comparing.
                    </li>
                    <li>∣⋅∣ denotes the absolute value.</li>
                    <li>
                      The numerator represents the absolute difference between
                      the two values.
                    </li>
                    <li>The denominator is the average of the two values.</li>
                  </ul>
                </div>
              </div>

              <p className="p_text mt-5">
                Finally, the result is multiplied by 100 to express the
                difference as a percentage.
              </p>

              <h2 className="h2_Title pt-8 pb-2">FAQs</h2>

              <div className="mb-5">
                <h4 className="font-[600] text-[18px] mb-1">
                  What is a percentage calculator?
                </h4>
                <p className="ml-4">
                  A percentage calculator is a tool that helps determine the
                  percentage of a given value in relation to a whole. It is
                  commonly used to calculate discounts, markups, grades, and
                  other proportional values.
                </p>
              </div>

              <div className="mb-5">
                <h4 className="font-[600] text-[18px] mb-1">
                  Can I use a percentage calculator for discounts?
                </h4>
                <p className="ml-4">
                  Yes, you can use a percentage calculator to find the
                  discounted price of an item. Subtract the discount percentage
                  from 100%, convert it to a decimal, and multiply it by the
                  original price.
                </p>
              </div>

              <div className="mb-5">
                <h4 className="font-[600] text-[18px] mb-1">
                  Is there a difference between percentage and percent?
                </h4>
                <p className="ml-4">
                  No, "percentage" and "percent" are often used interchangeably.
                  Both terms refer to a proportion out of 100.
                </p>
              </div>

              <div className="mb-5">
                <h4 className="font-[600] text-[18px] mb-1">
                  Can I use a percentage calculator for grading?
                </h4>
                <p className="ml-4">
                  Yes, a percentage calculator is commonly used for grading. You
                  can input the earned marks and the total marks to find the
                  percentage score.
                </p>
              </div>

              <div className="mb-5">
                <h4 className="font-[600] text-[18px] mb-1">
                  Are there online percentage calculators available?
                </h4>
                <p className="ml-4">
                  Yes,( Domain najme) offer percentage calculators. They are
                  user-friendly and can perform various percentage-related
                  calculations.
                </p>
              </div>
            </H2TitleText>
          </>
        }
      />
    </div>
  );
}
