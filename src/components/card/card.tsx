import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'react-emotion';
import { Card, CardProps } from 'semantic-ui-react';
import { Card as CardData } from '../data/card';
import { EditableInput } from '../editable-input/editable-input';
import { DraggableType } from '../utils/drag-drop-type';
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
const StyledCard = styled('div')`
	margin-bottom: 16px;
`

export interface IDetailCardProps extends CardProps, CardData {
	id: string;
	index: number;
}

export class DetailCard extends React.Component<IDetailCardProps> {
	public onValueChanges = (value: any) => {
		// TODO: Debounce here
	};
	public render() {
		const inlineInputWidth = '100px';
		return (
			<Draggable
				type={DraggableType.Card}
				key={this.props.id}
				draggableId={this.props.id}
				index={this.props.index}>
				{(provided, snapshot) => (
					<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
						<StyledCard>
							<Card>
								<Card.Content>
									<Card.Header>
										<FlexContainer>
											<ColumnOne>test</ColumnOne>
											<ColumnTwo>
												<EditableInput placeholder="Name" initialValue={this.props.name} valueChanges={this.onValueChanges} />
											</ColumnTwo>
										</FlexContainer>
									</Card.Header>
									<Card.Description>
										<FlexContainer>
											<ColumnOne>test</ColumnOne>
											<ColumnTwo>
												<div>
													<EditableInput placeholder="Current" initialValue={this.props.currentHP} width={inlineInputWidth} valueChanges={this.onValueChanges} type="number" />/
												<EditableInput placeholder="Max" initialValue={this.props.maxHP} width={inlineInputWidth} valueChanges={this.onValueChanges} type="number" /> HP
											</div>
												<div>
													<EditableInput placeholder="Current" initialValue={this.props.currentAC} width={inlineInputWidth} valueChanges={this.onValueChanges} /> AC
											</div>
												<div>
													<ConditionDropdown initialConditions={this.props.conditions || []} />
												</div>
											</ColumnTwo>
										</FlexContainer>
									</Card.Description>
								</Card.Content>
								<Card.Content extra={true}>
									<TakeDamage />
								</Card.Content>
							</Card>
						</StyledCard>
					</div>
				)}
			</Draggable>
		)
	}
}
