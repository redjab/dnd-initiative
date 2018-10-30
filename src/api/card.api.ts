import { Card } from '../data/card';
import { addDoc, upsertDoc } from './api';
import * as encounterApi from './encounter.api';

export const subCollectionPath = (boardId: string, encounterId: string) => `${encounterApi.docPathGivenId(boardId, encounterId)}/cards`;
export const docPathGivenId = (boardId: string, encounterId: string, id: string) => `${subCollectionPath(boardId, encounterId)}/${id}`;

export function overwriteCard(boardId: string, encounterId: string, id: string, data: Card): Promise<void> {
	return upsertDoc(docPathGivenId(boardId, encounterId, id), data);
}

export function addCard(boardId: string, encounterId: string, data: Card): Promise<Card> {
	return addDoc(subCollectionPath(boardId, encounterId), data);
}
