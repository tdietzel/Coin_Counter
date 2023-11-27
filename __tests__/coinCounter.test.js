import { CoinCounter } from '../src/services/coinCounter.js'

describe ('CoinCounter', () => {

  test("It should return an error if input is NaN", () => {
    expect(CoinCounter.checkInput("text")).toEqual("error");
  });

  test("It should add 1 to the quarters value if input is greater than or equal to .25", () => {
    expect(CoinCounter.checkInput(.25)).toEqual([1,0,0,0]);
  });

})