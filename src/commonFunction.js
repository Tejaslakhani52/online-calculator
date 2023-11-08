export const convertHeightToFeet = (cm) => {
  return cm * 0.0328084;
};

export const convertHeightToCm = (feet) => {
  return feet * 30.48;
};

export const convertWeightToPounds = (kg) => {
  return kg * 2.20462;
};

export const convertWeightToKg = (pounds) => {
  return pounds / 2.20462;
};

export const scrollToPosition = (scrollY) => {
  window.scrollTo(0, scrollY);
};

export const localString = (value) => {
  return Math.floor(value).toLocaleString();
};
