import { Condition } from "./condition-dropdown/condition.constant";

export interface ICardData {
	name: string;
	currentHP?: number;
	maxHP?: number;
	currentAC?: number;
	conditions?: Condition[];
}