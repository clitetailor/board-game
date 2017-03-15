import React, { Component } from 'react'
import style from './LargeButton.styl'

export class LargeButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button
				className={style.LargeButton}
				type="button"
				{...this.props}
			/>
		)
	}
}