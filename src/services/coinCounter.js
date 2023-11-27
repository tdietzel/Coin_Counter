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

// if (input >= .25) {
//   //do quarter conversion
// } else if (input >= .10) {

// } else if (input >= .05) {

// } else if (input >= .01) {

// } else {

// }

// From a functional approach, we'd need to do something different:

// const x = 1
// const newX = 2 + x


// const incrementCounter = (counter) => {
//   // This is the termination condition.
//   if (isNaN(counter)) {
//     return;
//   }
//   if (counter >= 3) {
//     return counter;
//   } else {
//     console.log(counter);
//     return incrementCounter(counter + 1);
//   }
// }



