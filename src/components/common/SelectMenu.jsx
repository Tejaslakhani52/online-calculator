import React from "react";

export default function SelectMenu({ data, value, setValue }) {
  return (
    <div>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: "100%", cursor: "pointer" }}
        className="onFocus_select bg-transparent"
      >
        {data?.map((item) => (
          <option value={item?.value}>{item?.name}</option>
        ))}
      </select>
    </div>
  );
}
