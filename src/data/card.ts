import { Condition } from "./condition";
import { IdObject } from "./idObject";

export interface Card extends IdObject {
	encounterId: string;
	boardId: string;
	name: string;
	currentHP?: number;
	maxHP?: number;
	currentAC?: number;
	conditions?: Condition[];
	index: number;
}