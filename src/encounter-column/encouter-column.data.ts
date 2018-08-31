import { ICardData } from '../card/card.data';

export interface IEncounterColumnData {
	id: string;
	cards: ICardData[];
	index: number;
}
