import React, { Component } from 'react'
import { removeKeys } from '../../utils/class-name'
import styles from './large-button.styl'

export class LargeButton extends Component {
	render() {
		return (
			<button
				type="button"
				{...removeKeys(this.props, ['className'])}
				className={[styles["large-button"], this.props.className].join(' ')}
			/>
		)
	}
}