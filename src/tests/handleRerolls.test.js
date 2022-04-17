import ParserInterface from "../ParserInterface";

describe("Given new ParserInterface is created", () => {
  describe("when handleRerolls runs", () => {
    const parser = new ParserInterface();

    it("then returns an empty array", () => {
      const results = parser.handleRerolls();
      expect(Array.isArray(results)).toBeTruthy();
      expect(results).toEqual([]);
    });
  });
});
