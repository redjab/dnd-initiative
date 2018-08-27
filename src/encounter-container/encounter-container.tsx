import * as React from 'react';

import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { ICardData } from '../card/card.data';
import { EncounterColumn } from '../encounter-column/encounter-column';
import { IEncounterColumnData } from '../encounter-column/encouter-column.data';
import { firestore } from '../firebase';
import { DroppableType } from '../utils/drag-drop-type';
import { reorder } from '../utils/reorder';

export interface IEncounterContainerState {
	columns: { [key: string]: IEncounterColumnData };
}

export class EncounterContainer extends React.Component<any, IEncounterContainerState> {
	constructor(props: any) {
		super(props);
		this.state = { columns: {} }
	}
	public componentDidMount() {
		const columns: { [key: string]: IEncounterColumnData } = {};
		const encountersRef = firestore.collection('encounters');
		encountersRef.get().then((collection) => {
			collection.forEach((doc) => {
				const columnData: IEncounterColumnData = {
					id: doc.id,
					cards: doc.data().cards as ICardData[],
				};
				columns[doc.id] = columnData;
			});
			this.setState({
				columns
			});
		});
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
				const column: IEncounterColumnData = this.state.columns[source.droppableId];
				const cards = column.cards;
				const ordered = reorder(cards, source.index, destination.index);
				this.setState({
					columns: { ...this.state.columns, [source.droppableId]: { id: source.droppableId, cards: ordered } }
				})
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
