import ParserInterface from "./ParserInterface";
import {
  ReturnParseNotation,
  ParseFinalResultsParameter,
  ReturnParseFinalResults,
  ReturnDiceBoxRoll,
} from "./mocks";

describe("Given parseNotation is called with a roll notation string", () => {
  it("then runs the clear function to reset all values", () => {
    const parser = new ParserInterface();
    const spy = jest.spyOn(parser, "clear");
    parser.parseNotation("1d6");
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe("when passed a simple roll string", () => {
    const parser = new ParserInterface();
    it("then returns a dicebox roll object with qty, sides, and an empty mods array", () => {
      const notationSimple = parser.parseNotation("2d10");
      const simpleResult = [{ mods: [], qty: 2, sides: 10 }];
      expect(notationSimple).toEqual(simpleResult);
    });
  });

  describe("when passed a complicated roll string", () => {
    const parser = new ParserInterface();
    const complicatedNotation = parser.parseNotation("2d10kh*2");

    it("then returns a parsed object with mods", () => {
      expect(complicatedNotation).toEqual(ReturnParseNotation);
    });
  });

  describe("when parseNotation is called it runs recursiveSearch with a callback to update dieGroups", () => {
    const parser = new ParserInterface();
    const expected = parser.parseNotation("2d10kh*2");

    it("then dieGroups is updated which is the return for parseNotation", () => {
      expect(parser.dieGroups).toEqual(expected);
    });
  });
});

describe("when updateFloats is called", () => {
  const parser = new ParserInterface();
  parser.updateFloats(ReturnDiceBoxRoll);
  expect(parser.rollsAsFloats).toEqual(1);
});

describe("Given parseFinalResults is called with an array of rolls from Dicebox", () => {
  it("then calls recursiveSearch", () => {
    const parser = new ParserInterface();
    const spy = jest.spyOn(parser, "recursiveSearch");

    parser.parseNotation("2d20"); //TODO: This shouldn't have to be called to run parseFinalResults
    parser.parseFinalResults(ParseFinalResultsParameter);

    expect(spy).toHaveBeenCalledTimes(6);
    expect(spy).toHaveBeenCalledWith(ParseFinalResultsParameter, "rolls");
  });

  it("then resets rollsAsFloats", () => {
    const parser = new ParserInterface();

    parser.parseNotation("2d20");
    parser.parseFinalResults(ParseFinalResultsParameter);

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
