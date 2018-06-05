import * as React from 'react';
import { Input, InputProps } from 'semantic-ui-react';

interface IEditableInputProps extends InputProps {
	placeholder: string;
	value?: string;
}

interface IEditableInputState {
	editing: boolean;
	value?: string;
}

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
			<Input
				placeholder={this.props.placeholder}
				ref={this.handleRef}
				defaultValue={this.state.value}
				onChange={this.handleChange}
				onKeyPress={this.handleKeyPress}
				onBlur={this.toggleEditing}
			/> :
			<span onClick={this.toggleEditing}>{this.state.value || this.props.placeholder}</span>
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
