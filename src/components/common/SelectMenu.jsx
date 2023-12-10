import React from "react";

export default function SelectMenu({ data, value, setValue, font }) {
  return (
    <div>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          width: "100%",
          cursor: "pointer",
          fontSize: font ? font : "17px",
        }}
        className="onFocus_select bg-transparent"
      >
        {data?.map((item) => (
          <option
            value={item?.value}
            className="  text-left"
            style={{ fontSize: font ? font : "17px" }}
          >
            {item?.name}
          </option>
        ))}
      </select>
    </div>
  );
}
