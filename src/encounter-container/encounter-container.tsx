import * as React from 'react';

import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { ICardData } from '../card/card.data';
import { EncounterColumn } from '../encounter-column/encounter-column';
import { IEncounterColumnData } from '../encounter-column/encouter-column.data';
import { firestore } from '../firebase';

export interface IEncounterContainerState {
	columns: IEncounterColumnData[];
}

export class EncounterContainer extends React.Component<any, IEncounterContainerState> {
	constructor(props: any) {
		super(props);
		this.state = { columns: [] }
	}
	public componentDidMount() {
		const columns: IEncounterColumnData[] = [];
		const encountersRef = firestore.collection('encounters');
		encountersRef.get().then((collection) => {
			collection.forEach((doc) => {
				const columnData: IEncounterColumnData = {
					id: doc.id,
					cards: doc.data().cards as ICardData[],
				};
				columns.push(columnData);
			});
			this.setState({
				columns
			});
		});
	}
	public onDragEnd = (result: DropResult) => {
		console.log(result);
	}

	public render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				{this.state.columns.map((column) => <EncounterColumn key={column.id} {...column} />)}
			</DragDropContext>
		);
	}
}
