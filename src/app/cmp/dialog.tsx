import * as React from 'react'
import { removeKeys, toClassName } from '../../utils/class-name'
import { Card } from './card'
import * as styles from './dialog.styl'
import { leroy } from 'leroy'

export class Dialog extends React.Component<any, any> {
	constructor(props) {
		super(props);

		this.state = {
			visibility: false
		}
	}

	render() {
		return (
			<div
				className={leroy(styles)
					.cls('dialog-layout')
					.add('open', this.state.visibility)
					.join(this.props.className)
					.put()}
			>
				<Card
					className={leroy(styles)
						.cls('dialog')
						.join(this.props.className)
						.put()}
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