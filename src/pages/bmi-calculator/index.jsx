import {
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
import TitleAndComponent from "@/components/common/TitleAndComponent";
import TwoButtonTab from "@/components/common/TwoButtonTab";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";

const table1 = [
  { bmi: "Less than 5th", inte: "Underweight" },
  { bmi: "5th to less than 85th", inte: "Normal Weight" },
  { bmi: "85th to less than 95th", inte: "Overweight" },
  { bmi: "95th or greater", inte: "Obesity" },
];

export default function index() {
  const [unitSystem, setUnitSystem] = useState("metric");
  const [age, setAge] = useState(22);
  const [height, setHeight] = useState(152);
  const [weight, setWeight] = useState(55);
  const [bmi, setBmi] = useState(null);
  console.log("bmi: ", bmi);
  const [heightFeet, setHeightFeet] = useState(5);
  const [heightInches, setHeightInches] = useState(8);
  const [gender, setGender] = useState("male");
  const [showAns, setShowAns] = useState(false);

  const handleUnitSystemChange = (newUnitSystem) => {
    setUnitSystem(newUnitSystem);

    setShowAns(false);

    if (newUnitSystem === "us") {
      setWeight(convertWeightToPounds(weight).toFixed());
    }

    if (newUnitSystem === "metric") {
      setWeight(convertWeightToKg(weight).toFixed());
    }
  };

  const calculateBMI = () => {
    if (
      !weight ||
      (unitSystem === "metric" && !height) ||
      (unitSystem === "us" && !heightFeet && !!heightInches) ||
      !age
    ) {
      toast.error("Please fill in all required fields.");
      setShowAns(false);
      return;
    }
    if (unitSystem === "metric") {
      const heightMeters = height / 100;
      const bmiValue = weight / (heightMeters * heightMeters);
      setBmi(bmiValue);
    } else if (unitSystem === "us") {
      const heightInchesTotal = Number(heightFeet) * 12 + Number(heightInches);
      const bmiValue = (weight / heightInchesTotal ** 2) * 703;
      setBmi(bmiValue);
    }
    setShowAns(true);
    scrollToPosition(700);
  };

  useEffect(() => {
    if (showAns) {
      scrollToPosition(700);
    }
  }, [showAns]);

  const category = useMemo(() => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else if (bmi > 30) {
      return "Obesity";
    } else {
      return "Normal weight";
    }
  }, [bmi]);

  return (
    <div className="bg-[#F8F8F8] pb-[100px]">
      <Head>
        <title>BMI Calculator</title>
        <meta
          name="description"
          content="Unlock Your Dream Body! 🌟 Try Our Calorie Calculator Now for Rapid Results. 🏋️‍♀️ Get Fit Fast! 🔥"
        />
      </Head>
      <CalTitleBanner title={"BMI Calculator"} />

      <Layout
        box2={"fitness"}
        box1={
          <>
            <p className="py-[50px] text-[17px]">
              A BMI (Body Mass Index) calculator is a simple tool used to assess
              a person's body weight in relation to their height. It's a
              numerical value that provides a rough estimate of whether an
              individual's weight falls within a healthy range for their height.
            </p>

            <FormBox title={"BMI Calculator"}>
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
                    <TitleAndComponent title="Height(inches)">
                      <CommonInput
                        value={heightInches}
                        setValue={setHeightInches}
                      />
                    </TitleAndComponent>
                  </div>
                )}

                <TitleAndComponent
                  title={
                    unitSystem === "metric" ? "Weight (kg)" : "Weight (pounds)"
                  }
                >
                  <CommonInput value={weight} setValue={setWeight} />
                </TitleAndComponent>
              </div>

              <div className="flex justify-between pt-[20px] pb-[20px] text-[18px]">
                <CalculateButton onClick={calculateBMI}>
                  Calculate
                </CalculateButton>

                <CancleButton
                  onClick={() => {
                    setUnitSystem("metric");
                    setHeight(152);
                    setGender("male");
                    setHeightFeet(5.8);
                    setWeight(55);
                    setShowAns(false);
                    setAge(22);
                  }}
                >
                  RESET
                </CancleButton>
              </div>
            </FormBox>

            <AnswareBox showAns={showAns}>
              <p className="text-[25px] font-semibold text-center">
                BMI = {bmi?.toFixed(1)}{" "}
                <span className="text-[18px] text-[grey]">
                  kg/m<sup>2</sup>
                </span>{" "}
                <span
                  className={`text-[18px] ml-4 ${
                    category === "Normal weight" ? "text-[green]" : "text-[red]"
                  }`}
                >{`(${category})`}</span>
              </p>

              <div className="  pt-4 my-2">
                <p className="text-[18px] w-[100%] font-semibold mb-2">
                  BMI Categories:
                </p>
                <p className="text-[17px] ">{"Underweight = <18.5"}</p>
                <p className="text-[17px] ">{"Normal weight = 18.5 – 24.9"}</p>
                <p className="text-[17px] ">{"Overweight = 25 – 29.9"}</p>
                <p className="text-[17px] ">
                  {"Obesity = BMI of 30 or greater"}
                </p>
              </div>
            </AnswareBox>

            <div className="key pt-5">
              <ul className="list-disc ml-4">
                <li>Healthy BMI range Is: 18.5 kg/m2 - 25 kg/m2</li>
                <li> BMI Prime: 0.92</li>
                <li>Ponderal Index: 12.9 kg/m3</li>
                <li>Healthy weight for the height: 128.9 lbs - 174.2 lbs</li>
              </ul>
            </div>

            <H2TitleText title={"The BMI formula is as follows:"}>
              <div className="ml-8 mb-8">
                <div className="key">
                  <h3>
                    BMI = weight (in kilograms) / (height (in meters) * height
                    (in meters))
                  </h3>
                  <p className="mb-4">
                    The result of this calculation is a numerical value, and
                    it's typically categorized into several ranges, such as:
                  </p>

                  <ul className="list-disc ml-4">
                    <li>Underweight: BMI less than 18.5</li>
                    <li>Normal weight: BMI between 18.5 and 24.9</li>
                    <li>Overweight: BMI between 25 and 29.9</li>
                    <li>Obesity: BMI 30 or greater</li>
                  </ul>
                </div>

                <p className="p_text mt-5">
                  Keep in mind that while BMI can be a useful screening tool for
                  assessing general body weight, it doesn't take into account
                  other factors like muscle mass, body composition, or
                  distribution of weight, which can also be important for
                  overall health. Therefore, it's always best to consult with a
                  healthcare professional for a comprehensive assessment of your
                  health and fitness.
                </p>
              </div>
            </H2TitleText>

            <H2TitleText title={"BMI Table for Different Ages"}>
              <p className="p_text">
                BMI, or Body Mass Index, is typically calculated and interpreted
                the same way for individuals of different ages. The BMI
                categories (underweight, normal weight, overweight, and obesity)
                are generally consistent for adults and children. However, there
                are specific BMI-for-age charts and percentiles used for
                children and adolescents, as their growth patterns change with
                age.
              </p>

              <p className="p_text my-4">
                For children and teenagers, the BMI is compared to age and
                sex-specific percentiles on growth charts. These growth charts
                are provided by organisations like the Centers for Disease
                Control and Prevention (CDC) in the United States. These charts
                are used to determine whether a child or adolescent BMI falls
                within a healthy range for their age and sex.
              </p>

              <p className="p_text pb-4">
                These BMI-for-age percentiles are typically categorised as:
              </p>

              <div className="ml-8 mb-8">
                <div className="key">
                  <ul className="list-disc ml-4">
                    <li>
                      BMI Percentile Of Underweight: Less than the 5th
                      percentile
                    </li>
                    <li>
                      BMI Percentile Of Normal weight: 5th percentile to less
                      than the 85th percentile
                    </li>
                    <li>
                      BMI Percentile Of Overweight: 85th percentile to less than
                      the 95th percentile
                    </li>
                    <li>
                      BMI Percentile Of Obesity: Equal to or greater than the
                      95th percentile
                    </li>
                  </ul>
                </div>
              </div>
            </H2TitleText>

            <table class="border border-slate-400  common_boxshadow w-full">
              <thead>
                <tr className="hover:bg-[#e2e2f0]">
                  <th class="border border-slate-300 text-left px-4  py-2 ">
                    BMI Percentile
                  </th>
                  <th class="border border-slate-300 px-4 text-left  py-2 ">
                    Interpretation
                  </th>
                </tr>
              </thead>

              <tbody>
                {table1?.map((item, index) => (
                  <tr className="hover:bg-[#e2e2f0] p-3">
                    <td class="border border-slate-300 px-4 font-[500] text-[15px]  py-2">
                      {item?.bmi}
                    </td>
                    <td class="border border-slate-300 px-4 text-[15px] py-2">
                      {item?.inte}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="p_text my-5">
              The exact growth charts and percentiles used can vary by country
              and organisation. To assess BMI for children and adolescents
              accurately, it's essential to use the appropriate age and
              sex-specific charts relevant to your region. Healthcare
              professionals, such as paediatricians, use these charts to monitor
              a child's growth and overall health.
            </p>

            <H2TitleText
              title={"Risks Associated with Being Overweight And Underweight"}
            >
              <p className="p_text">
                Both being overweight and underweight come with their own set of
                health risks. Here are some of the risks associated with
                overweight and underweight:
              </p>
            </H2TitleText>

            <H2TitleText title={"Risks of Being Overweight:"}>
              <div className="ml-8 mb-8">
                <div className="key">
                  <h3>Obesity-Related Health Conditions:</h3>
                  <p className="mb-4">
                    Being overweight significantly increases the risk of
                    developing various obesity-related health conditions,
                    including:
                  </p>
                  <ul className="list-disc ml-4">
                    <li>Type 2 diabetes</li>
                    <li>Heart disease</li>
                    <li>High blood pressure (hypertension)</li>
                    <li>Stroke</li>
                    <li>Certain types of cancer (e.g., breast, colon)</li>
                    <li>Sleep apnea</li>
                  </ul>
                </div>

                <div className="key">
                  <h3>Joint Problems:</h3>

                  <p className="mb-4">
                    Over weight can strain the joints, leading to conditions
                    like osteoarthritis and Feel pain.
                  </p>
                </div>

                <div className="key">
                  <h3>Metabolic Syndrome:</h3>

                  <p className="mb-4">
                    Overweight individuals are more likely to develop metabolic
                    syndrome, a cluster of conditions that increase the risk of
                    heart disease, stroke, and type 2 diabetes.
                  </p>
                </div>
                <div className="key">
                  <h3>Mental Health Issues:</h3>

                  <p className="mb-4">
                    Obesity is associated with an increased risk of depression
                    and low self-esteem.
                  </p>
                </div>
                <div className="key">
                  <h3>Fatty Liver Disease:</h3>

                  <p className="mb-4">
                    Non-alcoholic fatty liver disease (NAFLD) is more common in
                    overweight persons.
                  </p>
                </div>
              </div>
            </H2TitleText>

            <H2TitleText title={"Risks of Being Underweight:"}>
              <div className="ml-8 mb-8">
                <div className="key">
                  <h3>Nutritional Deficiencies:</h3>
                  <p className="mb-4">
                    Underweight individuals may not be getting adequate
                    nutrients, leading to deficiencies in essential vitamins and
                    minerals, such as iron, calcium, and vitamin D.
                  </p>
                </div>

                <div className="key">
                  <h3>Weak Immune System:</h3>

                  <p className="mb-4">
                    Malnutrition due to being underweight can weak the immune
                    system, making the body more susceptible to infections.
                  </p>
                </div>

                <div className="key">
                  <h3>Muscle Atrophy:</h3>

                  <p className="mb-4">
                    When you don't eat enough nutritious food, your muscles can
                    start to shrink, and your physical strength can decrease.
                  </p>
                </div>
                <div className="key">
                  <h3>Osteoporosis:</h3>

                  <p className="mb-4">
                    Insufficient calcium and vitamin D intake can result in
                    weakened bones, increasing the risk of fractures and
                    osteoporosis.
                  </p>
                </div>
                <div className="key">
                  <h3>Menstrual Irregularities:</h3>

                  <p className="mb-4">
                    In females, being underweight can lead to irregular or
                    absent menstrual periods, known as amenorrhea.
                  </p>
                </div>
                <div className="key">
                  <h3>Fertility Issues:</h3>

                  <p className="mb-4">
                    Underweight women may face difficulties in becoming pregnant
                    due to hormonal imbalances.
                  </p>
                </div>
                <div className="key">
                  <h3>Mental Health Concerns:</h3>

                  <p className="mb-4">
                    Being underweight can increase the risk of mental health
                    problems like anxiety and depression.
                  </p>
                </div>
              </div>
            </H2TitleText>

            <p className="p_text my-5">
              However, a person's overall health is influenced by more than just
              their weight. Factors like diet, exercise, genetics, and lifestyle
              choices also play a big role in health. To be healthy, it's
              important to eat well, stay active, and see a doctor when needed.
            </p>

            <H2TitleText
              title={"How Good is BMI as an Indicator of Body Fatness?"}
            >
              <p className="p_text">
                BMI, or Body Mass Index, is a way to see if you're a healthy
                weight for your height. It's useful when studying lots of people
                together, but it's not perfect. It doesn't think about muscles
                or where you carry your fat. So, while BMI can give a rough idea
                of body fat for most people, it's not great for everyone.
              </p>
            </H2TitleText>

            <H2TitleText title={"Strengths of BMI:"}>
              <div className="ml-8 mb-8">
                <div className="key">
                  <h3>Simplicity:</h3>
                  <p className="mb-4">
                    BMI is easy to calculate using only height and weight
                    measurements, making it a quick and cost-effective tool for
                    assessing body weight.
                  </p>
                </div>

                <div className="key">
                  <h3>Population-Level Trends:</h3>

                  <p className="mb-4">
                    BMI is valuable for analysing and comparing body weight
                    trends within populations and across different groups. It's
                    particularly useful for public health studies and
                    epidemiological research.
                  </p>
                </div>

                <div className="key">
                  <h3>Risk Assessment:</h3>

                  <p className="mb-4">
                    BMI can provide a general idea of an individual's risk for
                    certain health conditions associated with weight, such as
                    heart disease, type 2 diabetes, and hypertension.
                  </p>
                </div>
              </div>
            </H2TitleText>

            <H2TitleText title={"Weaknesses of BMI:"}>
              <div className="ml-8 mb-8">
                <div className="key">
                  <h3>Lack of Precision:</h3>
                  <p className="mb-4">
                    BMI does not differentiate between lean body mass (muscle,
                    bone, organs) and fat mass. Consequently, two individuals
                    with the same BMI can have vastly different body
                    compositions.
                  </p>
                </div>

                <div className="key">
                  <h3>Muscle vs. Fat:</h3>

                  <p className="mb-4">
                    Athletes and individuals with high muscle mass may be
                    categorized as overweight or obese by BMI, even though they
                    have a low percentage of body fat. Conversely, older adults
                    may be classified as normal weight by BMI but have a higher
                    percentage of body fat.
                  </p>
                </div>

                <div className="key">
                  <h3>Age and Gender:</h3>

                  <p className="mb-4">
                    BMI does not account for age or gender differences. It may
                    not be as accurate for older adults or women, as these
                    groups can have different body compositions.
                  </p>
                </div>

                <div className="key">
                  <h3>Ethnic and Racial Differences:</h3>

                  <p className="mb-4">
                    BMI may not equally apply to all ethnic and racial groups,
                    as it doesn't consider variations in body composition among
                    different populations.
                  </p>
                </div>

                <div className="key">
                  <h3>Central Fat Distribution:</h3>

                  <p className="mb-4">
                    BMI does not account for where fat is distributed in the
                    body. Central obesity (fat around the abdomen) is a
                    significant risk factor for certain health conditions, and
                    BMI does not provide this information.
                  </p>
                </div>
                <div className="key">
                  <h3>Doesn't Consider Overall Health:</h3>

                  <p className="mb-4">
                    BMI alone does not consider factors like diet, physical
                    activity, or overall health. Two people with the same BMI
                    may have different health profiles.
                  </p>
                </div>

                <div className="key">
                  <h3>Not Suitable for Children:</h3>

                  <p className="mb-4">
                    While BMI is commonly used for adults, it's less appropriate
                    for assessing body fatness in children and adolescents, as
                    it doesn't account for growth and development.
                  </p>
                </div>
              </div>
            </H2TitleText>

            <p className="p_text my-5">
              In summary, while BMI can provide a rough estimate of body fatness
              and is valuable for population-level assessments, it should not be
              the sole determinant of an individual's health. For a more
              accurate evaluation of body fat and overall health, healthcare
              professionals often use additional measurements and assessments,
              such as waist circumference, body composition analysis, and a
              comprehensive medical history.
            </p>

            <H2TitleText title={"BMI formula"}>
              <div className="key">
                <h3>
                  BMI = weight (in kilograms) / (height (in meters) * height (in
                  meters)
                </h3>
                <p className="mb-4">
                  Suppose you weigh{" "}
                  <span className="font-semibold">70 kilograms (kg)</span> and
                  your height is{" "}
                  <span className="font-semibold"> 1.75 meters (m).</span>
                </p>
              </div>

              <div className="ml-8 mb-8">
                <div className="key">
                  <ul className="list-disc ml-4">
                    <li>
                      Measure your weight: Your{" "}
                      <span className="font-semibold"> weight is 70 kg.</span>
                    </li>
                    <li>
                      Measure your height: Your{" "}
                      <span className="font-semibold"> height is 1.75 m.</span>
                    </li>
                    <li>
                      Square your height: Square your height by multiplying it
                      by itself:{" "}
                      <span className="font-semibold">
                        1.75 m * 1.75 m = 3.0625 m².
                      </span>
                    </li>
                    <li>
                      Calculate BMI: Divide your weight (70 kg) by the squared
                      height{" "}
                      <span className="font-semibold">
                        {" "}
                        (3.0625 m²). BMI = 70 kg / 3.0625 m² = 22.86
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="p_text mt-3 font-semibold">
                So, your BMI is approximately 22.86.
              </p>

              <p className="p_text mt-3">
                Now, you can interpret your BMI. In this case, a{" "}
                <span className="font-semibold"> BMI of 22.86 </span>falls
                within the "Normal weight" category because it's between{" "}
                <span className="font-semibold"> 18.5 and 24.9.</span>
              </p>

              <p className="p_text my-5">
                BMI Prime, or simply BMI' (pronounced "BMI prime"), is a
                modified version of the traditional BMI (Body Mass Index) that
                provides a normalised index for better interpretation. BMI Prime
                is designed to make it easier to understand how an individual's
                BMI relates to the healthy weight range.
              </p>
            </H2TitleText>

            <H2TitleText title={"BMI Prime"}>
              <div className="key">
                <p>
                  The formula for calculating BMI Prime is as follows as under:
                </p>
                <p className="font-semibold my-4">BMI' = BMI / 25</p>
                <p className="mb-4">
                  In this formula, you calculate your regular BMI using the
                  standard formula (weight in kilograms divided by height in
                  meters squared), and then you divide that BMI by
                  <span className="font-semibold"> 25.</span>
                </p>
              </div>

              <p className="text-[17px]">
                The result is a dimensionless number where:
              </p>

              <div className="ml-8 mb-8">
                <div className="key">
                  <ul className="list-disc ml-4">
                    <li>
                      BMI' = <span className="font-semibold"> 1.0 </span>
                      indicates that your BMI is exactly at the{" "}
                      <span className="font-semibold">
                        upper limit of the healthy
                      </span>{" "}
                      weight range.
                    </li>
                    <li>
                      BMI' greater than{" "}
                      <span className="font-semibold"> 1.0 </span> suggests that
                      your BMI is in the{" "}
                      <span className="font-semibold"> overweight </span> or
                      obese range.
                    </li>
                    <li>
                      BMI' less than{" "}
                      <span className="font-semibold"> 1.0 </span> suggests that
                      your BMI is in the{" "}
                      <span className="font-semibold">underweight</span> range.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="p_text mt-3 font-semibold">Here's an example:</p>

              <div className="key">
                <p>
                  Let's say your BMI is{" "}
                  <span className="font-semibold">30</span>, indicating obesity.
                  To calculate your BMI Prime:
                </p>
                <p className="font-semibold my-4">BMI' = 30 (BMI) / 25 = 1.2</p>
              </div>

              <p className="p_text mt-3">
                In this case, a BMI Prime of{" "}
                <span className="font-semibold"> 1.2 </span> suggests that your
                BMI is <span className="font-semibold"> 1.2 </span> times the
                upper limit of the healthy weight range.
              </p>

              <p className="p_text my-5">
                BMI Prime can be a helpful tool for individuals and healthcare
                professionals to easily interpret where a person's BMI falls in
                relation to the healthy weight range, as it provides a clear
                reference point of <span className="font-semibold"> 1.0 </span>{" "}
                for the upper limit of healthy weight.
              </p>
            </H2TitleText>
          </>
        }
      />
    </div>
  );
}
