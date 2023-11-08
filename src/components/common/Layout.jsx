import React from "react";
import H2TitleText from "./H2TitleText";
import Fitness from "../secondLayoutBox/Fitness";
import { getBox } from "@/constant/calculatorType";

export default function Layout({ box1, box2 }) {
  return (
    <div>
      <div className="flex w-full px-[20px] md:px-[20px]  xl:w-[80%]  flex-col lg:flex-row gap-[50px] mx-auto ">
        <div className="w-full md:w-[70%] ">{box1}</div>
        <div className="w-full md:w-[30%]">{getBox[box2]}</div>
      </div>
    </div>
  );
}
