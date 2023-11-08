import {
  convertHeightToCm,
  convertHeightToFeet,
  convertWeightToKg,
  convertWeightToPounds,
  localString,
  scrollToPosition,
} from "@/commonFunction";
import AnswareBox from "@/components/common/AnswareBox";
import CalTitleBanner from "@/components/common/CalTitleBanner";
import CalculateButton from "@/components/common/CalculateButton";
import CancleButton from "@/components/common/CancleButton";
import CommonInput from "@/components/common/CommonInput";
import FormBox from "@/components/common/FormBox";
import H2TitleText from "@/components/common/H2TitleText";
import Layout from "@/components/common/Layout";
import RadioButton from "@/components/common/RadioButton";
import SelectMenu from "@/components/common/SelectMenu";
import TitleAndComponent from "@/components/common/TitleAndComponent";
import TwoButtonTab from "@/components/common/TwoButtonTab";
import { lifeStyle } from "@/contant";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const foodData = [
  { name: "Apple (medium-sized)", cal: " About 95 calories" },
  { name: "Banana (medium-sized)", cal: " Approximately 105 calories" },
  {
    name: "Chicken Breast (skinless, boneless, 3.5 oz)",
    cal: " Roughly 165 calories",
  },
  { name: "Salmon (wild-caught, cooked, 3.5 oz)", cal: " Around 206 calories" },
  { name: "Rice (cooked, 1 cup)", cal: " About 205 calories" },
  { name: "Pasta (cooked, 1 cup)", cal: " Approximately 200 calories" },
  { name: "Egg (large, boiled)", cal: " About 68 calories" },
  { name: "Avocado (medium-sized)", cal: " Roughly 234 calories" },
  { name: "Spinach (raw, 1 cup)", cal: " About 7 calories" },
  { name: "Bread (1 slice of whole wheat)", cal: " Approximately 80 calories" },
  { name: "Carrot (raw, medium-sized)", cal: " About 25 calories" },
  { name: "Yogurt (plain, low-fat, 1 cup)", cal: " Around 150 calories" },
  {
    name: "Almonds (1 oz, about 23 almonds)",
    cal: " Approximately 160 calories",
  },
  { name: "Hamburger (regular, fast food)", cal: " Roughly 250-300 calories" },
  {
    name: "Pizza (1 slice, cheese, from a pizzeria)",
    cal: " About 280-350 calories",
  },
  { name: "Strawberries (1 cup, sliced)", cal: " Approximately 53 calories" },
  { name: "Broccoli (1 cup, cooked)", cal: " About 55 calories" },
  {
    name: "Ground Beef (80% lean, cooked, 3.5 oz)",
    cal: "Roughly 250 calories",
  },

  { name: "Lettuce (1 cup, shredded)", cal: " Approximately 5 calories" },
  { name: "Oatmeal (cooked, 1 cup)", cal: " About 150 calories" },
  { name: "Milk (1 cup, 2% fat)", cal: " Around 122 calories" },
  { name: "Peanut Butter (2 tablespoons)", cal: " Roughly 180 calories" },
  { name: "Cheese (cheddar, 1 oz)", cal: " Approximately 110 calories" },
  { name: "Orange (medium-sized)", cal: " About 62 calories" },
  { name: "Green Beans (1 cup, cooked)", cal: " Around 38 calories" },
  { name: "Honey (1 tablespoon)", cal: " Roughly 64 calories" },
  {
    name: "Popcorn (popped, air-popped, 3 cups)",
    cal: " Approximately 93 calories",
  },
  { name: "Soda (regular, 12 oz can)", cal: " About 150 calories" },
  { name: "Potato (medium-sized, baked)", cal: " Roughly 161 calories" },
  {
    name: "Tuna (canned in water, drained, 3 oz)",
    cal: " Approximately 99 calories",
  },
  {
    name: "Chocolate Chip Cookie (standard homemade, 1 cookie)",
    cal: " About 50-80 calories, depending on the recipe",
  },
];

