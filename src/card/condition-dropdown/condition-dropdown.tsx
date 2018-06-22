import * as React from 'react';
import { Dropdown, DropdownItemProps } from 'semantic-ui-react';
import { Condition } from './condition.constant';

export interface IConditionDropdownState {
	conditions: DropdownItemProps[];
}

export interface IConditionDropdownProps {
	initialConditions: Condition[];
}

export class ConditionDropdown extends React.Component<IConditionDropdownProps, IConditionDropdownState> {
	constructor(props: IConditionDropdownProps) {
		super(props);
		const conditions: string[] = Object.keys(Condition);
		this.state = {
			conditions: conditions.map((condition) => ({ key: condition, value: condition, text: condition })),
		}
	}

	public render() {
		return (
			<Dropdown placeholder='Condition(s)' fluid={true} multiple={true} search={true} selection={true} options={this.state.conditions} defaultValue={this.props.initialConditions} />
		)
	}
}
