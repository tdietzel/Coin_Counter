import { checkInput } from '../src/services/coinCounter.js'

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

})