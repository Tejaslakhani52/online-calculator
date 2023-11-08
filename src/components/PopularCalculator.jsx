import { popularCal } from "@/constant/constant";
import { useRouter } from "next/router";
import React from "react";

export default function PopularCalculator() {
  const router = useRouter();
  return (
    <div className="bg-[#F8F8F8]">
      <div className=" py-[50px] pb-[70px] w-[90%] lg:w-[80%] mx-auto">
        <h2 className="text-[30px] f_red max-sm:text-center font-[700] pb-10   ">
          Popular Calculator
        </h2>
        <div className="flex justify-between flex-wrap">
          {popularCal?.map((item) => (
            <div
              className="cal_show_box"
              style={{ gap: "0" }}
              onClick={() => router.push(item?.path)}
            >
              <img src={item?.image} alt="" className="w-[50px] mb-5" />

              <h3 className="font-semibold f_Inter text-center text-[17px] max-sm:text-[15px] mb-2">
                {item?.name}
              </h3>

              <p className="text-center f_Inter text-[#5C5C5C] text-[14px]">
                {item?.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
