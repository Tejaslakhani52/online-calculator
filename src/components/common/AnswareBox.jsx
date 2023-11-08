import React from "react";

export default function AnswareBox(props) {
  return (
    <div
      className="w-full bg-white rounded-[4px] overflow-hidden"
      style={{
        boxShadow: "0px 2.91px 7.76px 0px rgba(0, 0, 0, 0.20)",
        display: props?.showAns ? "block" : "none",
      }}
    >
      <div
        className="bg-[#22c55e] py-3"
        style={{ boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.20)" }}
      >
        <h2 className="text-center text-[18px] text-white font-semibold">
          Result
        </h2>
      </div>
      <div className="py-[20px] px-[30px]">{props?.children}</div>
    </div>
  );
}
