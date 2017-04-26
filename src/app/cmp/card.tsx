import * as React from 'react'
import { removeKeys } from '../../utils/class-name'
import * as styles from './card.styl'
import { leroy } from 'leroy'

export class Card extends React.Component<any, any> {
	render() {
		return (
			<div
				className={leroy(styles)
					.cls('card')
					.join(this.props.className)
					.put()}
				{...removeKeys(this.props, ['className']) }
			>
			</div>
		)
	}
}