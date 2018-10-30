import * as boardApi from './board.api';

export const subCollectionPath = (boardId: string) => `${boardApi.collectionPath}/encounters`;
export const docPathGivenId = (boardId: string, id: string) => `${subCollectionPath(boardId)}/${id}`;
