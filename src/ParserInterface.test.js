import ParserInterface from "./ParserInterface";
import { ReturnDiceBoxRoll } from "./mocks";

describe("Given new ParserInterface is created", () => {
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

describe("Given new ParserInterface is created after rollsAsFloats has been updated", () => {
  const parser = new ParserInterface();
  parser.updateFloats([ReturnDiceBoxRoll]);

  describe("when initParser runs AND updateFloats has been called", () => {
    it("then has rollsAsFloats set to number[]", () => {
      expect(parser.rollsAsFloats).toEqual([0.05, 0.5]);
    });

    it("then passes to DiceRoller rolls external count", () => {
      expect(parser.rollParser.randFunction()).toEqual(0.05);
    });
  });
});

describe("Given new ParserInterface has been created", () => {
  const parser = new ParserInterface();
  parser.rollsAsFloats = [1];
  parser.dieGroups = [2];
  parser.parsedNotation = {};
  parser.finalResults = [2];
  parser.clear();
  it("then clear is called the global variables are reset", () => {
    expect(parser.rollsAsFloats).toEqual([]);
    expect(parser.dieGroups).toEqual([]);
    expect(parser.parsedNotation).toEqual(null);
    expect(parser.finalResults).toEqual(null);
  });
});

describe("Given new ParserInterface was created", () => {
  const parser = new ParserInterface();

  describe("when incrementId is passed a parameter returns a string", () => {
    const result = parser.incrementId(9);
    expect(typeof result).toEqual("string");
  });

  describe("when incrementId is passed a parameter it is turned into a string", () => {
    const result = parser.incrementId(9.5);
    expect(typeof result).toEqual("string");
    expect(result).toEqual("9.6");
  });
});
