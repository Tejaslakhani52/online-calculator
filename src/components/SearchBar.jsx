import { allCalculator } from "@/constant/constant";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  console.log("suggestions: ", suggestions);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);

    const filteredSuggestions = allCalculator.filter((item) =>
      item?.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    if (inputValue) {
      setSuggestions(filteredSuggestions);
    } else setSuggestions([]);
  };
  return (
    <div
      className="w-[90%] sm:w-[60%] mx-auto flex items-center gap-3 px-4 py-3
	   rounded-[50px] bg-[#242342] relative"
      style={{ border: "3px solid #FFF" }}
    >
      <div className="w-[30px]">
        <img src="./icons/whiteSearchIcon.svg" alt="" />
      </div>
      <input
        type="text"
        placeholder="Search Calculator"
        className="text-white w-full"
        value={searchValue}
        onChange={handleInputChange}
      />

      <div
        className="absolute rounded-[8px] px-[10px] py-[10px] top-[60px] shadow-xl  left-0 right-0 bg-[#F8F8F8]"
        style={{ display: searchValue ? "block" : "none" }}
      >
        {suggestions.length > 0 ? (
          suggestions?.map((item) => (
            <div
              className="flex bg-[white] mb-2 hover:bg-[gainsboro] py-[10px] gap-[25px] cursor-pointer px-[15px] rounded-[5px]"
              onClick={() => router.push(item?.path)}
            >
              {/* <img src="/icons/left_arrow.svg" alt="" className="w-[25px]" /> */}
              <p className="text-[17px] text-[#3D3A74]">{item?.name}</p>
            </div>
          ))
        ) : (
          <div className="p-[20px] text-center text-[17px]">
            No calculator matches "{searchValue}".
          </div>
        )}
      </div>
    </div>
  );
}
