import {
  MathOperation,
  RollType,
  RollBase,
  DiceRollResult,
} from "@3d-dice/dice-roller-parser";
import { KeepDropModType, ReRollMod } from "../../../dice-roller-parser/";

export type DieGroups = {
  qty: number;
  sides: number;
  mods?: (ReRollMod | KeepDropModType)[];
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
