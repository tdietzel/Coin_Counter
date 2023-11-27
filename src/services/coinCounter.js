// Recursion Example

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

// Closure Example

export function calculateAmount(input) {
  if (input === "quarter") {
    return function(amount,totalCoins = 0) {
      const remainder = Math.round(amount * 100) / 100;
      if (remainder >= .25) {
        const newRemainder = remainder - 0.25;
        const newTotalCoins = totalCoins + 1;
        return calculateAmount("quarter")(newRemainder,newTotalCoins);
      } else {
        return [totalCoins,remainder];
      }
    }
  }
  if (input === "dime") {
    return function(amount,totalCoins = 0) {
      const remainder = Math.round(amount * 100) / 100;
      if (remainder >= .1) {
        const newRemainder = remainder - 0.1;
        const newTotalCoins = totalCoins + 1;
        return calculateAmount("dime")(newRemainder,newTotalCoins);
      } else {
        return [totalCoins,remainder];
      }
    }
  }
  if (input === "nickel") {
    return function(amount,totalCoins = 0) {
      const remainder = Math.round(amount * 100) / 100;
      if (remainder >= .05) {
        const newRemainder = remainder - 0.05;
        const newTotalCoins = totalCoins + 1;
        return calculateAmount("nickel")(newRemainder,newTotalCoins);
      } else {
        return [totalCoins,remainder];
      }
    }
  }
  return "error";
}

// $1.10
// [4, 0.10]

// [0, 1.10]
// [1, 0.85]
// [2, 0.60]
// [3, 0.35]



// calculateAmount("quarters")(.25)



// function welcome(salutation) {
//   return function(yourName) {
//     return `${salutation}! Nice to meet you, ${yourName}!`
//   }
// }


// const heyThere = welcome("Hey there");

// > heyThere()
// "Hey there! Nice to meet you, undefined!"

// > heyThere("Joe")
// "Hey there! Nice to meet you, Joe!"

// welcome("Hey there")("Joe")