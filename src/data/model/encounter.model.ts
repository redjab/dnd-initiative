import { Omit } from "../../utils/type/omit";
import { Encounter } from "../encounter";
import { CardModel } from "./card.model";

export interface EncounterModel extends Omit<Encounter, 'boardId'> {
	cards: CardModel[];
}