import * as React from 'react';
import { DragSource } from 'react-dnd';
import styled from 'react-emotion';
import { Card, CardProps } from 'semantic-ui-react';
import { EditableInput } from '../editable-input/editable-input';
import { ConditionDropdown } from './condition-dropdown/condition-dropdown';
import { TakeDamage } from './take-damage/take-damage';

const FlexContainer = styled('div')`
	display: flex;
`

const ColumnOne = styled('div')`
	width: 50px;
`

const ColumnTwo = styled('div')`
	width: 100%;
`

const cardSource = {
	beginDrag(props: IDetailCardProps) {
		return {
			id: props.id
		}
	}
}

export interface IDetailCardProps extends CardProps {
	id: string;
}

@DragSource('Card', cardSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging()
}))
export class DetailCard extends React.Component<IDetailCardProps> {
	public render() {
		return (
			<Card>
				<Card.Content>
					<Card.Header>
						<FlexContainer>
							<ColumnOne>test</ColumnOne>
							<ColumnTwo>
								<EditableInput placeholder="Name" />
							</ColumnTwo>
						</FlexContainer>
					</Card.Header>
					<Card.Description>
						<FlexContainer>
							<ColumnOne>test</ColumnOne>
							<ColumnTwo>
								<div>
									<EditableInput placeholder="Current" type="number" />/<EditableInput placeholder="Max" /> HP
							</div>
								<div>
									<EditableInput placeholder="Current" /> AC
							</div>
								<div>
									<ConditionDropdown />
								</div>
							</ColumnTwo>
						</FlexContainer>
					</Card.Description>
				</Card.Content>
				<Card.Content extra={true}>
					<TakeDamage />
				</Card.Content>
			</Card>
		)
	}
}
