import ParserInterface from "./ParserInterface";

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

  const resultWithMods = [
    {
      mods: [
        { type: "keep", highlow: "h", expr: { type: "number", value: 1 } },
      ],
      qty: 2,
      sides: 10,
    },
  ];
  describe("when passed a complicated roll string", () => {
    const parser = new ParserInterface();
    const complicatedNotation = parser.parseNotation("2d10kh*2");

    it("then returns a parsed object with mods", () => {
      expect(complicatedNotation).toEqual(resultWithMods);
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

describe("Given parseFinalResults is called with an array of results from Dicebox", () => {
  it("then calls recursiveSearch", () => {
    const parser = new ParserInterface();
    const spy = jest.spyOn(parser, "recursiveSearch");

    const diceboxResults = {
      rolls: [{ groupId: 0, rollId: 1, sides: 20, theme: "#FFFFFF", value: 7 }],
    };

    parser.parseFinalResults(diceboxResults, "rolls");
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(1);
  });
});
