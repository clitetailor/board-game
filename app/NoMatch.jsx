import './index.js';
import './nomatch.html';

import React, { Component } from 'react';

class NoMatch extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="NoMatch">
				
			</div>
		)
	}
}

ReactDOM.render(
	<NoMatch />,
	document.getElementById('root')
)