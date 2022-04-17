import { ReturnDiceBoxRoll } from "../mocks";
import ParserInterface from "../ParserInterface";

describe("when updateFloats is called", () => {
  const parser = new ParserInterface();
  parser.updateFloats([ReturnDiceBoxRoll]);
  it("then updates rollsAsFloats", () => {
    expect(parser.rollsAsFloats).toEqual([0.05, 0.5]);
  });
});
