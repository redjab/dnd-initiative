import { Board } from '../data';
import { firestore } from '../firebase';
import { getDoc } from './api';

export const collectionPath = 'boards';
export const docPathGivenId = (id: string) => `${collectionPath}/${id}`;

export function getBoardDocRef(id: string): firebase.firestore.DocumentReference {
	return firestore.doc(docPathGivenId(id));
}

export function getBoardDoc(id: string): Promise<Board> {
	return getDoc(getBoardDocRef(id));
}