import { Encounter } from '../data';
import { getCollection, getDoc } from './api';
import * as boardApi from './board.api';

export const subCollectionPath = `encounters`;
export const docPathGivenId = (id: string) => `${subCollectionPath}/${id}`;

export function getEncounterDocRef(boardId: string, id: string): firebase.firestore.DocumentReference {
	return getEncounterSubCollectionRef(boardId).doc(id);
}

export function getEncounterSubCollectionRef(boardId: string): firebase.firestore.CollectionReference {
	return boardApi.getBoardDocRef(boardId).collection(subCollectionPath);
}

export function getEncounterDoc(boardId: string, id: string): Promise<Encounter> {
	return getDoc(getEncounterDocRef(boardId, id));
}

export function getEncounterSubCollection(boardId: string): Promise<Encounter[]> {
	return getCollection(getEncounterSubCollectionRef(boardId));
}