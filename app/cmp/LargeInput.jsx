import React, { Component } from 'react'
import style from './LargeInput.styl'

import { removeKeys, toClassName, filterKeys } from '../utils/className';

const defaultProps = {
	type: 'input'
}

export class LargeInput extends Component {
	/**
	 * @param {{ type: string, label: string, name: string }} props
	 */
	constructor(props = defaultProps) {
		super(props);

		this.state = {
			labelInvisible: false
		}
	}

	render() {
		return (
			<div
				className={[style.LargeInput, this.props.className].join(' ')}
				ref={(wrapper) => { this.wrapper = wrapper }}
				onClick={() => { this.onClick() }}
			>
				<label
					className={toClassName({ invisible: this.state.labelInvisible })}
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
		this.setState((state) => {
			return Object.assign({}, state, {
				labelInvisible: this.textInput.value == "" ? false : true
			})
		})
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