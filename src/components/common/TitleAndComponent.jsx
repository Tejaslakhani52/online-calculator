import React from "react";

export default function TitleAndComponent(props) {
  return (
    <div className="mb-4 w-full">
      <h3 className="mb-2 text-[#6D6D6D] font-semibold text-[15px] sm:text-[16px] whitespace-wrap">
        {props?.title}
      </h3>

      {props?.children}
    </div>
  );
}
