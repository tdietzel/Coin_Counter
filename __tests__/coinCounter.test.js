import { coinCounter } from '../src/services/coinCounter.js'

describe ('coinCounter', () => {

  test("It should return an error if input is NaN", () => {
    expect(coinCounter("text")).toEqual("error");
  });

})