import * as React from 'react';

import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { getCardSubCollection } from 'src/api/card.api';
import { getEncounterSubCollection } from 'src/api/encounter.api';
// import { reorder } from '../utils/reorder';
// import { sortBy } from '../utils/sort-by';
import * as boardApi from '../api/board.api';
import { Encounter } from '../data/encounter';
// import { ICardData } from '../card/card.data';
import { EncounterColumn } from '../encounter-column/encounter-column';
import { debug } from '../utils/debug';
import { DroppableType } from '../utils/drag-drop-type';

export interface IEncounterContainerState {
	columns: { [key: string]: Encounter };
}

export class EncounterContainer extends React.Component<any, IEncounterContainerState> {
	constructor(props: any) {
		super(props);
		this.state = { columns: {} }
	}
	public componentDidMount() {
		boardApi.getBoardDoc('X2r4nX2IEWOcH9GyTADr')
			.then((data) => debug(data))
			.then((data) => getEncounterSubCollection(data.id))
			.then((data) => debug(data))
			.then((data) => getCardSubCollection('X2r4nX2IEWOcH9GyTADr', data[0].id))
			.then((data) => debug(data));
		// const columns: { [key: string]: IEncounterColumnData } = {};
		// const encountersRef = firestore.collection('encounters');
		// encountersRef.orderBy('index').get()
		// 	.then((collection) => {
		// 		const cardIds: string[] = [];
		// 		collection.forEach((doc) => {
		// 			cardIds.push(doc.data().cards);
		// 			// const columnData: IEncounterColumnData = {
		// 			// 	id: doc.id,
		// 			// 	cards: [],
		// 			// 	index: doc.data().index,
		// 			// };
		// 			// columns[doc.id] = columnData;
		// 		});
		// 		const cardsRef = firestore.collection('cards');
		// 		return cardsRef.get();
		// 	})
		// 	.then((cardCollection) => {
		// 		console.log(cardCollection.docs);
		// 	})
		// this.setState({
		// 	columns
		// });
	}
	public onDragEnd = (result: DropResult) => {
		if (!result.destination) {
			return;
		}

		const source = result.source;
		const destination = result.destination;

		if (source.droppableId === destination.droppableId && source.index === destination.index) {
			return;
		}

		if (result.type === DroppableType.Column) {
			if (source.droppableId === destination.droppableId) {
				// const column: EncounterModel = this.state.columns[source.droppableId];
				// const cards = column.cards;
				// const ordered = reorder(cards, source.index, destination.index);
				// this.setState({
				// 	columns: { ...this.state.columns, [source.droppableId]: { id: source.droppableId, cards: ordered, index: destination.index } }
				// });
				// firestore.collection('encounters').doc(destination.droppableId).update({ cards: ordered });
			}
		}
	}

	public render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				{Object.keys(this.state.columns).map((key) => <EncounterColumn key={key} {...this.state.columns[key]} />)}
			</DragDropContext>
		);
	}
}
