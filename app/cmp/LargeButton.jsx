import React, { Component } from 'react';
import './LargeButton.styl';

export class LargeButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button className="LargeButton" type="button" {...this.props}></button>
		)
	}
}