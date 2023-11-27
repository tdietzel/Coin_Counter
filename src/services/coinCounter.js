export const checkInput = (input) => {
  if (isNaN(input)) {
    return "error";
  }
  const calculateCoins = (inputTotal, array) => {
    const total = Math.round(inputTotal * 100) / 100;
    if (total >= .25) {
      const newTotal = total - 0.25;
      const newArray = [array[0] + 1, array[1], array[2], array[3]];
      return calculateCoins(newTotal, newArray);
    } else if (total >= .10) {
      const newTotal = total - 0.10;
      const newArray = [array[0], array[1] + 1, array[2], array[3]];
      return calculateCoins(newTotal, newArray);
    } else if (total >= .05) {
      const newTotal = total - 0.05;
      const newArray = [array[0], array[1], array[2] + 1, array[3]];
      return calculateCoins(newTotal, newArray);
    } else if (total >= .01) {
      const newTotal = total - 0.01;
      const newArray = [array[0], array[1], array[2], array[3] + 1];
      return calculateCoins(newTotal, newArray);
    } else {
      return array;
    }
  }
  return calculateCoins(input, [0, 0, 0, 0]);
}