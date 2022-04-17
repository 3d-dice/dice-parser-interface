import ParserInterface from "../ParserInterface";
import {
  ParameterParseFinalResults,
  ReturnParseFinalResults,
  ReturnDiceBoxRoll,
} from "../mocks";

describe("Given parseFinalResults is called with an array of rolls from Dicebox", () => {
  it("then calls recursiveSearch", () => {
    const parser = new ParserInterface();
    const spy = jest.spyOn(parser, "recursiveSearch");

    parser.parseNotation("2d20"); //TODO: #Issue #1
    parser.parseFinalResults(ParameterParseFinalResults);

    expect(spy).toHaveBeenCalledTimes(4);
    expect(spy).toHaveBeenCalledWith(ParameterParseFinalResults, "rolls");
  });

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
    const result = parser.parseFinalResults({ rolls: ReturnDiceBoxRoll });

    expect(result).toEqual(ReturnParseFinalResults);
  });
});
