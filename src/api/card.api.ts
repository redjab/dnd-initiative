import { Card } from '../data';
import { addDoc, getCollection, upsertDoc } from './api';
import * as encounterApi from './encounter.api';

export const subCollectionPath = `cards`;
export const docPathGivenId = (id: string) => `${subCollectionPath}/${id}`;

export function overwriteCard(boardId: string, encounterId: string, id: string, data: Card): Promise<void> {
	return upsertDoc(getCardSubCollectionRef(boardId, encounterId).doc(id), data);
}

export function addCard(boardId: string, encounterId: string, data: Card): Promise<Card> {
	return addDoc(getCardSubCollectionRef(boardId, encounterId), data);
}

export function getCardDocRef(boardId: string, encounterId: string, id: string): firebase.firestore.DocumentReference {
	return getCardSubCollectionRef(boardId, encounterId).doc(id);
}

export function getCardSubCollectionRef(boardId: string, encounterId: string): firebase.firestore.CollectionReference {
	return encounterApi.getEncounterDocRef(boardId, encounterId).collection(subCollectionPath);
}

export function getCardSubCollection(boardId: string, encounterId: string): Promise<Card[]> {
	return getCollection(getCardSubCollectionRef(boardId, encounterId));
}