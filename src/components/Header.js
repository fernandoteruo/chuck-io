import React from 'react';
import "../styles/css/header.css";
import config from "../utils/config";

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.showHideSideMenu = this.showHideSideMenu.bind(this);
        this.state = {
            active: '',
        }
    }

    showHideSideMenu() {
        let state = Object.assign(this.state);
        state.active = state.active === "in" ? "out" : "in";
        this.setState(state);
    }

    renderHeaderElements() {
        return (
            <div>
                <li><a href={config.base + "/"}>Item 1</a></li>
                <li><a href={config.base + "/"}>Item 2</a></li>
                <li><a href={config.base + "/"}>Item 3</a></li>
            </div>
        );
    }

    render() {
        return (
            <header>
                <nav>
                    <button type="button" onClick={this.showHideSideMenu}>
                        <span className={"icon-bar icon-bar-top " + this.state.active}></span>
                        <span className={"icon-bar icon-bar-middle " + this.state.active}></span>
                        <span className={"icon-bar icon-bar-bottom " + this.state.active}></span>
                    </button>
                    <a href="/" className="mobile">
                        <img src="https://assets.chucknorris.host/img/chucknorris_logo_coloured_small@2x.png"
                             alt="Logo Header"/>
                    </a>
                    <ul className={"mobile " + this.state.active}>
                        { this.renderHeaderElements() }
                    </ul>
                    <ul className="desktop logo">
                        <a href={config.base + "/"}><img
                            src="https://assets.chucknorris.host/img/chucknorris_logo_coloured_small@2x.png"
                            alt="Logo Header"/></a>
                    </ul>
                    <ul className="desktop nav">
                        { this.renderHeaderElements() }
                    </ul>
                </nav>
            </header>
        )
    }
}
