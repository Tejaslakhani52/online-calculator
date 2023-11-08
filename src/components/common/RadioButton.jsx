import React from "react";

export default function RadioButton({ data, value, setValue }) {
  return (
    <div className="flex w-fit gap-[50px]">
      {data?.map((item) => (
        <div className="flex gap-[5px] items-center">
          <div
            className="p-[2px] h-[20px] w-[20px]  rounded-[50%] cursor-pointer"
            style={{ border: "2px solid #f87171 " }}
            onClick={() => setValue(item)}
          >
            <div
              className=" w-full h-full rounded-[50%]"
              style={{
                backgroundColor: value === item ? "#f87171 " : "",
                color: value === item ? "white" : "",
              }}
            ></div>
          </div>

          <p className="capitalize text-[#6D6D6D]">{item}</p>
        </div>
      ))}
    </div>
  );
}
