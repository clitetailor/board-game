import * as React from 'react'
import { toClassName, removeKeys } from '../../utils/class-name'
import styles from './normal-input.styl'

class NormalInput extends React.Component<any, any> {
	private wrapper;
	private label;
	private textInput;

	public static defaultProps = {
		type: 'input'
	}

	constructor(props) {
		super(props);

		this.state = {
			labelInvisible: false
		}
	}

	render() {
		return (
			<div
				className="normal-input"
				ref={(wrapper) => { this.wrapper = wrapper }}
				onClick={() => { this.onClick() }}
			>
				<label
					className={toClassName({
						[styles.invisible]: this.state.labelInvisible
					})}
					htmlFor={this.props.label}
					ref={(label) => { this.label = label }}
				>
					{this.props.label}
				</label>
				<input
					name={this.props.label}
					type={this.props.type}
					ref={(input) => { this.textInput = input }}
					onChange={() => { this.inputCheck() }}
					onBlur={() => { this.onBlur() }}
					onFocus={() => { this.onFocus() }}
					{...this.props }
				/>
			</div>
		)
	}

	inputCheck() {
		this.setState(state => state.assign({
			labelInvisible: this.textInput.value == "" ? false : true
		}))
	}

	onClick() {
		this.focus();
	}

	focus() {
		this.wrapper.classList.add('focus');
		this.textInput.focus();
	}

	onFocus() {
		this.wrapper.classList.add('focus');
	}

	onBlur() {
		this.wrapper.classList.remove('focus');
	}

	get value() {
		return this.textInput.value;
	}

	set value(newValue) {
		this.textInput.value = newValue;
	}
}

export { NormalInput }