import * as React from 'react'
import * as styles from './NavBar.styl'

export class NavBar extends React.Component<any, any> {
    render() {
        return (
			<nav className="nav-bar">
                <div className="brand">
                    <div className="brand-typo">
                        Chess.io
                    </div>
                </div>
            </nav>
        )
    }
}