import React from "react";
import H2TitleText from "../common/H2TitleText";
import { fitnessCal } from "@/constant/calculatorType/FitnessAndHealth";
import { useRouter } from "next/router";

export default function Fitness() {
  const router = useRouter();
  return (
    <div>
      <div
        className="bg-[#F8F8F8] my-[50px] p-3 rounded-[8px]"
        style={{ boxShadow: "0px 3px 8px 0px rgba(0, 0, 0, 0.20)" }}
      >
        <h2 className="text-center text-[18px] font-semibold text-[#F87171] mb-4">
          Fitness and Health Calculators
        </h2>

        {fitnessCal?.map((item) => (
          <div
            className="flex bg-[white] mb-2 py-[13px] gap-[25px] cursor-pointer px-[15px] rounded-[5px]"
            onClick={() => router.push(item?.path)}
          >
            <img src="/icons/left_arrow.svg" alt="" className="w-[25px]" />
            <p className="text-[17px] text-[#3D3A74]">{item?.name}</p>
          </div>
        ))}
      </div>

      <H2TitleText title={"How many square feet are in an acre?"}>
        <p className="p_text py-3">
          One acre contains approximately 43560 square feet [ft²].
        </p>
        <p className="p_text">
          We already know that the acre to square feet conversion factor equals
          43560 ft²/ acre. But what should we do if the conversion we're looking
          for goes the other way around? Let's try the following formula:
        </p>
      </H2TitleText>

      <H2TitleText title={"How many square feet are in an acre?"}>
        <p className="p_text py-3">
          One acre contains approximately 43560 square feet [ft²].
        </p>
        <p className="p_text">
          We already know that the acre to square feet conversion factor equals
          43560 ft²/ acre. But what should we do if the conversion we're looking
          for goes the other way around? Let's try the following formula:
        </p>
      </H2TitleText>
    </div>
  );
}
