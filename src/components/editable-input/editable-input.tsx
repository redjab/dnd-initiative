import * as React from 'react';
import styled from 'react-emotion';
import { Input, InputProps } from 'semantic-ui-react';

interface IEditableInputProps extends InputProps {
	placeholder?: string;
	initialValue?: string | number;
	width?: string;
	valueChanges?: (value: any) => void;
}

interface IEditableInputState {
	editing: boolean;
	value?: string | number;
}

const inputPadding = '5px';

const FixedHeightDiv = styled('div')((props: IEditableInputProps) => ({
	lineHeight: '38px',
	width: props.width || 'auto',
	display: 'inline-block',
	verticalAlign: 'middle',
	marginLeft: '20px',
	borderBottom: '1px solid #ccc!important',
}));

const FixedInput = styled(Input)((props: IEditableInputProps) => ({
	width: props.width || 'auto',
	paddingLeft: inputPadding,
	paddingRight: inputPadding,
}));


export class EditableInput extends React.Component<IEditableInputProps, IEditableInputState> {
	public inputRef: Input;

	constructor(props: IEditableInputProps) {
		super(props);
		this.state = {
			editing: false,
			value: this.props.initialValue,
		}
	}

	public render() {
		const { initialValue, valueChanges, ...inputProps} = { ...this.props };

		const toRender = this.state.editing ?
			<FixedInput
				{...inputProps}
				innerRef={this.handleRef}
				defaultValue={this.state.value}
				onChange={this.handleChange}
				onKeyPress={this.handleKeyPress}
				onBlur={this.toggleEditing}
			/> :
			<FixedHeightDiv width={this.props.width} onClick={this.toggleEditing}>{this.state.value || this.props.placeholder}</FixedHeightDiv>
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
		const value = event.target.value;
		this.setState({
			...this.state,
			...{ value }
		}, () => {
			if (this.props.valueChanges) {
				this.props.valueChanges(value);
			}
		});
	}

	private handleRef = (ref: Input) => {
		this.inputRef = ref;
	}

}
