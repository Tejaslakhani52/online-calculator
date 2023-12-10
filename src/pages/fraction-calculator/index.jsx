import CalTitleBanner from "@/components/common/CalTitleBanner";
import CalculateButton from "@/components/common/CalculateButton";
import CancleButton from "@/components/common/CancleButton";
import CommonInput from "@/components/common/CommonInput";
import FormBox from "@/components/common/FormBox";
import Layout from "@/components/common/Layout";
import SelectMenu from "@/components/common/SelectMenu";
import Head from "next/head";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const data = [
  { name: "+", value: "add" },
  { name: "−", value: "subtract" },
  { name: "×", value: "multiply" },
  { name: "÷", value: "divide" },
];

export default function index() {
  const [numerator1, setNumerator1] = useState(0);
  const [denominator1, setDenominator1] = useState(0);
  const [numerator2, setNumerator2] = useState(0);
  const [denominator2, setDenominator2] = useState(0);
  const [result, setResult] = useState(null);
  const [showAns, setShowAns] = useState(false);

  const [selectValue, setSelectValue] = useState("add");

  const calculateFraction = (operation) => {
    if (numerator1 && denominator1 && numerator2 && denominator2) {
      const num1 = parseFloat(numerator1);
      const den1 = parseFloat(denominator1);
      const num2 = parseFloat(numerator2);
      const den2 = parseFloat(denominator2);

      let resultFraction;
      switch (operation) {
        case "add":
          resultFraction = `${num1 * den2 + num2 * den1} / ${den1 * den2}`;
          break;
        case "subtract":
          resultFraction = `${num1 * den2 - num2 * den1} / ${den1 * den2}`;
          break;
        case "multiply":
          resultFraction = `${num1 * num2} / ${den1 * den2}`;
          break;
        case "divide":
          resultFraction = `${num1 * den2} / ${den1 * num2}`;
          break;
        default:
          resultFraction = "Invalid operation";
      }

      setResult(resultFraction);
    }
  };

  return (
    <div className="bg-[#F8F8F8] pb-[100px]">
      <CalTitleBanner
        title={"Instant Math Mastery: Fraction Calculator Power"}
      />

      <Layout
        box1={
          <>
            <p className="py-[10px] text-[17px]"></p>
            <FormBox title={"Fraction Calculator"}>
              <div className="flex items-center justify-center gap-4 py-[50px]">
                <div>
                  <CommonInput value={numerator1} setValue={setNumerator1} />
                  <div className="h-[1px] bg-black my-2"></div>
                  <CommonInput value={numerator2} setValue={setNumerator2} />
                </div>

                <SelectMenu
                  value={selectValue}
                  setValue={setSelectValue}
                  data={data}
                  font={"25px"}
                />

                <div>
                  <CommonInput
                    value={denominator1}
                    setValue={setDenominator1}
                  />
                  <div className="h-[1px] bg-black my-2"></div>
                  <CommonInput
                    value={denominator2}
                    setValue={setDenominator2}
                  />
                </div>
              </div>

              <div className="flex justify-between pt-[20px] pb-[20px] text-[18px]">
                <CalculateButton onClick={calculateFraction(selectValue)}>
                  Calculate
                </CalculateButton>

                <CancleButton
                  onClick={() => {
                    setNumerator1(0);
                    setDenominator1(0);
                    setNumerator2(0);
                    setDenominator2(0);
                    setShowAns(false);
                  }}
                >
                  RESET
                </CancleButton>
              </div>
            </FormBox>
          </>
        }
      />
      {/* <h2>Fraction Calculator</h2>
      <div>
        <label>Fraction 1:</label>
        <input
          type="number"
          placeholder="Numerator"
          value={numerator1}
          onChange={(e) => setNumerator1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Denominator"
          value={denominator1}
          onChange={(e) => setDenominator1(e.target.value)}
        />
      </div>
      <div>
        <label>Fraction 2:</label>
        <input
          type="number"
          placeholder="Numerator"
          value={numerator2}
          onChange={(e) => setNumerator2(e.target.value)}
        />
        <input
          type="number"
          placeholder="Denominator"
          value={denominator2}
          onChange={(e) => setDenominator2(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => calculateFraction("add")}>Add</button>
        <button onClick={() => calculateFraction("subtract")}>Subtract</button>
        <button onClick={() => calculateFraction("multiply")}>Multiply</button>
        <button onClick={() => calculateFraction("divide")}>Divide</button>
      </div>
      {result && <p>Result: {result}</p>} */}
    </div>
  );
}
