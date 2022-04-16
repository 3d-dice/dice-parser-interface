export const ReturnDiceBoxRoll = [
  { groupId: 0, rollId: 1, sides: 20, theme: "#FFFFFF", value: 9 },
  { groupId: 0, rollId: 1, sides: 20, theme: "#FFFFFF", value: 2 },
];

export const ParseFinalResultsParameter = [
  {
    groupId: 0,
    rollId: 0,
    sides: 20,
    theme: "#FFFFFF",
    value: 2,
  },
  {
    groupId: 0,
    rollId: 1,
    sides: 20,
    theme: "#FFFFFF",
    value: 4,
  },
];

export const ReturnParseNotation = [
  {
    mods: [{ type: "keep", highlow: "h", expr: { type: "number", value: 1 } }],
    qty: 2,
    sides: 10,
  },
];

export const ReturnRolls = [
  {
    critical: null,
    die: 20,
    failures: 0,
    matched: false,
    order: 0,
    roll: 9,
    success: null,
    successes: 0,
    type: "roll",
    valid: true,
    value: 9,
  },
  {
    critical: null,
    die: 20,
    failures: 0,
    matched: false,
    order: 1,
    roll: 2,
    success: null,
    successes: 0,
    type: "roll",
    valid: true,
    value: 2,
  },
];

export const ReturnParseFinalResults = {
  count: {
    failures: 0,
    order: 0,
    success: null,
    successes: 0,
    type: "number",
    valid: true,
    value: 2,
  },
  die: {
    failures: 0,
    order: 0,
    success: null,
    successes: 0,
    type: "number",
    valid: true,
    value: 20,
  },
  failures: 0,
  matched: false,
  order: 0,
  rolls: ReturnRolls,
  success: null,
  successes: 0,
  type: "die",
  valid: true,
  value: 11,
};
