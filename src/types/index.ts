import {
  MathOperation,
  RollType,
  RollBase,
  DiceRollResult,
} from "@3d-dice/dice-roller-parser";

export type DieGroups = {
  qty: number;
  sides: number;
  mods: unknown[];
};

export type ParseFinalResults = {
  dice?: (RollBase | DiceRollResult)[];
  failures: number;
  ops: MathOperation[];
  order: number;
  success: null | boolean;
  successes: number;
  type: RollType;
  valid: boolean;
  value: number;
};

/** Dicebox Types */
type Sides = number;
type Theme = string;
// type Qty = number;

export type DiceBoxResult = {
  groupId: number;
  rollId: number;
  sides: Sides;
  theme: Theme;
  value: number;
};
