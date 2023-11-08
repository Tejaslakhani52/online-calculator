import React from "react";

export default function CalTitleBanner({ title }) {
  return (
    <div
      style={{
        background: "url(./images/orange_menu.svg)",
        backgroundSize: "cover",
      }}
      className="py-4"
    >
      <h1 className="text-white text-[25px] font-[600] text-center">{title}</h1>
    </div>
  );
}
