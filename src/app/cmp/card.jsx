import React, { Component } from 'react'
import { removeKeys } from '../../utils/class-name'
import styles from './card.styl'

export class Card extends Component {
	render() {
		return (
			<div
				className={[styles['card'], this.props.className].join(' ')}
				{...removeKeys(this.props, ['className']) }
			>
			</div>
		)
	}
}