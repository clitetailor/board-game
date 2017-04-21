import React, { Component } from 'react'
import { removeKeys, toClassName } from '../../utils/class-name'
import { Card } from './card'
import styles from './dialog.styl'

export class Dialog extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visibility: false
		}
	}

	render() {
		return (
			<div
				className={toClassName({
					[styles['dialog-layout']]: true,
					[styles['open']]: this.state.visibility
				}) + " " + this.props.className}
			>
				<Card
					className={[styles['dialog'], this.props.className].join(' ')}
					{...removeKeys(this.props, ['className']) }
				/>
			</div>
		)
	}

	open() {
		this.setState(state => state.assign({
			visibility: true
		}))
	}

	close() {
		this.setState(state => state.assign({
			visibility: false
		}))
	}
}