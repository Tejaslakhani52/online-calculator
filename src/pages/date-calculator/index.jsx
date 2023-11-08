import CalTitleBanner from "@/components/common/CalTitleBanner";
import CalculateButton from "@/components/common/CalculateButton";
import CommonInput from "@/components/common/CommonInput";
import FormBox from "@/components/common/FormBox";
import Layout from "@/components/common/Layout";
import TitleAndComponent from "@/components/common/TitleAndComponent";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import {
  add,
  differenceInCalendarDays,
  differenceInCalendarMonths,
  differenceInWeeks,
  format,
  isWeekend,
  sub,
} from "date-fns";
import AnswareBox from "@/components/common/AnswareBox";
import { scrollToPosition } from "@/commonFunction";
import SelectMenu from "@/components/common/SelectMenu";
import { toast } from "react-hot-toast";
import H2TitleText from "@/components/common/H2TitleText";

export default function index() {
  const [startDate, setStartDate] = useState({
    year: "2000",
    month: "11",
    day: "4",
  });

  const [endDate, setEndDate] = useState({
    sYear: "",
    sMonth: "",
    sDay: "",
  });
  console.log("endDate: ", endDate);

  const [includeEndDay, setIncludeEndDay] = useState(false);

  const [showAns, setShowAns] = useState(false);

  const [wrong, setWrong] = useState(false);

  useEffect(() => {
    if (showAns) {
      scrollToPosition(500);
    }
  }, [showAns]);

  const [result1, setResult1] = useState({
    diff_between: "",
    diff_year: "",
    diff_month: "",
    diff_weeks: "",
    diff_calendar: "",
    weekend_days: "",
  });

  const calculateDifference = () => {
    if (startDate?.month > 12 || endDate?.sMonth > 12) {
      toast.error("Enter months from 1 to 12");
      setWrong("Enter months from 1 to 12");
    } else if (startDate?.day > 31 || endDate?.sDay > 31) {
      toast.error("Enter days from 1 to 31");
      setWrong("Enter days from 1 to 31");
    } else if ((startDate?.year).length != 4 || (endDate?.sYear).length != 4) {
      toast.error("Enter years using 4 digits");
      setWrong("Enter years using 4 digits");
    } else setWrong("");
    const start = new Date(startDate.year, startDate.month - 1, startDate.day);
    const end = new Date(endDate.sYear, endDate.sMonth - 1, endDate.sDay);

    const calendarDays = differenceInCalendarDays(end, start);
    const calendarMonths = differenceInCalendarMonths(end, start);
    const weeks = differenceInWeeks(end, start);
    let yearsDiff = end.getFullYear() - start.getFullYear();
    let monthsDiff = end.getMonth() - start.getMonth();
    let daysDiff = end.getDate() - start.getDate();

    if (daysDiff < 0) {
      monthsDiff--;
      const lastMonthEndDate = new Date(end.getFullYear(), end.getMonth(), 0);
      daysDiff += lastMonthEndDate.getDate();
    }
    if (monthsDiff < 0) {
      yearsDiff--;
      monthsDiff += 12;
    }

    const weekendDays = [];

    for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
      if (isWeekend(date)) {
        weekendDays.push(date);
      }
    }

    setResult1({
      diff_between: `Difference between ${startDate.month}/${startDate.day}/${
        startDate.year
      } and ${endDate.sMonth}/${endDate.sDay}/${endDate.sYear} ${
        includeEndDay ? "(including both days)" : ""
      }:`,
      diff_year: `${yearsDiff} years ${monthsDiff} months ${daysDiff} days`,
      diff_month: `${calendarMonths} months ${calendarDays % 30} days`,
      diff_weeks: `${weeks} weeks ${
        (calendarDays % 7) + (includeEndDay ? 1 : 0)
      } days`,
      diff_calendar: `${calendarDays + (includeEndDay ? 1 : 0)} calendar days`,
      weekend_days: `Weekend Days: ${weekendDays.length}`,
    });
    scrollToPosition(500);
    setShowAns(true);
  };

  // Subtract  *********************************************************************************************************

  const [subtractStartDate, setSubtractStartDate] = useState({
    year: "",
    month: "",
    day: "",
  });

  const [operation, setOperation] = useState("add");
  const [yearsToAdd, setYearsToAdd] = useState(0);
  const [monthsToAdd, setMonthsToAdd] = useState(0);
  const [weeksToAdd, setWeeksToAdd] = useState(0);
  const [daysToAdd, setDaysToAdd] = useState(0);

  const [addDateResult, setAddDateResult] = useState("");
  console.log("addDateResult: ", addDateResult);

  const [showAns2, setShowAns2] = useState(false);

  const [wrong2, setWrong2] = useState(false);

  useEffect(() => {
    if (showAns2) {
      if (showAns) {
        scrollToPosition(1000);
      } else scrollToPosition(800);
    }
  }, [showAns2]);

  useEffect(() => {
    const today = new Date();
    const sYear = today.getFullYear();
    const sMonth = (today.getMonth() + 1).toString().padStart(2, "0");
    const sDay = today.getDate().toString().padStart(2, "0");
    setEndDate({ sYear: `${sYear}`, sMonth, sDay });
    setSubtractStartDate({ year: `${sYear}`, month: sMonth, day: sDay });
  }, []);

  const calculateNewDate = () => {
    if (subtractStartDate?.month > 12) {
      toast.error("Enter months from 1 to 12");
      setWrong2("Enter months from 1 to 12");
    } else if (subtractStartDate?.day > 31) {
      toast.error("Enter days from 1 to 31");
      setWrong2("Enter days from 1 to 31");
    } else if ((subtractStartDate?.year).length != 4) {
      toast.error("Enter years using 4 digits");
      setWrong2("Enter years using 4 digits");
    } else setWrong2("");
    const start = new Date(
      subtractStartDate.year,
      subtractStartDate.month - 1,
      subtractStartDate.day
    );

    let resultDate;

    if (operation === "add") {
      resultDate = add(start, {
        years: yearsToAdd,
        months: monthsToAdd,
        weeks: weeksToAdd,
        days: daysToAdd,
      });
    } else {
      resultDate = sub(start, {
        years: yearsToAdd,
        months: monthsToAdd,
        weeks: weeksToAdd,
        days: daysToAdd,
      });
    }

    console.log(`Result Date: ${format(resultDate, "MM/dd/yyyy")}`);

    const formattedResult = format(resultDate, "MMM dd, yyyy, EEEE");
    console.log("formattedResult: ", formattedResult);

    setAddDateResult(
      `${format(resultDate, "MM/dd/yyyy")} (${formattedResult})`
    );

    setShowAns2(true);

    if (showAns) {
      scrollToPosition(1000);
    } else scrollToPosition(800);
  };

  return (
    <div>
      <Head>
        <title>Date to Date Calculator: Simplify Date Calculations</title>
        <meta
          name="description"
          content="Discover Date Calculator Magic! Calculate Dates Effortlessly 📅 | Must-Have Tool for Planning"
        />
      </Head>
      <CalTitleBanner
        title={"Date to Date Calculator: Simplify Date Calculations"}
      />

      <Layout
        box1={
          <>
            <p className="py-[30px] text-[17px]">
              Date calculations are an essential part of our daily lives.
              Whether you're planning an event, tracking financial transactions,
              or simply figuring out how many days are left until your vacation,
              date calculations play a crucial role. In this article, we'll
              delve into the world of date calculators and explore how they
              simplify various aspects of our lives.
            </p>
            <div className="w-[100%] sm:w-[70%] mx-auto">
              <FormBox title={"Days Between Two Dates"}>
                <div className="flex items-center gap-4">
                  <p className="whitespace-nowrap text-[15px] sm:text-[17px] font-medium mt-3">
                    Start Date
                  </p>
                  <div className="flex items-end gap-2">
                    <TitleAndComponent title="Month">
                      <CommonInput
                        value={startDate.month}
                        setValue={(value) =>
                          setStartDate({ ...startDate, month: value })
                        }
                      />
                    </TitleAndComponent>
                    <TitleAndComponent title="Day">
                      <CommonInput
                        value={startDate.day}
                        setValue={(value) =>
                          setStartDate({ ...startDate, day: value })
                        }
                      />
                    </TitleAndComponent>

                    <TitleAndComponent title="Year">
                      <div className="min-w-[80px]">
                        <CommonInput
                          value={startDate.year}
                          setValue={(value) =>
                            setStartDate({ ...startDate, year: value })
                          }
                        />
                      </div>
                    </TitleAndComponent>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <p className="whitespace-nowrap font-medium text-[15px] sm:text-[17px]">
                    End Date
                  </p>
                  <div className="flex items-end gap-2">
                    <TitleAndComponent title="Month">
                      <CommonInput
                        value={endDate.sMonth}
                        setValue={(value) =>
                          setEndDate({ ...endDate, sMonth: value })
                        }
                      />
                    </TitleAndComponent>
                    <TitleAndComponent title="Day">
                      <CommonInput
                        value={endDate.sDay}
                        setValue={(value) =>
                          setEndDate({ ...endDate, sDay: value })
                        }
                      />
                    </TitleAndComponent>

                    <TitleAndComponent title="Year">
                      <div className="min-w-[80px]">
                        <CommonInput
                          value={endDate.sYear}
                          setValue={(value) =>
                            setEndDate({ ...endDate, sYear: value })
                          }
                        />
                      </div>
                    </TitleAndComponent>
                  </div>
                </div>

                <div className="flex gap-2 ml-[85px]">
                  <input
                    type="checkbox"
                    checked={includeEndDay}
                    onChange={() => setIncludeEndDay(!includeEndDay)}
                    className="w-[18px] cursor-pointer"
                  />
                  <h3 className="text-[#6D6D6D] font-medium text-[15px] sm:text-[16px] whitespace-wrap">
                    Include end day (add 1 day)
                  </h3>
                </div>

                <div className="flex justify-center pt-[20px] text-[18px] pb-[20px]">
                  <CalculateButton onClick={calculateDifference}>
                    Calculate
                  </CalculateButton>
                </div>
              </FormBox>
            </div>
            <AnswareBox showAns={showAns}>
              {wrong !== "" ? (
                <div className="bg-[#FFE9E9] flex items-center gap-5 py-[20px] px-[20px] mb-5">
                  <img src="./images/warning.png" alt="" className="w-[40px]" />
                  <p className="text-[#F00]">{wrong}</p>
                </div>
              ) : (
                <div>
                  <div className="mb-4">
                    <p className="text-[18px] font-semibold">
                      {result1?.diff_between}
                    </p>

                    <p className="text-[19px] font-medium mt-2">
                      = {result1?.diff_year}
                    </p>

                    <p className="text-[19px] font-medium  ">
                      = {result1?.diff_month}
                    </p>

                    <p className="text-[19px] font-medium  ">
                      = {result1?.diff_weeks}
                    </p>

                    <p className="text-[19px] font-medium  ">
                      = {result1?.diff_calendar}
                    </p>

                    <p className="text-[19px] font-semibold mt-3">
                      {result1?.weekend_days}
                    </p>
                  </div>
                </div>
              )}
            </AnswareBox>

            {/* ******************SubtractS***************************************************************** */}

            <div className="w-[100%] mx-auto mt-5">
              <FormBox title={"Add to or Subtract from a Date"}>
                <div className="flex items-center gap-4">
                  <p className="whitespace-nowrap text-[15px] sm:text-[17px] font-medium mt-3">
                    Start Date
                  </p>
                  <div className="flex items-end gap-2">
                    <TitleAndComponent title="Month">
                      <CommonInput
                        value={subtractStartDate.month}
                        setValue={(value) =>
                          setSubtractStartDate({
                            ...subtractStartDate,
                            month: value,
                          })
                        }
                      />
                    </TitleAndComponent>
                    <TitleAndComponent title="Day">
                      <CommonInput
                        value={subtractStartDate.day}
                        setValue={(value) =>
                          setSubtractStartDate({
                            ...subtractStartDate,
                            day: value,
                          })
                        }
                      />
                    </TitleAndComponent>

                    <TitleAndComponent title="Year">
                      <div className="min-w-[80px]">
                        <CommonInput
                          value={subtractStartDate.year}
                          setValue={(value) =>
                            setSubtractStartDate({
                              ...subtractStartDate,
                              year: value,
                            })
                          }
                        />
                      </div>
                    </TitleAndComponent>
                  </div>
                </div>

                <div className="flex items-end gap-4 flex-col sm:flex-row ">
                  <div className="w-[50%]">
                    <TitleAndComponent title="">
                      <SelectMenu
                        value={operation}
                        setValue={setOperation}
                        data={[
                          { name: "(+) Add", value: "add" },
                          { name: "(-) Subtract", value: "subtract" },
                        ]}
                      />
                    </TitleAndComponent>
                  </div>
                  <div className="flex items-end gap-2">
                    <TitleAndComponent title="Years">
                      <CommonInput
                        value={yearsToAdd}
                        setValue={setYearsToAdd}
                      />
                    </TitleAndComponent>
                    <TitleAndComponent title="Months">
                      <CommonInput
                        value={monthsToAdd}
                        setValue={setMonthsToAdd}
                      />
                    </TitleAndComponent>

                    <TitleAndComponent title="Weeks">
                      <div className="min-w-[80px]">
                        <CommonInput
                          value={weeksToAdd}
                          setValue={setWeeksToAdd}
                        />
                      </div>
                    </TitleAndComponent>
                    <TitleAndComponent title="Days">
                      <div className="min-w-[80px]">
                        <CommonInput
                          value={daysToAdd}
                          setValue={setDaysToAdd}
                        />
                      </div>
                    </TitleAndComponent>
                  </div>
                </div>

                <div className="flex justify-center pt-[20px] text-[18px] pb-[20px]">
                  <CalculateButton onClick={calculateNewDate}>
                    Calculate
                  </CalculateButton>
                </div>
              </FormBox>

              <AnswareBox showAns={showAns2}>
                {wrong2 !== "" ? (
                  <div className="bg-[#FFE9E9] flex items-center gap-5 py-[20px] px-[20px] mb-5">
                    <img
                      src="./images/warning.png"
                      alt=""
                      className="w-[40px]"
                    />
                    <p className="text-[#F00]">{wrong2}</p>
                  </div>
                ) : (
                  <div>
                    <div className="mb-4">
                      <p className="text-[18px] font-semibold">
                        {addDateResult}
                      </p>
                    </div>
                  </div>
                )}
              </AnswareBox>

              <p className="p_text mt-5">
                Date calculators are versatile tools that help individuals
                compute dates, durations, and intervals. They allow you to
                perform various date-related calculations with ease, eliminating
                the need for manual computations.
              </p>

              <H2TitleText title={"What is a Date Calculator?"}>
                <p className="p_text">
                  A date calculator is a specialised tool designed to perform
                  date-related calculations. It takes in specific inputs, such
                  as dates or durations, and provides you with accurate results.
                  Date calculations can range from simple addition and
                  subtraction of days to more complex calculations like age
                  determination.
                </p>
              </H2TitleText>

              <H2TitleText title={"The Types of Date Calculations"}>
                <div className="ml-8 mb-8">
                  <div className="key">
                    <h3>Addition and Subtraction</h3>
                    <p className="mb-4">
                      The most basic function of a date calculator is to add or
                      subtract days from a given date. This is useful for
                      determining future or past dates quickly.
                    </p>
                  </div>

                  <div className="key">
                    <h3>Workdays and Business Days</h3>

                    <p className="mb-4">
                      Date calculators can also help you calculate workdays or
                      business days, excluding weekends and holidays, making
                      them invaluable for project planning and scheduling.
                    </p>
                  </div>
                  <div className="key">
                    <h3>Age Calculation</h3>

                    <p className="mb-4">
                      Calculating one's age is a common use of date calculators.
                      By entering your birth date, these tools can instantly
                      determine your current age.
                    </p>
                  </div>

                  <div className="key">
                    <h3>Time Between Dates</h3>

                    <p className="mb-4">
                      Need to know how many days are left until your anniversary
                      or your vacation? Date calculators can provide you with
                      the exact duration between two dates.
                    </p>
                  </div>
                </div>
              </H2TitleText>

              <H2TitleText title={"Why Use a Date Calculator?"}>
                <p className="p_text">
                  Date calculators simplify complex date-related tasks, saving
                  time and reducing errors. They ensure accuracy and are highly
                  convenient for both personal and professional use.
                </p>
              </H2TitleText>

              <H2TitleText title={"How to Use a Date Calculator"}>
                <p className="p_text">
                  Using a date calculator is straightforward. You input the
                  relevant data, such as the start and end dates, and the tool
                  does the rest. It's an efficient and time-saving way to
                  perform date calculations.
                </p>

                <p className="p_text mt-3">
                  Using a date calculator offers numerous benefits in various
                  aspects of life.
                </p>

                <div className="ml-8 mb-8">
                  <div className="key">
                    <h3>Accuracy:</h3>
                    <p className="mb-4">
                      Date calculators provide precise results, eliminating the
                      potential for human error in manual calculations. Whether
                      you need to determine the duration between two dates or
                      find the exact age of a person, these tools ensure
                      accuracy.
                    </p>
                  </div>

                  <div className="key">
                    <h3>Time-Saving:</h3>

                    <p className="mb-4">
                      Date calculations can be time-consuming when done
                      manually. Date calculators streamline the process,
                      enabling you to get results in seconds, which is
                      especially valuable in time-sensitive situations.
                    </p>
                  </div>
                  <div className="key">
                    <h3>Efficiency:</h3>

                    <p className="mb-4">
                      Whether you're planning an event, managing work schedules,
                      or calculating due dates for financial transactions, date
                      calculators make the process more efficient. This
                      efficiency is essential for project management and event
                      planning.
                    </p>
                  </div>

                  <div className="key">
                    <h3>Complex Calculations:</h3>

                    <p className="mb-4">
                      Date calculators can handle complex date-related
                      calculations that might be challenging to do manually. For
                      example, they can calculate workdays or business days,
                      taking into account weekends and holidays, which is
                      crucial for project scheduling.
                    </p>
                  </div>

                  <div className="key">
                    <h3>User-Friendly:</h3>

                    <p className="mb-4">
                      Most date calculators, especially online tools and apps,
                      have intuitive interfaces that are easy to navigate. You
                      don't need to be a mathematical expert to use them
                      effectively.
                    </p>
                  </div>

                  <div className="key">
                    <h3>Accessibility:</h3>

                    <p className="mb-4">
                      Online date calculators are accessible from anywhere with
                      an internet connection. This means you can perform date
                      calculations on your computer, tablet, or smartphone,
                      making it convenient for both personal and professional
                      use.
                    </p>
                  </div>

                  <div className="key">
                    <h3>Event Planning:</h3>

                    <p className="mb-4">
                      Date calculators are indispensable for event planning.
                      They help you select the perfect date for weddings,
                      birthdays, anniversaries, and other special occasions,
                      taking into account factors like weekends and holidays.
                    </p>
                  </div>

                  <div className="key">
                    <h3>Financial Planning:</h3>

                    <p className="mb-4">
                      In financial transactions, knowing exact payment due
                      dates, interest accrual periods, and maturity dates is
                      critical. Date calculators simplify these calculations,
                      reducing the risk of financial mistakes.
                    </p>
                  </div>

                  <div className="key">
                    <h3>Personal Organization:</h3>

                    <p className="mb-4">
                      Date calculators help you stay organized in your personal
                      life. They can be used to count down to vacations, track
                      important milestones, or manage tasks and deadlines
                      efficiently.
                    </p>
                  </div>

                  <div className="key">
                    <h3>Historical and Scientific Research:</h3>

                    <p className="mb-4">
                      Date calculations are essential in various fields,
                      including history and science. Researchers and historians
                      use date calculators to determine historical dates, ages
                      of artifacts, and astronomical events accurately.
                    </p>
                  </div>
                </div>
              </H2TitleText>
            </div>
          </>
        }
      />
    </div>
  );
}
