import { BoardModel } from '../data/model/board.model';
import { getDoc } from './api';

export const collectionPath = 'boards';
export const docPathGivenId = (id: string) => `${collectionPath}/${id}`;

export function getBoardDoc(id: string): Promise<BoardModel> {
	return getDoc(docPathGivenId(id));
}