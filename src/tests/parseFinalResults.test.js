import ParserInterface from "../ParserInterface";
import {
  ParameterParseFinalResults,
  ReturnParseFinalResults,
  ReturnDiceBoxRoll,
} from "../mocks";

describe("Given parseFinalResults is called with an array of rolls from Dicebox", () => {
  it("then resets rollsAsFloats", () => {
    const parser = new ParserInterface();

    parser.parseNotation("2d20");
    parser.parseFinalResults(ParameterParseFinalResults);

    expect(parser.rollsAsFloats).toEqual([]);
  });

  it("then returns the parsed final results", () => {
    const parser = new ParserInterface();

    parser.updateFloats(ReturnDiceBoxRoll);
    parser.parseNotation("2d20");
    const result = parser.parseFinalResults(ReturnDiceBoxRoll);

    expect(result).toEqual(ReturnParseFinalResults);
  });
});
