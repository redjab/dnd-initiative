import * as React from 'react';
import { Card } from 'semantic-ui-react';
import { EditableInput } from '../editable-input/editable-input';
import { ConditionDropdown } from './condition-dropdown/condition-dropdown';
import { TakeDamage } from './take-damage/take-damage';

export class DetailCard extends React.Component {
	public render() {
		return (
			<Card>
				<Card.Content>
					<Card.Header>
						<EditableInput placeholder="Name" />
					</Card.Header>
					<Card.Description>
						<div>
							<EditableInput placeholder="Current" />/<EditableInput placeholder="Max" /> HP
						</div>
						<div>
							<EditableInput placeholder="Current" /> AC
						</div>
						<div>
							<ConditionDropdown />
						</div>
					</Card.Description>
				</Card.Content>
				<Card.Content extra={true}>
					<TakeDamage />
				</Card.Content>
			</Card>
		)
	}
}
