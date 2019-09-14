import { CurrencyCommaPipe } from "./currencyComma.pipe";

describe("currencyComma Pipe", () => {
  it("should insert commas after 3 digits from right to left", () => {
    const pipe = new CurrencyCommaPipe();

    expect(pipe.transform(500)).toEqual("500");
    expect(pipe.transform(45000)).toEqual("45, 000");
    expect(pipe.transform(450000.45)).toEqual("450, 000.45");
  });

  it("should return an array of groups of 3 digits", () => {
    const pipe = new CurrencyCommaPipe();

    expect(pipe.getStringArray("55000", [])).toEqual(["55", "000"]);
  });
});
