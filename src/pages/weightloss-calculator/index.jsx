import AnswareBox from "@/components/common/AnswareBox";
import CalTitleBanner from "@/components/common/CalTitleBanner";
import CalculateButton from "@/components/common/CalculateButton";
import CancleButton from "@/components/common/CancleButton";
import CommonInput from "@/components/common/CommonInput";
import FormBox from "@/components/common/FormBox";
import Layout from "@/components/common/Layout";
import RadioButton from "@/components/common/RadioButton";
import SelectMenu from "@/components/common/SelectMenu";
import TitleAndComponent from "@/components/common/TitleAndComponent";
import TwoButtonTab from "@/components/common/TwoButtonTab";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const lifeStyle = [
  { name: "Sedentary", value: 1.5 },
  { name: "Lightly active", value: 1.375 },
  { name: "Moderately active", value: 1.55 },
  { name: "Very active", value: 1.725 },
  { name: "Super active", value: 1.9 },
];

const Index = () => {
  const [currentWeight, setCurrentWeight] = useState(0);
  // const [currentWeightPounds, setCurrentWeightPounds] = useState(0);
  const [targetWeight, setTargetWeight] = useState(0);
  const [height, setHeight] = useState(152);
  console.log("height: ", height);
  const [heightFeet, setHeightFeet] = useState(5.0);
  console.log("heightFeet: ", heightFeet);
  const [activityLevel, setActivityLevel] = useState(1.375);
  const [timeFrame, setTimeFrame] = useState(6);
  const [age, setAge] = useState(0);
  const [unitSystem, setUnitSystem] = useState("metric");
  console.log("unitSystem: ", unitSystem);
  const [gender, setGender] = useState("male");

  const [showAns, setShowAns] = useState(false);

  const convertHeightToFeet = (cm) => {
    return cm * 0.0328084;
  };

  const convertHeightToCm = (feet) => {
    return feet * 30.48;
  };

  const convertWeightToPounds = (kg) => {
    return kg * 2.20462;
  };

  const convertWeightToKg = (pounds) => {
    return pounds / 2.20462;
  };

  const handleUnitSystemChange = (newUnitSystem) => {
    setUnitSystem(newUnitSystem);

    if (newUnitSystem === "imperial") {
      setHeightFeet(convertHeightToFeet(height).toFixed("1"));
      setCurrentWeight(convertWeightToPounds(currentWeight).toFixed());
      setTargetWeight(convertWeightToPounds(targetWeight).toFixed());
    }

    if (newUnitSystem === "metric") {
      setHeight(convertHeightToCm(heightFeet).toFixed("2"));
      setCurrentWeight(convertWeightToKg(currentWeight).toFixed());
      setTargetWeight(convertWeightToKg(targetWeight).toFixed());
    }
  };

  const calculateCalories = () => {
    let bmr;
    if (unitSystem === "metric") {
      if (gender === "male") {
        bmr = 88.362 + 13.397 * currentWeight + 4.799 * height - 5.677 * age;
      } else {
        bmr = 447.593 + 9.247 * currentWeight + 3.098 * height - 4.33 * age;
      }
    } else {
      if (gender === "male") {
        bmr =
          88.362 +
          13.397 * (currentWeight / 2.20462).toFixed() +
          4.799 * (heightFeet * 30.48) -
          5.677 * age;
      } else {
        bmr =
          447.593 +
          9.247 * (currentWeight / 2.20462).toFixed() +
          3.098 * (heightFeet * 30.48) -
          4.33 * age;
      }
    }
    const maintenanceCalories = bmr * activityLevel;
    console.log("maintenanceCalories: ", maintenanceCalories);

    let targetCalories;

    if (unitSystem === "metric") {
      targetCalories =
        maintenanceCalories -
        (7640.5 * (currentWeight - targetWeight)) / (timeFrame * 7);
    } else
      targetCalories =
        maintenanceCalories -
        (7640.5 *
          ((currentWeight / 2.20462).toFixed() -
            (targetWeight / 2.20462).toFixed())) /
          (timeFrame * 7);

    return { maintenanceCalories, targetCalories };
  };

  const { maintenanceCalories, targetCalories } = calculateCalories();

  const scrollToPosition = (scrollY) => {
    window.scrollTo(0, scrollY);
  };

  useEffect(() => {
    if (showAns) {
      scrollToPosition(1200);
    }
  }, [showAns]);

  const handleCalculate = () => {
    if (
      currentWeight === 0 ||
      targetWeight === 0 ||
      (unitSystem === "metric" && height === 0) ||
      (unitSystem === "imperial" && heightFeet === 0) ||
      age === 0
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (targetCalories.toFixed() < 1200) {
      toast.error("Increase the number of weeks !");
    }

    if (targetCalories.toFixed() > 0) {
      scrollToPosition(1200);
    }
    setShowAns(true);
  };

  return (
    <div className="bg-[#F8F8F8] pb-[100px]">
      <CalTitleBanner title={"Weight Loss Calculator"} />
      <Layout
        box2={"fitness"}
        box1={
          <>
            <p className="py-[50px] text-[17px]">
              Are you constantly waging a frustrating battle against the bulge,
              striving to shed those stubborn extra inches around your waist or
              hips? If so, our Weight Loss Calculator could be a great tool to
              get started. Designed to guide and simplify your weight loss
              journey, this tool makes achieving your fitness goals an
              attainable reality, not just a distant dream. Let's embark on this
              transformative journey towards a healthier, fitter you - together.
            </p>
            <FormBox title={"Weight Loss Calculator"}>
              <TitleAndComponent title="UnIt">
                <TwoButtonTab
                  value={unitSystem}
                  setValue={handleUnitSystemChange}
                  data={["metric", "us"]}
                />
              </TitleAndComponent>

              <TitleAndComponent title="Gender">
                <RadioButton
                  value={gender}
                  setValue={setGender}
                  data={["male", "female"]}
                />
              </TitleAndComponent>

              <div className="mt-[20px]">
                <TitleAndComponent title="Age">
                  <CommonInput value={age} setValue={setAge} />
                </TitleAndComponent>

                {unitSystem === "metric" ? (
                  <TitleAndComponent title="Height(cm)">
                    <CommonInput value={height} setValue={setHeight} />
                  </TitleAndComponent>
                ) : (
                  <div className="flex gap-2">
                    <TitleAndComponent title="Height(feet)">
                      <CommonInput
                        value={heightFeet}
                        setValue={setHeightFeet}
                      />
                    </TitleAndComponent>
                  </div>
                )}

                <TitleAndComponent
                  title={
                    unitSystem === "metric"
                      ? "Current Weight (kg)"
                      : "Weight (pounds)"
                  }
                >
                  <CommonInput
                    value={currentWeight}
                    setValue={setCurrentWeight}
                  />
                </TitleAndComponent>

                <TitleAndComponent
                  title={
                    unitSystem === "metric"
                      ? "Target Weight (kg)"
                      : "Target Weight (pounds)"
                  }
                >
                  <CommonInput
                    value={targetWeight}
                    setValue={setTargetWeight}
                  />
                </TitleAndComponent>

                <TitleAndComponent title="Time Frame (weeks):">
                  <CommonInput value={timeFrame} setValue={setTimeFrame} />
                </TitleAndComponent>

                <TitleAndComponent title="Lifestyle">
                  <SelectMenu
                    value={activityLevel}
                    setValue={setActivityLevel}
                    data={lifeStyle}
                  />
                </TitleAndComponent>
              </div>

              <div className="flex justify-between pt-[20px] pb-[20px]">
                <CalculateButton onClick={handleCalculate}>
                  SUBMIT
                </CalculateButton>

                <CancleButton
                  onClick={() => {
                    setUnitSystem("metric");
                    setTimeFrame(6);
                    setHeight(152);
                    setActivityLevel(1.375);
                    setGender("male");
                    setHeightFeet(5.0);
                    setTargetWeight(0);
                    setCurrentWeight(0);
                    setShowAns(false);
                  }}
                >
                  RESET
                </CancleButton>
              </div>
            </FormBox>
            <AnswareBox showAns={showAns}>
              <div className="flex items-center flex-wrap justify-between mb-4">
                <p className="w-[65%]">Your Current Weight :</p>
                <p className="text-[25px] font-semibold">{currentWeight} Kg</p>
              </div>
              <div className="flex items-center flex-wrap justify-between mb-4">
                <p className="w-[65%]">Your Target Weight :</p>
                <p className="text-[25px] font-semibold">{targetWeight} Kg</p>
              </div>
              <div className="flex items-center flex-wrap justify-between mb-4">
                <p className="w-[65%]">Duration :</p>
                <p className="text-[25px] font-semibold">{timeFrame} week</p>
              </div>
              <div className="flex items-center flex-wrap justify-between mb-4">
                <p className="md:w-[65%]">
                  Calories required to maintain current weight :
                </p>
                <p className="text-[25px] font-semibold">
                  {maintenanceCalories.toFixed()}{" "}
                  <span className="text-[16px] font-normal">calories/day.</span>{" "}
                </p>
              </div>
              <div
                className="flex items-center flex-wrap justify-between mb-5"
                style={{
                  display: targetCalories.toFixed() > 0 ? "flex" : "none",
                }}
              >
                <p className="md:w-[65%]">
                  Calories needed to achieve your target weight :
                </p>
                <p className="text-[25px] font-semibold">
                  {targetCalories.toFixed()}{" "}
                  <span className="text-[16px] font-normal">calories/day.</span>{" "}
                </p>
              </div>
              <div
                className="flex items-center flex-wrap justify-between mb-5"
                style={{
                  display: targetCalories.toFixed() > 1200 ? "flex" : "none",
                }}
              >
                <p className="">
                  This means you either need to exercise in order to burn the
                  extra{" "}
                  <span className="text-[20px] font-semibold">
                    {" "}
                    {(maintenanceCalories - targetCalories).toFixed()}
                  </span>{" "}
                  calories or you should reduce your daily calorie intake by{" "}
                  <span className="text-[20px] font-semibold">
                    {" "}
                    {(maintenanceCalories - targetCalories).toFixed()}{" "}
                  </span>
                  calories.
                </p>
              </div>
              {targetCalories.toFixed() < 1200 && (
                <div className="bg-[#FFE9E9] flex items-center gap-5 py-[20px] px-[20px] mb-5">
                  <img src="./images/warning.png" alt="" className="w-[40px]" />
                  <p className="text-[#F00]">
                    This is below the recommended daily caloric intake. It is
                    advisable to extend the time duration to achieve your target
                    weight.
                  </p>
                </div>
              )}

              <div className="flex items-center mb-5">
                <p className="w-[100%]">
                  It is not advisable to limit the daily caloric intake to less
                  than 1200-1600 for men and 1000-1200 for women.
                </p>
              </div>
            </AnswareBox>
          </>
        }
      />
    </div>
  );
};

export default Index;
