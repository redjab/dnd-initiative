import { IdObject } from "./idObject";

export interface Encounter extends IdObject {
	boardId: string;
	name: string;
}