import { Omit } from "src/utils/type/omit";
import { Card } from "../card";

export interface CardModel extends Omit<Card, 'boardId' | 'encounterId'> { }