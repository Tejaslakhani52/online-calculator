import { useRouter } from "next/router";
import React, { useState } from "react";

const menuName = [
  { name: "Home" },
  { name: "Calculator" },
  { name: "Services" },
  { name: "Our Project" },
  { name: "About us" },
];

export default function Header() {
  const [selectedValue, setSelectedValue] = useState("Home");
  const router = useRouter();
  let currentPath;
  if (typeof window !== "undefined") {
    currentPath = window.location.pathname;
  }
  const [mobileMenu, setMobileMenu] = useState(false);
  console.log("currentPath: ", currentPath);
  return (
    <>
      {/* <div
        className="h-[65px] flex justify-center items-center gap-[4%] fixed left-0 right-0 top-0 bg-white"
        style={{ boxShadow: "0px 2px 10px 0px rgba(23, 147, 237, 0.40)" }}
      >
        {menuName?.map((item) => (
          <div
            key={item?.name}
            className={`${
              selectedValue === item?.name
                ? "text-[#f87171 ]"
                : "text-[#6D6D6D]"
            } text-[17px] font-medium font-semibold cursor-pointer`}
            onClick={() => setSelectedValue(item?.name)}
          >
            {item?.name}
          </div>
        ))}
      </div> */}
      <div
        className="fixed top-0 left-0 right-0 bg-white	z-[100] "
        style={{
          borderBottom: "1px solid rgb(226 232 240)",
          // boxShadow: "0 0 20px #afafaf4f",
        }}
      >
        <div className="h-[65px] flex items-center justify-between lg:px-[30px] w-[95%] md:w-[98%] mx-auto ">
          <div
            className="logo flex items-center gap-3 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <img
              src={"/images/logo.svg"}
              alt=""
              className="w-[150px] sm:w-[200px]"
            />
          </div>

          <div
            className="block md:hidden pr-[10px] cursor-pointer"
            onClick={() => setMobileMenu(true)}
          >
            <i class="fa-solid fa-bars text-[25px]"></i>
          </div>

          <div className="hidden gap-[40px] md:flex">
            <button
              className="text-[17px] font-medium hover:text-[#f87171] p-[10px]"
              style={{ color: currentPath === "/" ? "#f87171" : "" }}
              onClick={() => router.push("/")}
            >
              Home
            </button>
            <button
              className="text-[17px] font-medium hover:text-[#f87171] p-[10px]"
              style={{ color: currentPath === "/calculator" ? "#f87171" : "" }}
              onClick={() => {
                router.push("/calculator");
              }}
            >
              Calculator
            </button>
            <button
              className="text-[17px] font-medium hover:text-[#f87171] p-[10px]"
              style={{ color: currentPath === "/services" ? "#f87171" : "" }}
              onClick={() => router.push("/services")}
            >
              Services
            </button>
            <button
              className="text-[17px] font-medium hover:text-[#f87171] p-[10px]"
              style={{ color: currentPath === "/project" ? "#f87171" : "" }}
              onClick={() => router.push("/project")}
            >
              Our Project
            </button>
            <button
              className="text-[17px] font-medium hover:text-[#f87171] p-[10px]"
              style={{ color: currentPath === "/about" ? "#f87171" : "" }}
              onClick={() => router.push("/about")}
            >
              About us
            </button>
          </div>
          <div
            className="fixed top-[0] bg-[black] w-[100%] bottom-[0] left-0  bg-[black]"
            style={{
              opacity: mobileMenu ? "0.2" : "0",
              transition: "0.3s all",
              visibility: mobileMenu ? "visible" : "hidden",
            }}
            onClick={() => setMobileMenu(false)}
          ></div>
          <div
            className="fixed top-[0] bg-[white] w-[50%] bottom-[0]"
            style={{
              right: mobileMenu ? "0" : "-200%",
              transition: "0.3s all",
              opacity: mobileMenu ? "1" : "0",
            }}
          >
            <div className="flex flex-col items-end pr-[10px]">
              <button
                className="text-[17px] font-medium hover:text-[#f87171] p-[10px] pt-[20px]"
                onClick={() => setMobileMenu(false)}
              >
                <i class="fa-solid fa-xmark text-[25px]"></i>
              </button>
              <button
                className="text-[17px] font-medium hover:text-[#f87171] p-[10px]"
                style={{ color: currentPath === "/" ? "#f87171" : "" }}
                onClick={() => router.push("/")}
              >
                Home
              </button>
              <button
                className="text-[17px] font-medium hover:text-[#f87171] p-[10px]"
                style={{
                  color: currentPath === "/calculator" ? "#f87171" : "",
                }}
                onClick={() => {
                  router.push("/calculator");
                }}
              >
                Calculator
              </button>
              <button
                className="text-[17px] font-medium hover:text-[#f87171] p-[10px]"
                style={{ color: currentPath === "/services" ? "#f87171" : "" }}
                onClick={() => router.push("/services")}
              >
                Services
              </button>
              <button
                className="text-[17px] font-medium hover:text-[#f87171] p-[10px]"
                style={{ color: currentPath === "/project" ? "#f87171" : "" }}
                onClick={() => router.push("/project")}
              >
                Our Project
              </button>
              <button
                className="text-[17px] font-medium hover:text-[#f87171] p-[10px]"
                style={{ color: currentPath === "/about" ? "#f87171" : "" }}
                onClick={() => router.push("/about")}
              >
                About us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
