import { scrollToPosition } from "@/commonFunction";
import AnswareBox from "@/components/common/AnswareBox";
import CalTitleBanner from "@/components/common/CalTitleBanner";
import CalculateButton from "@/components/common/CalculateButton";
import CancleButton from "@/components/common/CancleButton";
import CommonInput from "@/components/common/CommonInput";
import FormBox from "@/components/common/FormBox";
import Layout from "@/components/common/Layout";
import SelectMenu from "@/components/common/SelectMenu";
import TitleAndComponent from "@/components/common/TitleAndComponent";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function index() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);
  const [numCount, setNumCount] = useState(10);
  const [allowRepeats, setAllowRepeats] = useState(false);
  const [sortOption, setSortOption] = useState("none");
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [error, setError] = useState(false);
  console.log("error: ", numCount, max);
  const [showAns, setShowAns] = useState(false);

  useEffect(() => {
    if (showAns) {
      scrollToPosition(700);
    }
  }, [showAns]);

  const generateRandomNumbers = () => {
    if (numCount == 0 || max == 0) {
      toast.error("Please fill in all required fields.");
      setShowAns(false);
      return;
    } else if (Number(numCount) > Number(max)) {
      setError(true);
      setRandomNumbers([]);
      setShowAns(true);
      scrollToPosition(700);
    } else {
      const numbers = [];
      for (let i = 0; i < numCount; i++) {
        let randomNum;
        do {
          randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (!allowRepeats && numbers.includes(randomNum));
        numbers.push(randomNum);
      }

      if (sortOption === "highToLow") {
        numbers.sort((a, b) => b - a);
      } else if (sortOption === "lowToHigh") {
        numbers.sort((a, b) => a - b);
      }
      scrollToPosition(700);
      setRandomNumbers(numbers);
      setError(false);
      setShowAns(true);
    }
  };

  return (
    <div className="bg-[#F8F8F8] pb-[100px]">
      <Head>
        <title>Random Number Generator</title>
        <meta
          name="description"
          content="Unlock Your Winning Potential with Our Random Number Generator! Whether it's for gaming, contests, or decision-making, our generator delivers the numbers you need. Try It Now to Win Big and Boost Your Chances!"
        />
      </Head>

      <CalTitleBanner title={"Random Number Generator"} />

      <Layout
        box1={
          <div>
            <p className="py-[50px] text-[17px]">
              Online Random Number Generator (RNGs) are essential tools in
              various fields, from gaming and cryptography to statistical
              analysis and research. These digital algorithms provide a
              convenient and efficient means of generating unpredictable
              sequences of numbers, which is crucial in many applications. They
              are widely used in scenarios where true randomness or
              pseudorandomness is required.
            </p>

            <div className="w-full sm:w-[60%] mx-auto">
              <FormBox title={"Random Number Generator"}>
                <div className="flex gap-2">
                  <TitleAndComponent title="Min">
                    <CommonInput value={min} setValue={setMin} />
                  </TitleAndComponent>

                  <TitleAndComponent title="Max">
                    <CommonInput value={max} setValue={setMax} />
                  </TitleAndComponent>
                </div>

                <TitleAndComponent title="How many numbers? ">
                  <CommonInput value={numCount} setValue={setNumCount} />
                </TitleAndComponent>

                <TitleAndComponent title="Sort">
                  <SelectMenu
                    value={sortOption}
                    setValue={setSortOption}
                    data={[
                      { name: "Do not sort", value: "none" },
                      { name: "High to Low", value: "highToLow" },
                      { name: "Low to High", value: "lowToHigh" },
                    ]}
                  />
                </TitleAndComponent>

                <div className="flex gap-2 ">
                  <h3 className="text-[#6D6D6D] font-medium text-[15px] sm:text-[16px] whitespace-wrap">
                    Allow repeats:
                  </h3>

                  <input
                    type="checkbox"
                    checked={allowRepeats}
                    onChange={() => setAllowRepeats(!allowRepeats)}
                    className="w-[16px] cursor-pointer"
                  />
                </div>

                <div className="flex justify-between pt-[20px] pb-[20px]">
                  <CalculateButton onClick={generateRandomNumbers}>
                    SUBMIT
                  </CalculateButton>

                  <CancleButton
                    onClick={() => {
                      setNumCount(10);
                      setMax(10);
                      setAllowRepeats(false);
                      setMin(1);
                      setSortOption("none");
                      setShowAns(false);
                    }}
                  >
                    RESET
                  </CancleButton>
                </div>
              </FormBox>
            </div>

            <div className="w-[100%] mx-auto">
              <AnswareBox showAns={showAns}>
                <div className="flex flex-wrap gap-3 justify-center">
                  {randomNumbers.map((number, index) => (
                    <p
                      key={index}
                      style={{
                        fontFamily:
                          "Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace",
                        width: "",
                      }}
                    >
                      {number}
                    </p>
                  ))}
                </div>

                {error && (
                  <div className="bg-[#FFE9E9] flex items-center gap-5 py-[20px] px-[20px] mb-5">
                    <img
                      src="./images/warning.png"
                      alt=""
                      className="w-[40px]"
                    />
                    <p className="text-[#F00]">
                      The range to pull numbers from contains fewer unique
                      numbers than what you specified you want to draw!
                    </p>
                  </div>
                )}
              </AnswareBox>

              <p className="p_text pt-3">
                Random number picker come in two primary categories: true random
                number generator and pseudorandom number generator. True random
                number generator rely on physical processes that are inherently
                unpredictable, such as radioactive decay or atmospheric noise.
                Pseudorandom number generator, on the other hand, are
                algorithmic and produce sequences of numbers that appear random
                but are determined by an initial seed value. Online RNGs often
                use the latter approach due to its efficiency and ease of
                implementation.
              </p>

              <p className="p_text pt-5">
                Online Random number picker are commonly used in online gaming,
                where they ensure fairness and unpredictability in outcomes. In
                casinos, for instance, RNGs are employed to simulate the
                randomness of real-world gambling, giving players a sense of
                chance while maintaining the integrity of the game. In video
                games, RNGs determine loot drops, enemy behaviour, and other
                variables to keep gameplay engaging and dynamic.
              </p>

              <p className="p_text pt-5">
                Beyond gaming, online RNGs are integral in cryptography,
                ensuring secure encryption and key generation. They play a
                critical role in securing online communication, protecting
                sensitive data, and enabling secure transactions. In
                cryptographic applications, the strength and unpredictability of
                the RNG are paramount.
              </p>

              <p className="p_text pt-5">
                Statisticians and researchers also rely on online Number Genetor
                to perform simulations and experiments. These generators allow
                for the random sampling of data, helping researchers draw
                statistically valid conclusions. They are used in Monte Carlo
                simulations, bootstrap resampling, and other statistical
                techniques that require random sampling to approximate complex,
                real-world phenomena.
              </p>

              <p className="p_text pt-5">
                Online Random number generator are also prevalent in
                applications like randomised clinical trials, where they help
                ensure the fairness and impartiality of the selection process
                for treatment groups. In such cases, the use of true randomness
                or strong pseudorandomness is essential to minimise bias and
                maintain the scientific integrity of the study.
              </p>

              <p className="p_text pt-5">
                Online number generator offer diverse benefits, it's important
                to select a wonderful range generator that meets the
                requirements of the particular want. the choice of set of rules,
                the satisfaction of the seed price, and the periodicity of the
                generator can all affect the randomness and unpredictability of
                the generated numbers.
              </p>

              <p className="p_text pt-5">
                Online Random Number Generator are versatile tools with
                applications spanning gaming, cryptography, statistics, and
                scientific research. They provide a means of generating
                unpredictable sequences of numbers, and their quality and
                security are of paramount importance in various domains. Whether
                it's to ensure fairness in gaming, security in cryptography, or
                statistical validity in research, online RNGs are essential
                components of many digital systems, contributing to the
                integrity and reliability of the processes they support.
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
}
