import React from "react";

export default function CalculateButton(props) {
  return (
    <button
      className="bg-[#f87171]  w-[48%] py-[8px] text-white font-semibold rounded-[4px]"
      style={{ border: "4px solid #f87171" }}
      {...props}
    >
      {props?.children}
    </button>
  );
}
