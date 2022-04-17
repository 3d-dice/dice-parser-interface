import ParserInterface from "../ParserInterface";

describe("Given new ParserInterface was created", () => {
  const parser = new ParserInterface();

  describe("when incrementId is passed a parameter returns a string", () => {
    const result = parser.incrementId(9);

    it("then returns a string", () => {
      expect(typeof result).toEqual("string");
      expect(result).toEqual("9.1");
    });
  });

  describe("when incrementId is passed a parameter it is turned into a string", () => {
    const result = parser.incrementId(9.5);
    it("then returns a string with . in it", () => {
      expect(result).toEqual("9.6");
    });
  });
});
