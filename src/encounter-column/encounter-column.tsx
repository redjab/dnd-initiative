import * as React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
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

@DragDropContext(HTML5Backend)
export class EncounterColumn extends React.Component<{}, IEncounterColumnState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			cards: [generateCard(), generateCard(), generateCard()],
		}
	}
	public render() {
		const cards = this.state.cards.map((card, index) => <DetailCard key={index} id={index.toString()} {...card} />);
		return (
			cards
		);
	}
}
