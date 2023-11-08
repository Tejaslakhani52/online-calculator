import React from "react";

export default function FormBox(props) {
  return (
    <div
      className="w-full mb-4 bg-white"
      style={{
        boxShadow: "0px 2.91px 7.76px 0px rgba(0, 0, 0, 0.20)",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <div
        className="bg-[#f87171] py-2"
        style={{ boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.20)" }}
      >
        <h2 className="text-center text-[18px] text-white font-semibold">
          {props?.title}
        </h2>
      </div>
      <div className="py-[20px] px-[10px] sm:px-[30px]">{props?.children}</div>
    </div>
  );
}
