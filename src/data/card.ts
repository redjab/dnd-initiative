import { Condition } from "./condition";

export interface Card {
	id: string;
	encounterId: string;
	boardId: string;
	name: string;
	currentHP?: number;
	maxHP?: number;
	currentAC?: number;
	conditions?: Condition[];
	index: number;
}