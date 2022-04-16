import ParserInterface from "./ParserInterface";
import {
  ReturnParseNotation,
  ParseFinalResultsParameter,
  ReturnParseFinalResults,
  ReturnDiceBoxRoll,
} from "./mocks";

describe("Given new ParserInterface is called", () => {
  describe("when initParser runs", () => {
    const parser = new ParserInterface();

    it("then has an empty rollsAsFloats array", () => {
      expect(parser.rollsAsFloats).toEqual([]);
    });

    it("then passes Math.Random to dice roller", () => {
      expect(typeof parser.rollParser.randFunction).toEqual("function");
    });
  });
});

//TODO: Issue #2 & Issue #5
describe("when updateFloats is called", () => {
  const parser = new ParserInterface();
  parser.updateFloats([ReturnDiceBoxRoll]);
  it("then updates rollsAsFloats", () => {
    expect(parser.rollsAsFloats).toEqual([0.05, 0.5]);
  });
});
