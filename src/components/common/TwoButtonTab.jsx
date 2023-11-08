import React from "react";

export default function TwoButtonTab({ data, value, setValue }) {
  return (
    <div
      style={{ border: "1px solid #f87171 " }}
      className="flex w-fit p-[1px] rounded-[4px]"
    >
      {data?.map((item) => (
        <button
          className="py-[10px] px-[40px] capitalize	 "
          onClick={() => setValue(item)}
          style={{
            backgroundColor: value === item ? "#f87171 " : "",
            color: value === item ? "white" : "",
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
