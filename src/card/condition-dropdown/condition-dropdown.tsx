import * as React from 'react';
import { Dropdown, DropdownItemProps } from 'semantic-ui-react';

interface IConditionDropdownState {
	conditions: DropdownItemProps[];
}

export class ConditionDropdown extends React.Component<{}, IConditionDropdownState> {
	constructor() {
		super({});
		const conditions: string[] = [
			'Blinded',
			'Charmed',
			'Deafened',
			'Frightened',
			'Grappled',
			'Incapacitated',
			'Invisible',
			'Paralyzed',
			'Petrified',
			'Poisoned',
			'Prone',
			'Restrained',
			'Stunned',
			'Unconscious',
		];
		this.state = {
			conditions: conditions.map((condition) => ({ key: condition, value: condition, text: condition }))
		}
	}

	public render() {
		return (
			<Dropdown placeholder='Condition(s)' fluid={true} multiple={true} search={true} selection={true} options={this.state.conditions} />
		)
	}
}
