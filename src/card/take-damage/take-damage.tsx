import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { EditableInput } from '../../editable-input/editable-input';

export class TakeDamage extends React.Component {
	public render() {
		return (
			<div>
				<div>
					Take
					<EditableInput placeholder="Damage" />
				</div>
				<Button>
					Apply
				</Button>
			</div>
		)
	}
}
