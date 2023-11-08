import React from "react";

export default function CancleButton(props) {
  return (
    <button
      className="w-[48%] py-[8px] text-[#f87171] font-semibold rounded-[4px]"
      style={{ border: "2px solid #f87171 " }}
      {...props}
    >
      {props?.children}
    </button>
  );
}
