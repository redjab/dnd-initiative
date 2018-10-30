import { IdObject } from "./idObject";

export interface Board extends IdObject {
	name: string;
	lastUpdated?: Date;
}