const faqs = [
  {
    q: "1. Are online calorie calculators accurate?",
    ans: "Online calorie calculators provide reasonably accurate estimates, but individual variations may occur.",
  },
  {
    q: "2. Can I use an online calorie calculator for weight gain?",
    ans: "Absolutely. Online calorie calculators can help you create a calorie surplus to gain weight healthily.",
  },
  {
    q: "3. Do online calorie calculators account for special dietary needs?",
    ans: "Many calculators offer customization options for different dietary preferences and restrictions.",
  },
  {
    q: "4. Should I solely rely on an online calorie calculator for weight management?",
    ans: "While helpful, it's essential to consult with a healthcare professional for a holistic approach to health and weight management.",
  },
  {
    q: "5. Are online calorie calculators suitable for children and teenagers?",
    ans: "recommended that parents supervise younger individuals' use of calorie calculators to promote healthy attitudes towards food and body image.",
  },
];

const Index = () => {
  const [currentWeight, setCurrentWeight] = useState(55);
  const [height, setHeight] = useState(152);
  const [heightFeet, setHeightFeet] = useState(5.8);
  const [activityLevel, setActivityLevel] = useState(1.375);
  const [age, setAge] = useState(22);
  const [unitSystem, setUnitSystem] = useState("metric");
  const [gender, setGender] = useState("male");
  const [showAns, setShowAns] = useState(false);

  const handleUnitSystemChange = (newUnitSystem) => {
    setUnitSystem(newUnitSystem);

    setShowAns(false);

    if (newUnitSystem === "us") {
      setHeightFeet(convertHeightToFeet(height).toFixed("1"));
      setCurrentWeight(convertWeightToPounds(currentWeight).toFixed());
    }

    if (newUnitSystem === "metric") {
      setHeight(convertHeightToCm(heightFeet).toFixed("2"));
      setCurrentWeight(convertWeightToKg(currentWeight).toFixed());
    }
  };

  useEffect(() => {
    if (showAns) {
      scrollToPosition(750);
    }
  }, [showAns]);

  const calculateCaloriess = () => {
    let bmr;

    if (unitSystem === "metric") {
      if (gender === "male") {
        bmr = 10 * currentWeight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * currentWeight + 6.25 * height - 5 * age - 161;
      }
    } else {
      if (gender === "male") {
        bmr =
          10 * (currentWeight / 2.20462).toFixed() +
          6.25 * (heightFeet * 30.48) -
          5 * age -
          18.5;
      } else {
        bmr =
          10 * (currentWeight / 2.20462).toFixed() +
          6.25 * (heightFeet * 30.48) -
          5 * age -
          184.9;
      }
    }

    const maintenanceCalories = bmr * activityLevel;
    const mildWeightLossCalories = maintenanceCalories - 250;
    const weightLossCalories = maintenanceCalories - 500;
    const extremeWeightLossCalories = maintenanceCalories - 1000;

    const mildWeightGainCalories = maintenanceCalories + 250;
    const weightGainCalories = maintenanceCalories + 500;
    const extremeWeightGainCalories = maintenanceCalories + 1000;

    return {
      maintain: maintenanceCalories,
      mildLoss: mildWeightLossCalories,
      loss: weightLossCalories,
      extremeLoss: extremeWeightLossCalories,
      mildGain: mildWeightGainCalories,
      gain: weightGainCalories,
      extremeGain: extremeWeightGainCalories,
    };
  };

  const result = calculateCaloriess();
  console.log("result: ", result);

  const handleCalculate = () => {
    if (
      currentWeight === 0 ||
      (unitSystem === "metric" && height === 0) ||
      (unitSystem === "us" && heightFeet === 0) ||
      age === 0
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (age > 80 || age < 15) {
      toast.error("Please provide an age between 15 and 80.");
      return;
    }

    scrollToPosition(750);
    setShowAns(true);
  };

  return (
    <div className="bg-[#F8F8F8] pb-[100px]">
      <Head>
        <title>Online Calorie Calculator: Your Path to a Healthier Life</title>
        <meta
          name="description"
          content="Unlock Your Dream Body! 🌟 Try Our Calorie Calculator Now for Rapid Results. 🏋️‍♀️ Get Fit Fast! 🔥"
        />
      </Head>
      <CalTitleBanner
        title={"Online Calorie Calculator: Your Path to a Healthier Life"}
      />
      <Layout
        box2={"fitness"}
        box1={
          <>
            <p className="py-[50px] text-[17px]">
              In today's tech-savvy era, where all you need is a simple tap,
              achieving a well-balanced life has never been more convenient. An
              indispensable asset for individuals striving to regulate their
              body mass or opt for wiser dietary options is the digital calorie
              computation tool. In this post, we will delve into the importance
              of web-based calorie calculators and how they can enhance your
              pursuit of a fitter lifestyle.
            </p>
            <FormBox title={"Calorie Calculator"}>
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
                    unitSystem === "metric" ? "Weight (kg)" : "Weight (pounds)"
                  }
                >
                  <CommonInput
                    value={currentWeight}
                    setValue={setCurrentWeight}
                  />
                </TitleAndComponent>

                <TitleAndComponent title="Activity">
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
                    setHeight(152);
                    setActivityLevel(1.375);
                    setGender("male");
                    setHeightFeet(5.8);
                    setCurrentWeight(55);
                    setShowAns(false);
                    setAge(22);
                  }}
                >
                  RESET
                </CancleButton>
              </div>
            </FormBox>
            <AnswareBox showAns={showAns}>
              <div className="flex items-center flex-wrap justify-between mb-4">
                <p className="text-[17px]">Maintain weight : </p>
                <p className="text-[25px] font-semibold">
                  {localString(result?.maintain)}{" "}
                  <span className="text-[16px] text-[grey]">Calories/day</span>
                </p>
              </div>

              <div className="flex items-center flex-wrap justify-between mb-4">
                <p>
                  Mild weight loss{" "}
                  <span className="text-[grey]">0.25 kg/week</span> :
                </p>
                <p className="text-[25px] font-semibold">
                  {localString(result?.mildLoss)}{" "}
                  <span className="text-[16px] text-[grey]">Calories/day</span>
                </p>
              </div>
              <div className="flex items-center flex-wrap justify-between mb-4">
                <p>
                  Weight loss <span className="text-[grey]">0.5 kg/week</span> :
                </p>
                <p className="text-[25px] font-semibold">
                  {localString(result?.loss)}{" "}
                  <span className="text-[16px] text-[grey]">Calories/day</span>
                </p>
              </div>
              <div className="flex items-center flex-wrap justify-between mb-4">
                <p>
                  Extreme weight loss{" "}
                  <span className="text-[grey]">1 kg/week</span> :
                </p>
                <p className="text-[25px] font-semibold">
                  {localString(result?.extremeLoss)}{" "}
                  <span className="text-[16px] text-[grey]">Calories/day</span>
                </p>
              </div>

              <div className="flex items-center flex-wrap justify-between mb-4">
                <p>
                  Mild weight gain{" "}
                  <span className="text-[grey]">0.25 kg/week</span> :
                </p>
                <p className="text-[25px] font-semibold">
                  {localString(result?.mildGain)}{" "}
                  <span className="text-[16px] text-[grey]">Calories/day</span>
                </p>
              </div>
              <div className="flex items-center flex-wrap justify-between mb-4">
                <p>
                  Weight gain <span className="text-[grey]">0.5 kg/week</span> :
                </p>
                <p className="text-[25px] font-semibold">
                  {localString(result?.gain)}{" "}
                  <span className="text-[16px] text-[grey]">Calories/day</span>
                </p>
              </div>
              <div className="flex items-center flex-wrap justify-between mb-4">
                <p>
                  Extreme weight gain{" "}
                  <span className="text-[grey]">1 kg/week</span> :
                </p>
                <p className="text-[25px] font-semibold">
                  {localString(result?.extremeGain)}{" "}
                  <span className="text-[16px] text-[grey]">Calories/day</span>
                </p>
              </div>
            </AnswareBox>

            <H2TitleText title={"Why Calorie Counting Matters"}>
              <p className="p_text">
                Calorie counting is a fundamental aspect of managing your weight
                and ensuring a balanced diet. It's all about understanding the
                energy you consume and expend. Online calorie calculators
                simplify this process by providing a structured way to monitor
                your daily caloric intake.
              </p>
            </H2TitleText>

            <h2 className="h2_Title">
              Benefits of Using an Online Calorie Calculator
            </h2>

            <div className="ml-8 mb-8  ">
              <div className="key">
                <h3>1. Precision:</h3>
                <p>
                  Online calorie calculators offer precise estimates of your
                  daily calorie needs.
                </p>
              </div>
              <div className="key">
                <h3>2. Convenience:</h3>
                <p>Accessible 24/7, you can track your calories at any time.</p>
              </div>
              <div className="key">
                <h3>3. Education:</h3>
                <p>Learn about the calorie content of different foods.</p>
              </div>
              <div className="key">
                <h3>4. Goal Setting:</h3>
                <p>Set specific dietary and weight-related goals.</p>
              </div>
            </div>

            <h2 className="h2_Title">
              Features of a Good Online Calorie Calculator
            </h2>
            <p className="text-[15px] font-[600] mb-1">
              Unleash the Power of Knowledge
            </p>
            <div className="ml-8 mb-8">
              <div className="key">
                <h3>1. Database of Foods:</h3>
                <p>A comprehensive list of foods with calorie information.</p>
              </div>
              <div className="key">
                <h3>2. Portion Control:</h3>
                <p>The ability to adjust serving sizes.</p>
              </div>
              <div className="key">
                <h3>3. Customization:</h3>
                <p>Options to accommodate different dietary preferences.</p>
              </div>
            </div>

            <H2TitleText title={"How to Use an Online Calorie Calculator"}>
              <p className="p_text">
                Start by inputting your personal information: age, gender,
                weight, and activity level.
              </p>
              <p className="p_text py-3">
                Add the foods and drinks you consume, specifying the quantities.
              </p>
              <p className="p_text">
                The calculator will display your total calorie intake and
                recommended daily intake.
              </p>
            </H2TitleText>

            <H2TitleText title={"Tracking Your Caloric Intake"}>
              <p className="p_text">
                Consistency is key. Tracking your caloric intake over time will
                help you understand your eating habits and identify areas where
                you can make improvements.
              </p>
            </H2TitleText>
            <H2TitleText title={"Customization for Dietary Preferences"}>
              <p className="p_text">
                Whether you're a vegetarian, vegan, or follow a specific dietary
                plan, a good online calorie calculator can be customised to meet
                your needs.
              </p>
            </H2TitleText>
            <H2TitleText
              title={
                "The Role of Online Calorie Calculators in Weight Management"
              }
            >
              <p className="p_text">
                These tools play a crucial role in weight management by helping
                you create a caloric deficit or surplus, depending on your
                goals.
              </p>
            </H2TitleText>
            <H2TitleText title={"Calorie Counting and Exercise"}>
              <p className="p_text">
                Pairing calorie counting with regular exercise ensures a
                balanced approach to health and fitness. Many calculators
                incorporate exercise into their equations.
              </p>
            </H2TitleText>
            <H2TitleText title={"Online Calorie Calculators for Special Diets"}>
              <p className="p_text">
                For those with dietary restrictions or preferences, some online
                calorie calculators offer specialised calculations to meet your
                unique needs.
              </p>
            </H2TitleText>
            <H2TitleText
              title={"Online Calorie Calculators for Health Conditions"}
            >
              <p className="p_text">
                Certain health conditions, such as diabetes, require careful
                monitoring of caloric intake. Specialized calculators can help
                individuals manage their conditions effectively.
              </p>
            </H2TitleText>

            <h2 className="h2_Title">Tips for Effective Calorie Counting</h2>

            <div className="ml-8 mb-8">
              <div className="key">
                <h3>1. Be Accurate:</h3>
                <p> Measure your food portions carefully.</p>
              </div>
              <div className="key">
                <h3>2. Stay Consistent:</h3>
                <p>Record your intake daily.</p>
              </div>
              <div className="key">
                <h3>3. Read Food Labels:</h3>
                <p>Pay attention to nutritional information for weight loss.</p>
              </div>
            </div>

            <H2TitleText title={"Challenges and Pitfalls"}>
              <p className="p_text">
                Calorie counting can be challenging and may lead to obsessions
                or unhealthy eating habits. It's essential to strike a balance
                and focus on overall health.
              </p>

              <p className="p_text pt-3">
                In the journey to attain successful weight reduction, diverse
                tactics and nutritional plans have arisen throughout the ages.
                Among the most enduring and scientifically validated techniques
                is calorie monitoring. This piece investigates the skill and
                knowledge behind calorie monitoring as a strategy for
                accomplishing enduring weight reduction.
              </p>
            </H2TitleText>

            <H2TitleText title={"What Does Calorie Counting Entail?"}>
              <p className="p_text">
                Calorie counting is a nutritional methodology that encompasses
                the observation of your daily calorie intake. It is based on a
                fundamental concept: to shed pounds, you need to generate a
                calorie deficiency by expending more calories than you ingest.
              </p>
            </H2TitleText>

            <H2TitleText title={"The Science Behind Weight Loss"}>
              <p className="p_text">
                Shedding weight fundamentally revolves around maintaining an
                equilibrium of energy. If your calorie intake surpasses what you
                burn, your body accumulates the surplus as fat, leading to an
                increase in weight. Conversely, if your calorie consumption is
                less than what you expend, your body utilizes its stored fat for
                energy, thus causing a reduction in weight.
              </p>
            </H2TitleText>

            <H2TitleText title={"Getting Started with Calorie Counting"}>
              <div className="ml-8 mb-8">
                <div className="key">
                  <h3>1. Setting Realistic Goals</h3>
                  <p>
                    The first step in calorie counting is setting realistic
                    weight loss goals. It's important to be patient and
                    acknowledge that sustainable weight loss takes time.
                  </p>
                </div>
                <div className="key">
                  <h3>2. Identifying Daily Caloric Needs</h3>
                  <p>
                    To start calorie counting, you need to determine your daily
                    caloric needs for weight loss. This varies from person to
                    person based on factors like age, gender, activity level,
                    and metabolism.
                  </p>
                </div>
                <div className="key">
                  <h3>3. Choosing the Right Tracking Method</h3>
                  <p>
                    Select a method to track your calories, whether it's through
                    smartphone apps, food journals, or websites. Find a tool
                    that suits your preferences and lifestyle.
                  </p>
                </div>
              </div>
            </H2TitleText>

            <H2TitleText title={"The Importance of Food Quality"}>
              <div className="ml-8 mb-8">
                <div className="key">
                  <h3>1. Nutrient-Dense vs. Empty Calories</h3>
                  <p>
                    While calories matter, so does food quality. Opt for
                    nutrient-dense foods like fruits, vegetables, lean proteins,
                    and whole grains over empty-calorie options like sugary
                    snacks and processed foods.
                  </p>
                </div>
              </div>
            </H2TitleText>

            <H2TitleText title={"Creating a Calorie Budget"}>
              <div className="ml-8 mb-8">
                <div className="key">
                  <h3>1. Understanding Macronutrients</h3>
                  <p>
                    In addition to calories, focus on macronutrients -
                    carbohydrates, proteins, and fats. A balanced intake of
                    these nutrients is crucial for overall health.
                  </p>
                </div>
                <div className="key">
                  <h3>2. Meal Planning</h3>
                  <p>
                    Plan your meals ahead to ensure they align with your calorie
                    goals and nutritional needs. This can help you avoid
                    impulsive, unhealthy choices.
                  </p>
                </div>
              </div>
            </H2TitleText>

            <H2TitleText title={"Monitoring and Adjusting"}>
              <div className="ml-8 mb-8">
                <div className="key">
                  <h3>1. Keeping a Food Diary</h3>
                  <p>
                    Maintain a food diary to track what you eat and drink in a
                    whole day. This self-awareness is a powerful tool in calorie
                    counting
                  </p>
                </div>
                <div className="key">
                  <h3>2. Recognizing Plateaus</h3>
                  <p>
                    Weight loss can plateau at times. When this happens, it's
                    essential to identify potential reasons and make necessary
                    adjustments.
                  </p>
                </div>
                <div className="key">
                  <h3>3. Making Necessary Changes</h3>
                  <p>
                    Calorie counting isn't static. As your body changes and your
                    goals evolve, your calorie budget and food choices may need
                    adjustments.
                  </p>
                </div>
              </div>
            </H2TitleText>

            <H2TitleText title={"The Psychological Aspect"}>
              <div className="ml-8 mb-8">
                <div className="key">
                  <h3>1. Handling Cravings</h3>
                  <p>
                    Dealing with cravings is a common challenge. Strategies like
                    mindful eating and healthier alternatives can help overcome
                    these obstacles.
                  </p>
                </div>
                <div className="key">
                  <h3>2. Building a Healthy Relationship with Food</h3>
                  <p>
                    It's important to maintain a positive and balanced
                    relationship with food. Calorie counting should not lead to
                    obsession or unhealthy behaviours.
                  </p>
                </div>
                <div className="key">
                  <h3>3. Benefits of Calorie Counting</h3>
                  <p>
                    Hearing about the success stories of individuals who've lost
                    weight through calorie counting can be inspiring. It
                    highlights the effectiveness and sustainability of this
                    method.
                  </p>
                </div>
              </div>
            </H2TitleText>

            <H2TitleText title={"Potential Pitfalls and Challenges"}>
              <div className="ml-8 mb-8">
                <div className="key">
                  <h3>1. Overemphasis on Numbers</h3>
                  <p>
                    One potential pitfall is becoming overly fixated on the
                    numbers. Remember that the quality of calories matters just
                    as much as the quantity.
                  </p>
                </div>
                <div className="key">
                  <h3>2. Stress and Obsession</h3>
                  <p>
                    Calorie counting can sometimes lead to stress and obsession.
                    If this happens, consider consulting a healthcare
                    professional for guidance.
                  </p>
                </div>
              </div>
            </H2TitleText>

            <H2TitleText title={"Expert Opinions on Calorie Counting"}>
              <div className="ml-8 mb-8">
                <div className="key">
                  <h3>1. Dietitian and Nutritionist Perspectives</h3>
                  <p>
                    Dietitians and nutritionists often endorse calorie counting
                    when done sensibly. They emphasise the importance of
                    balanced nutrition and portion control.
                  </p>
                </div>
                <div className="key">
                  <h3>2. Fitness Trainer Insights</h3>
                  <p>
                    Fitness trainers possess the knowledge to offer advice on
                    how to merge calorie counting with physical activity for
                    optimal outcomes.
                  </p>
                </div>
              </div>
            </H2TitleText>

            <H2TitleText title={"How Many Calories Are Necessary Each Day?"}>
              <p className="p_text">
                The number of calories an individual needs each day can vary
                significantly, depending on factors like age, gender, activity
                level, and specific health conditions. As a rough estimate, an
                adult's Basal Metabolic Rate (BMR), which represents the
                calories required for basic bodily functions at rest, can range
                from approximately 1,200 to 2,400 calories per day.
              </p>

              <p className="p_text py-4">
                To calculate your Total Daily Energy Expenditure (TDEE), which
                takes into account both your BMR and physical activity, you can
                use a simple formula. For example, a typical sedentary adult
                might need around 1.2 to 1.5 times their BMR in calories to
                maintain their current weight. So, if their BMR is 1,500
                calories, their TDEE would be roughly in the range of 1,800 to
                2,250 calories per day.
              </p>

              <p className="p_text pb-4">
                For those striving for weight reduction, the usual goal is to
                establish a calorie deficit by consuming fewer calories than
                their TDEE. A common recommendation is to target a deficit of
                500 to 1,000 calories each day, resulting in a secure and
                sustainable loss of about 1 to 2 pounds weekly.
              </p>

              <p className="p_text">
                It's crucial to acknowledge that these numbers serve as general
                approximations, and individual factors can cause variances. For
                a more precise computation customized to your specific
                requirements and objectives, it's advisable to seek advice from
                a healthcare professional or a registered dietitian who can
                offer tailored guidance based on your distinct circumstances.
              </p>
            </H2TitleText>

            <h2 className="h2_Title pb-2">Calories in Some Common Foods</h2>

            <table class="border border-slate-400  common_boxshadow">
              <tbody>
                {foodData?.map((item, index) => (
                  <tr className="hover:bg-[#e2e2f0] ">
                    <td class="border border-slate-300 px-2 font-[500] text-[15px]  py-2 ...">
                      {index + 1}.
                    </td>
                    <td class="border border-slate-300 px-2 font-[500] text-[15px]  py-2 ...">
                      {item?.name}
                    </td>
                    <td class="border border-slate-300 px-2 text-[15px] py-2 ...">
                      {item?.cal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <H2TitleText title={"Common Exercises For Calories Burned"}>
              <p className="p_text">
                The number of calories an individual needs each day can vary
                significantly, depending on factors like age, gender, activity
                level, and specific health conditions. As a rough estimate, an
                adult's Basal Metabolic Rate (BMR), which represents the
                calories required for basic bodily functions at rest, can range
                from approximately 1,200 to 2,400 calories per day.
              </p>
              <div className="ml-8 mb-8">
                <div className="key">
                  <h3>Running</h3>

                  <ul className="list-disc ml-4">
                    <li>Jogging (5 mph): Approximately 314-391 calories</li>
                    <li>Running (8 mph): Approximately 861-1074 calories</li>
                    <li>Sprinting: Approximately 944-1175 calories</li>
                  </ul>
                </div>

                <div className="key">
                  <h3>Cycling</h3>

                  <ul className="list-disc ml-4">
                    <li>
                      Moderate pace (12-14 mph): Approximately 472-590 calories
                    </li>
                    <li>Biking (20 mph): Approximately 944-1175 calories</li>
                    <li>Mountain biking: Approximately 472-708 calories</li>
                  </ul>
                </div>

                <div className="key">
                  <h3>Swimming</h3>

                  <ul className="list-disc ml-4">
                    <li>Freestyle: Approximately 472-590 calories</li>
                    <li>Butterfly stroke: Approximately 590-738 calories</li>
                    <li>Treading water: Approximately 354-472 calories</li>
                  </ul>
                </div>

                <div className="key">
                  <h3>Walking</h3>

                  <ul className="list-disc ml-4">
                    <li>
                      Brisk walking (4 mph): Approximately 236-295 calories
                    </li>
                    <li>
                      Power walking (5 mph): Approximately 314-391 calories
                    </li>
                  </ul>
                </div>

                <div className="key">
                  <h3>Aerobics</h3>

                  <ul className="list-disc ml-4">
                    <li>Low-impact aerobics: Approximately 354-472 calories</li>
                    <li>
                      High-impact aerobics: Approximately 590-738 calories
                    </li>
                  </ul>
                </div>

                <div className="key">
                  <h3>Strength Training</h3>

                  <ul className="list-disc ml-4">
                    <li>Weightlifting: Approximately 236-295 calories</li>
                    <li>Circuit training: Approximately 354-472 calories</li>
                  </ul>
                </div>

                <div className="key">
                  <h3>Yoga</h3>

                  <ul className="list-disc ml-4">
                    <li>Hatha yoga: Approximately 177-236 calories</li>
                    <li>Power yoga: Approximately 295-354 calories</li>
                  </ul>
                </div>

                <div className="key">
                  <h3>Dancing</h3>

                  <ul className="list-disc ml-4">
                    <li>Ballroom dancing: Approximately 236-295 calories</li>
                    <li>Zumba: Approximately 472-590 calories</li>
                    <li>Hip-hop dancing: Approximately 472-590 calories</li>
                  </ul>
                </div>

                <div className="key">
                  <h3>Jumping Rope</h3>

                  <ul className="list-disc ml-4">
                    <li>Moderate pace: Approximately 590-738 calories</li>
                    <li>
                      High-intensity (double unders): Approximately 944-1175
                      calories
                    </li>
                  </ul>
                </div>

                <div className="key">
                  <h3>Rowing</h3>

                  <ul className="list-disc ml-4">
                    <li>Rowing machine: Approximately 472-590 calories</li>
                  </ul>
                </div>
              </div>
            </H2TitleText>

            <h2 className="h2_Title pb-2">
              Sample Meal Plans Of 2000, 1500, and 1200 Calorie
            </h2>

            <table class="border border-slate-400  common_boxshadow">
              <thead>
                <tr className="hover:bg-[#e2e2f0] ">
                  <th class="border border-slate-300 px-2  py-2 ">1200</th>
                  <th class="border border-slate-300 px-2  py-2 ">1500</th>
                  <th class="border border-slate-300 px-2 py-2 ">2000</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#e2e2f0] ">
                  <td class="border border-slate-300 px-2   py-2 ...">
                    <div className="">
                      <h3 className="font-medium mb-2">Breakfast</h3>

                      <ul className="list-disc ml-4">
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Scrambled egg whites with spinach and mushrooms.
                        </li>

                        <li className="text-[12px] sm:text-[14px] mb-2">
                          A small whole-grain roll.
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td class="border border-slate-300 px-2   py-2 ...">
                    <div className="">
                      <h3 className="font-medium mb-2">Breakfast</h3>

                      <ul className="list-disc ml-4">
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Eat Oatmeal with sliced bananas and a sprinkle of
                          nuts.
                        </li>

                        <li className="text-[12px] sm:text-[14px] mb-2">
                          A glass of low-fat milk or a dairy-free alternative
                          like paneer etc.
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td class="border border-slate-300 px-2  py-2 ...">
                    <div className="">
                      <h3 className="font-medium mb-2">Breakfast</h3>

                      <ul className="list-disc ml-4">
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Scrambled eggs with spinach and tomatoes.
                        </li>

                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Whole-grain toast.
                        </li>
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          A serving of Greek yogurt with berries.
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-[#e2e2f0] ">
                  <td class="border border-slate-300 px-2    py-2 ...">
                    <div className="">
                      <h3 className="font-medium mb-2">Lunch</h3>

                      <ul className="list-disc ml-4">
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Tuna salad with mixed greens or whole-grain crackers.
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td class="border border-slate-300 px-2     py-2 ...">
                    <div className="">
                      <h3 className="font-medium mb-2">Lunch</h3>

                      <ul className="list-disc ml-4">
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Turkey and avocado wrap with whole-grain tortilla.
                        </li>

                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Mixed greens salad.
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td class="border border-slate-300 px-2  py-2 ...">
                    <div className="">
                      <h3 className="font-medium mb-2">Lunch</h3>

                      <ul className="list-disc ml-4">
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Eat Grilled chicken breast salad with mixed greens,
                          cucumbers, and a vinaigrette dressing.
                        </li>

                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Quinoa or brown rice.
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-[#e2e2f0] ">
                  <td class="border border-slate-300 px-2    py-2 ...">
                    <div className="">
                      <h3 className="font-medium mb-2">Snack</h3>

                      <ul className="list-disc ml-4">
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Sliced cucumbers and cherry tomatoes.
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td class="border border-slate-300 px-2     py-2 ...">
                    <div className="">
                      <h3 className="font-medium mb-2">Snack</h3>

                      <ul className="list-disc ml-4">
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          A piece of fruit (apple, orange, or berries).
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td class="border border-slate-300 px-2  py-2 ...">
                    <div className="">
                      <h3 className="font-medium mb-2">Snack</h3>

                      <ul className="list-disc ml-4">
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Carrot and celery sticks with hummus.
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-[#e2e2f0] ">
                  <td class="border border-slate-300 px-2    py-2 ...">
                    <div className="">
                      <h3 className="font-medium mb-2">Dinner</h3>

                      <ul className="list-disc ml-4">
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Baked or grilled chicken breast.
                        </li>
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Steamed green beans.
                        </li>
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          A small portion of quinoa.
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td class="border border-slate-300 px-2     py-2 ...">
                    <div className="">
                      <h3 className="font-medium mb-2">Dinner</h3>

                      <ul className="list-disc ml-4">
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Grilled shrimp with a side of roasted vegetables
                          (zucchini, bell peppers, and asparagus).
                        </li>
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Quinoa or brown rice.
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td class="border border-slate-300 px-2  py-2 ...">
                    <div className="">
                      <h3 className="font-medium mb-2">Dinner</h3>

                      <ul className="list-disc ml-4">
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Baked salmon with a lemon dill sauce.
                        </li>
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Steamed broccoli.
                        </li>
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Mashed sweet potatoes.
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-[#e2e2f0] ">
                  <td class="border border-slate-300 px-2    py-2 ...">
                    <div className="">
                      <h3 className="font-medium mb-2">Snack</h3>

                      <ul className="list-disc ml-4">
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          A piece of fruit (e.g., a small apple or a cup of
                          berries).
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td class="border border-slate-300 px-2     py-2 ...">
                    <div className="">
                      <h3 className="font-medium mb-2">Snack</h3>

                      <ul className="list-disc ml-4">
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          Greek yogurt or a small serving of cottage cheese.
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td class="border border-slate-300 px-2  py-2 ...">
                    <div className="">
                      <h3 className="font-medium mb-2">Snack</h3>

                      <ul className="list-disc ml-4">
                        <li className="text-[12px] sm:text-[14px] mb-2">
                          A small handful of almonds.
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className="h2_Title pt-8 pb-2">FAQs</h2>

            {faqs?.map((item) => (
              <div className="mb-5">
                <h4 className="font-[600] text-[18px] mb-1">{item?.q}</h4>
                <p className="ml-4">{item?.ans}</p>
              </div>
            ))}
          </>
        }
      />
    </div>
  );
};

export default Index;
