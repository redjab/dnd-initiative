import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { DetailCard } from '../card/card';
import { ICardData } from '../card/card.data';
import { Condition } from '../card/condition-dropdown/condition.constant';

export interface IEncounterColumnState {
	cards: ICardData[];
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

export class EncounterColumn extends React.Component<{}, IEncounterColumnState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			cards: [generateCard(), generateCard(), generateCard()],
		}
	}
	public render() {
		const cards = this.state.cards.map((card, index) => <DetailCard key={index} index={index} id={index.toString()} {...card} />);
		return (
			<Droppable droppableId="test">
				{(provided) => (
					<div ref={provided.innerRef}>
						{cards}
					</div>
				)}
			</Droppable>
		);
	}
}
