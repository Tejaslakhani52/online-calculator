import React from "react";

export default function CommonInput({ value, setValue }) {
  const handleWheel = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <input
        type="number"
        className="common_input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onWheel={handleWheel}
      />
    </div>
  );
}
