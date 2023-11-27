import { checkInput } from '../src/services/coinCounter.js';
import { closureCounter } from '../src/services/coinCounter.js';

describe ('checkInput', () => {

  test("It should return an error if input is NaN", () => {
    expect(checkInput("text")).toEqual("error");
  });

  test("It should add 1 to the quarters value if input is greater than or equal to .25", () => {
    expect(checkInput(.25)).toEqual([1,0,0,0]);
    expect(checkInput(.50)).toEqual([2,0,0,0]);
  });

  test("It should add 1 to the dimes value if input is greater than or equal to .10", () => {
    expect(checkInput(.10)).toEqual([0,1,0,0]);
    expect(checkInput(.35)).toEqual([1,1,0,0]);
  });

  test("It should add 1 to the nickels value if input is greater than or equal to .05", () => {
    expect(checkInput(.05)).toEqual([0,0,1,0]);
    expect(checkInput(.40)).toEqual([1,1,1,0]);
  });

  test("It should add 1 to the pennies value if input is greater than or equal to .01", () => {
    expect(checkInput(.01)).toEqual([0,0,0,1]);
    expect(checkInput(.41)).toEqual([1,1,1,1]);
  });
});

describe ('closureCounter', () => {
  test("It should return an error unless the input is the word quarter, dime, nickel, or penny", () => {
    expect(closureCounter("text")).toEqual("error");
  });
});