import React, { Component } from 'react'
import { toClassName, removeKeys } from 'utils/className'
import style from './NormalInput.styl'

class NormalInput extends Component {
	/**
	 * 
	 * @param {{ label, input, type }} props 
	 */
	constructor(props) {
		super(props);

		this.state = {
			labelInvisible: false
		}
	}

	render() {
		return (
			<div
				className={style.NormalInput}
				ref={(wrapper) => { this.wrapper = wrapper }}
				onClick={() => { this.onClick() }}
			>
				<label
					className={toClassName({
						invisible: this.state.labelInvisible
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
					{...removeKeys(this.props) }
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

NormalInput.defaultProps = {
	type: 'input'
}

export { NormalInput }