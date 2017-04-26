import * as React from 'react'
import { removeKeys } from '../../utils/class-name'
import * as styles from './large-button.styl'
import { leroy } from 'leroy'

export class LargeButton extends React.Component<any, any> {
	render() {
		return (
			<button
				type="button"
				className={leroy(styles)
					.cls('large-button')
					.join(this.props.className)
					.put()}
				{...removeKeys(this.props, ['className'])}
			/>
		)
	}
}