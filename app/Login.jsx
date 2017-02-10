import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Login">
				
			</div>
		)
	}

	login() {
		
	}
}

function mergeStateToProps() {

}

function mergeDispatcherToProps() {

}

export default connect(mergeStateToProps, mergeDispatcherToProps)(Login);