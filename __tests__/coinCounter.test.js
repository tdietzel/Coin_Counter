import { CoinCounter } from '../src/services/coinCounter.js'

describe ('CoinCounter', () => {

  test("It should return an error if input is NaN", () => {
    expect(CoinCounter.checkInput("text")).toEqual("error");
  });

})