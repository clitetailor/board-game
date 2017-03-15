import React, { Component } from 'react'
import style from './NavBar.styl'

export class NavBar extends Component {
    render() {
        return (
			<nav className={style.NavBar}>
                <div className="brand">
                    <div className="brand-typo">
                        Chess.io
                    </div>
                </div>
            </nav>
        )
    }
}