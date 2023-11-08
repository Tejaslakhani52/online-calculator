import React from "react";

export default function H2TitleText(props) {
  return (
    <div className="my-[30px]">
      <h2 className="text-[22px] font-[600] mb-2">{props?.title}</h2>
      {props?.children}
    </div>
  );
}
