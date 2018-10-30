import { Board } from "../board";
import { EncounterModel } from "./encounter.model";

export interface BoardModel extends Board {
	encounters: EncounterModel[];
}