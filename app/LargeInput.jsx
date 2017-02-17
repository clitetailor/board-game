import React, { Component } from 'react';
import { Link } from 'react-router';
import './LargeInput.styl';

class LargeInput extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="LargeInput">
				<label htmlFor={ this.props.label } ref={ (label) => { this.label = label } }>{ this.props.label }</label>

				<input type={ this.props.type } onClick={ () => { this.active(); } }/>
			</div>
		)
	}

	active() {

	}
}

