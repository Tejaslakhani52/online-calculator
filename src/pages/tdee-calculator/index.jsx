import React, { useState } from "react";

export default function index() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [tdee, setTDEE] = useState(null);

  const calculateTDEE = () => {
    if (gender && age && weight && height && activityLevel) {
      const ageValue = parseFloat(age);
      const weightValue = parseFloat(weight);
      const heightValue = parseFloat(height);

      let bmr;
      if (gender === "male") {
        bmr = 10 * weightValue + 6.25 * heightValue - 5 * ageValue + 5;
      } else {
        bmr = 10 * weightValue + 6.25 * heightValue - 5 * ageValue - 161;
      }

      const activityMultiplier = {
        sedentary: 1.2,
        lightlyActive: 1.375,
        moderatelyActive: 1.55,
        veryActive: 1.725,
        superActive: 1.9,
      };

      const tdeeValue = bmr * activityMultiplier[activityLevel];
      setTDEE(tdeeValue);
    }
  };
  return (
    <div>
      <h2>TDEE Calculator</h2>
      <div>
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label>Activity Level:</label>
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
        >
          <option value="sedentary">Sedentary</option>
          <option value="lightlyActive">Lightly Active</option>
          <option value="moderatelyActive">Moderately Active</option>
          <option value="veryActive">Very Active</option>
          <option value="superActive">Super Active</option>
        </select>
      </div>
      <button onClick={calculateTDEE}>Calculate TDEE</button>
      {tdee && (
        <p>
          Your Total Daily Energy Expenditure (TDEE) is approximately{" "}
          {tdee.toFixed(2)} calories per day.
        </p>
      )}
    </div>
  );
}
