export const convertToCelsius = (val: string | number) => {
  const temp = (+val - 273.15).toFixed(0);
  return +temp > 0 ? `+ ${temp}` : temp;
};

export const convertToFarenghate = (val: string | number) => {
  const temp = ((+val - 273.15) * 1.8 + 32).toFixed(0);
  return +temp > 0 ? `+ ${temp}` : temp;
};
