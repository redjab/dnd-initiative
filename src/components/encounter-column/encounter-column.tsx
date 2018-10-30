import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'react-emotion';
// import { DetailCard } from '../card/card';
import { Encounter } from '../data/encounter';
import { DroppableType } from '../utils/drag-drop-type';

const StyledColumn = styled('div')`
	background: grey;
	display: inline-block;
`

export class EncounterColumn extends React.Component<Encounter> {
	constructor(props: Encounter) {
		super(props);
		this.state = { cards: [] };
	}

	public render() {
		// const cards = this.props.cards.map((card) => <DetailCard key={card.name + card.index} index={card.index} id={card.name + card.index} {...card} />);
		return (
			<Droppable
				type={DroppableType.Column}
				droppableId={this.props.id}>
				{(provided) => (
					<StyledColumn innerRef={provided.innerRef}>
						{/* {cards} */}
					</StyledColumn>
				)}
			</Droppable>
		);
	}
}
