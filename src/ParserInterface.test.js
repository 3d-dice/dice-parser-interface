import ParserInterface from "./ParserInterface";

describe("when parseNotation is called with a simple roll string", () => {
  const parser = new ParserInterface();

  const notationSimple = parser.parseNotation("2d10");
  const simpleResult = [{ mods: [], qty: 2, sides: 10 }];

  it("then returns a simple parsed object", () => {
    expect(notationSimple).toEqual(simpleResult);
  });
});

describe("when parseNotation is called with a complicated roll string", () => {
  const parser = new ParserInterface();

  const complicatedNotation = parser.parseNotation("2d10kh*2");
  const complicatedResults = [
    {
      mods: [
        { type: "keep", highlow: "h", expr: { type: "number", value: 1 } },
      ],
      qty: 2,
      sides: 10,
    },
  ];

  it("then returns a complicated parsed object", () => {
    expect(complicatedNotation).toEqual(complicatedResults);
  });
});
