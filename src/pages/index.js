import Advantage from "@/components/Advantage";
import MainCalculator from "@/components/MainCalculator";
import PopularCalculator from "@/components/PopularCalculator";
import SearchBar from "@/components/SearchBar";
import Services from "@/components/Services";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Online Calculator Tools: Simplify Your Calculations with Ease
        </title>
        <meta
          name="description"
          content="Get Instant Answers with Our All-in-One Calculator 🚀 - Master Math, Conversions, and More! Try Our Online Calculator Today!"
        />
      </Head>
      <div
        style={{
          backgroundImage: "url(./images/HeroSection.svg)",
          height: "auto",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        className="pb-[120px]"
      >
        <h1 className="text-[#f87171] text-center text-[30px] sm:text-[48px] uppercase font-[800] pt-20 pb-10 f_arial">
          Online Calculator Tools
        </h1>

        <div>
          <SearchBar />

          <p className="text-[#FFF] text-center f_Inter pt-14 pb-8 w-[90%] sm:w-[70%] text-[17px] font-semibold mx-auto">
            The top online calculator tool is your ultimate companion for quick
            and accurate calculations, offering a user-friendly interface,
            versatile functions, financial and scientific capabilities, unit
            conversions, programming features, and graphing capabilities.
            Whether you're a student, professional, or anyone in need of
            reliable calculations, this tool is a valuable resource that
            simplifies the world of mathematics and data analysis.
          </p>
        </div>
      </div>

      <MainCalculator />

      <div className="w-[90%] sm:w-[70%] mx-auto pt-[50px] sm:pt-[90px] pb-[50px] ">
        <h2 className="text-center text-[30px] font-[700] ">
          <span
            style={{
              backgroundColor: "rgba(255, 96, 94, 0.20)",
              color: "#f87171",
              padding: "7.5px 0 7.5px 15px",
              borderRadius: "50%",
            }}
            className="f_red"
          >
            Ca
          </span>
          <span style={{ borderBottom: "3px solid #f87171" }} className="f_red">
            lculator
          </span>{" "}
          <span style={{ borderBottom: "3px solid #f87171" }} className="f_red">
            Use
          </span>
        </h2>

        <p className="text-center text-[18px] font-medium py-4 f_Inter">
          Online calculator tools are versatile and accessible, making them
          invaluable for a wide range of tasks. From simple arithmetic to
          complex scientific calculations, financial planning, and health
          assessments, these tools are designed to make your life easier.
          Whether you're a student, professional, or someone managing personal
          affairs, incorporating online calculators into your daily routine can
          streamline your processes and provide accurate results at your
          fingertips. Try out the various online calculator tools available to
          see how they can simplify your calculations and improve your
          efficiency
        </p>
      </div>

      {/* <div
        className="w-[80%] mx-auto mb-[50px] sm:mb-[80px] h-[80px] flex justify-around	 items-center rounded-[30px] red_Gred flex-col sm:flex-row max-sm:p-2 max-sm:h-auto"
        style={{ border: "3px solid rgba(216, 216, 216, 0.00)" }}
      >
        <div className="flex items-center gap-5">
          <img
            src="./icons/rightMark.svg"
            alt=""
            className="w-[25px] max-sm:w-[20px]"
          />
          <p className="text-[19px] font-semibold">Calculator Use</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            src="./icons/rightMark.svg"
            alt=""
            className="w-[25px] max-sm:w-[20px]"
          />
          <p className="text-[19px] font-semibold">Calculator Use</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            src="./icons/rightMark.svg"
            alt=""
            className="w-[25px] max-sm:w-[20px]"
          />
          <p className="text-[19px] font-semibold">Calculator Use</p>
        </div>
      </div> */}

      <PopularCalculator />
      <Advantage />
      <Services />
    </div>
  );
}
