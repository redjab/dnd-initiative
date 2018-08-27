import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'react-emotion';
import { DetailCard } from '../card/card';
import { DroppableType } from '../utils/drag-drop-type';
import { IEncounterColumnData } from './encouter-column.data';

const StyledColumn = styled('div')`
	background: grey;
	display: inline-block;
`

export class EncounterColumn extends React.Component<IEncounterColumnData> {
	constructor(props: IEncounterColumnData) {
		super(props);
		this.state = { cards: [] };
	}

	public render() {
		const cards = this.props.cards.map((card, index) => <DetailCard key={card.name + index} index={index} id={card.name + index} {...card} />);
		return (
			<Droppable
				type={DroppableType.Column}
				droppableId={this.props.id}>
				{(provided) => (
					<StyledColumn innerRef={provided.innerRef}>
						{cards}
					</StyledColumn>
				)}
			</Droppable>
		);
	}
}
