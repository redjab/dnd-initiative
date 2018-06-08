import * as React from 'react';
import styled from 'react-emotion';
import { Input, InputProps } from 'semantic-ui-react';

interface IEditableInputProps extends InputProps {
	placeholder: string;
	value?: string;
}

interface IEditableInputState {
	editing: boolean;
	value?: string;
}

const width = '100px';

const FixedHeightDiv = styled('div') `
	line-height: 38px;
	width: ${width};
	display: inline-block;
	vertical-align: middle;
`;

const FixedInput = styled(Input) `
	width: ${width};
`

export class EditableInput extends React.Component<IEditableInputProps, IEditableInputState> {
	public inputRef: Input;

	constructor(props: IEditableInputProps) {
		super(props);
		this.state = {
			editing: false,
			value: this.props.value,
		}
	}

	public render() {
		const toRender = this.state.editing ?
			<FixedInput
				placeholder={this.props.placeholder}
				innerRef={this.handleRef}
				defaultValue={this.state.value}
				onChange={this.handleChange}
				onKeyPress={this.handleKeyPress}
				onBlur={this.toggleEditing}
			/> :
			<FixedHeightDiv onClick={this.toggleEditing}>{this.state.value || this.props.placeholder}</FixedHeightDiv>
		return (
			toRender
		)
	}

	private toggleEditing = () => {
		this.setState({
			editing: !this.state.editing
		}, () => {
			if (this.state.editing) {
				this.inputRef.focus();
			}
		});
	}

	private handleKeyPress = (event: React.KeyboardEvent<HTMLSpanElement>) => {
		if (event.key === 'Enter') {
			this.toggleEditing();
		}
	}

	private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			...this.state,
			...{ value: event.target.value }
		})
	}

	private handleRef = (ref: Input) => {
		this.inputRef = ref;
	}

}
