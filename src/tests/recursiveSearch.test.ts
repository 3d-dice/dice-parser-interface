import ParserInterface from "../ParserInterface";
import { ReturnRollParserParse } from "../mocks";

describe("Given parseNotation is called with a roll notation string", () => {
  const parser = new ParserInterface();
  describe("when recursiveSearch is called with this.parsedNotation object and a search string", () => {
    const callback = jest.fn();

    it("then returns an array with the key which matches the search string", () => {
      const search = parser.recursiveSearch(
        ReturnRollParserParse,
        "die",
        [],
        callback
      );
      expect(search).toEqual([ReturnRollParserParse.die]);
    });

    it("then calls the callback if its a function", () => {
      parser.recursiveSearch(ReturnRollParserParse, "die", [], callback);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(ReturnRollParserParse);
    });
  });

  describe("when recursiveSearch is called with an object, search string, and results", () => {
    it("then adds the found key to the results array", () => {
      const search = parser.recursiveSearch(ReturnRollParserParse, "die", [1]);
      expect(search).toEqual([1, ReturnRollParserParse.die]);
    });

    it("then returns the results array if key isn't found", () => {
      const search = parser.recursiveSearch(ReturnRollParserParse, "", [2]);
      expect(search).toEqual([2]);
    });
  });

  describe("when recursiveSearch is called with an object, an invalid search string, and value equals an object", () => {
    it("then it calls recursiveSearch again with the value as the object", () => {
      const spy = jest.spyOn(parser, "recursiveSearch");
      const search = parser.recursiveSearch(ReturnRollParserParse, "value");

      expect(search).toEqual([
        ReturnRollParserParse.count.value,
        ReturnRollParserParse.die.value,
      ]);

      expect(spy).toHaveBeenCalledTimes(4);
      expect(spy.mock.calls).toEqual([
        [
          {
            count: { type: "number", value: 2 },
            die: { type: "number", value: 20 },
            label: "",
            mods: [],
            root: true,
            type: "die",
          },
          "value",
        ],
        [{ type: "number", value: 2 }, "value", [2, 20], undefined],
        [{ type: "number", value: 20 }, "value", [2, 20], undefined],
        [[], "value", [2, 20], undefined],
      ]);
    });
  });
});
