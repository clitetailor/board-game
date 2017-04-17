import React, { Component } from 'react'
import styles from './NavBar.styl'

export class NavBar extends Component {
    render() {
        return (
			<nav className="NavBar">
                <div className="brand">
                    <div className="brand-typo">
                        Chess.io
                    </div>
                </div>
            </nav>
        )
    }
}