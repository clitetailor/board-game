import * as React from 'react'
import * as styles from './large-input.styl'
import { leroy } from 'leroy'

import { removeKeys, toClassName, filterKeys } from '../../utils/class-name';

class LargeInput extends React.Component<any, any> {
	private wrapper;
	private label;
	private textInput;
	
	public static defaultProps: {
		type: "input"
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
				className={leroy(styles)
					.cls('large-input')
					.join(this.props.className)
					.put()}
				ref={(wrapper) => { this.wrapper = wrapper }}
				onClick={() => { this.onClick() }}
			>
				<label
					className={leroy(styles)
						.add('invisible', this.state.labelInvisible)
						.put()}
					htmlFor={this.props.name}
					ref={(label) => { this.label = label }}
				>
					{this.props.label}
				</label>
				<input
					ref={(input) => { this.textInput = input }}
					onChange={() => { this.inputCheck() }}
					onBlur={() => { this.onBlur() }}
					onFocus={() => { this.onFocus() }}
					name={this.props.name}
					{...removeKeys(this.props, ['label', 'className', 'style']) }
				/>
			</div>
		)
	}

	inputCheck() {
		this.setState(state => state.assign({
			labelInvisible: this.textInput.value ? true : false
		}))
	}

	onClick() {
		this.focus();
	}

	focus() {
		this.wrapper.classList.add(styles.focus);
		this.textInput.focus();
	}

	onFocus() {
		this.wrapper.classList.add(styles.focus);
	}

	onBlur() {
		this.wrapper.classList.remove(styles.focus);
	}

	get value() {
		return this.textInput.value;
	}

	set value(newValue) {
		this.textInput.value = newValue;
	}
}

export { LargeInput }