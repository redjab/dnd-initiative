import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'react-emotion';
import { DetailCard } from '../card/card';
import { ICardData } from '../card/card.data';
import { Condition } from '../card/condition-dropdown/condition.constant';

export interface IEncounterColumnState {
	cards: ICardData[];
}

export interface IEncounterColumnProps {
	id: string;
}

export function generateCard(): ICardData {
	return {
		conditions: [Condition.Blinded],
		currentAC: 17,
		currentHP: 22,
		maxHP: 24,
		name: `test ${Math.random() * 100}`,
	}
}

const StyledColumn = styled('div')`
	background: grey;
	display: inline-block;
`

export class EncounterColumn extends React.Component<IEncounterColumnProps, IEncounterColumnState> {
	constructor(props: IEncounterColumnProps) {
		super(props);
		this.state = {
			cards: [generateCard(), generateCard(), generateCard()],
		}
	}
	public render() {
		const cards = this.state.cards.map((card, index) => <DetailCard key={card.name + index} index={index} id={card.name + index} {...card} />);
		return (
			<Droppable droppableId={this.props.id}>
				{(provided) => (
					<StyledColumn innerRef={provided.innerRef}>
						{cards}
					</StyledColumn>
				)}
			</Droppable>
		);
	}
}
