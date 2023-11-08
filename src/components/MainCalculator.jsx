import React, { useEffect, useState } from "react";

export default function MainCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  const handleClick = (value) => {
    console.log("value: ", value);
    if (value === "=" || value === "Enter") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("0");
    } else if (value === "%") {
      try {
        setResult((eval(input) / 100).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "." && input.includes(".")) {
      return;
    } else if (value === "backspace") {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key;
      if (key === "Enter") {
        handleClick("=");
      }
      console.log("key: ", key);
      if (/[0-9+\-*/.=C%]/.test(key)) {
        handleClick(key);
      } else if (key === "Backspace") {
        handleClick("backspace");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      className="w-fit mx-auto rounded-[31px] px-3 sm:max-w-[90%] mt-[-230px]"
      style={{
        background: "#f87171",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(167deg, rgba(249, 251, 247, 0.33) -5.94%, rgba(247, 248, 251, 0.00) 103.62%)",
        }}
        className="py-[30px] px-[10px] sm:px-[30px] rounded-[31px] flex flex-col"
      >
        <div className="w-full bg-white rounded-[15px] p-[17px] mb-4">
          <div>
            <input
              type="text"
              value={input}
              readOnly
              autoFocus
              className="w-full text-right "
            />
          </div>
          <div>
            <input
              type="text"
              value={result}
              readOnly
              className="text-[22px] text-[#424242] font-semibold text-right w-full"
            />
          </div>
        </div>

        <div className="flex justify-between pb-2">
          <button
            className="bg-[#f87171] flex justify-center items-center w-[47%] text_shadow rounded-[13px] h-[45px] text-white"
            onClick={() => handleClick("C")}
          >
            CLEAR
          </button>
          <button
            className="bg-[#f87171] flex justify-center w-[47%] text_shadow rounded-[13px] text-white h-[45px] items-center light_blue_linear"
            onClick={() => handleClick("backspace")}
          >
            <img src="./icons/backCalculator.svg" alt="" />
          </button>
        </div>
        <div className="flex">
          <button
            className="cal_button text_shadow"
            onClick={() => handleClick("7")}
          >
            7
          </button>
          <button
            className="cal_button text_shadow"
            onClick={() => handleClick("8")}
          >
            8
          </button>
          <button
            className="cal_button text_shadow"
            onClick={() => handleClick("9")}
          >
            9
          </button>
          <button
            className="cal_button light_blue_linear col_red"
            onClick={() => handleClick("+")}
          >
            +
          </button>
        </div>
        <div className="flex">
          <button
            className="cal_button text_shadow"
            onClick={() => handleClick("4")}
          >
            4
          </button>
          <button
            className="cal_button text_shadow"
            onClick={() => handleClick("5")}
          >
            5
          </button>
          <button
            className="cal_button text_shadow"
            onClick={() => handleClick("6")}
          >
            6
          </button>
          <button
            className="cal_button light_blue_linear col_red"
            onClick={() => handleClick("-")}
          >
            -
          </button>
        </div>
        <div className="flex">
          <button
            className="cal_button text_shadow"
            onClick={() => handleClick("1")}
          >
            1
          </button>
          <button
            className="cal_button text_shadow"
            onClick={() => handleClick("2")}
          >
            2
          </button>
          <button
            className="cal_button text_shadow"
            onClick={() => handleClick("3")}
          >
            3
          </button>
          <button
            className="cal_button light_blue_linear col_red"
            onClick={() => handleClick("*")}
          >
            ×
          </button>
        </div>
        <div className="flex">
          <button
            className="cal_button text_shadow"
            onClick={() => handleClick("0")}
          >
            0
          </button>

          <button
            className="cal_button text_shadow"
            onClick={() => handleClick("00")}
          >
            00
          </button>

          <button
            className="cal_button text_shadow"
            onClick={() => handleClick(".")}
            style={{ fontSize: "22px" }}
          >
            .
          </button>

          <button
            className="cal_button light_blue_linear col_red"
            onClick={() => handleClick("/")}
            style={{ fontSize: "20px" }}
          >
            /
          </button>
        </div>
        <div className="flex justify-end">
          <button
            className="w-[78%] my-[6px] h-[40px] sm:h-[45px] text_shadow bg-[#f87171] rounded-[12px] text-[25px] text-white"
            onClick={() => handleClick("=")}
            style={{
              boxShadow:
                "-8px 10px 20px 0px rgba(173, 36, 34, 0.50), 2px 4.44693px 12.22905px 0px #FFD6D3 inset",
            }}
          >
            =
          </button>

          <button
            className="cal_button light_blue_linear col_red"
            onClick={() => handleClick("%")}
          >
            %
          </button>
        </div>
      </div>
    </div>
  );
}
