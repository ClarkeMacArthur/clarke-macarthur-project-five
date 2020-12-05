import { Component } from 'react';
import './App.css';


class Header extends Component {
    // renders header to the page 
    render() {
        return(
            <header>
                <div className="wrapper">
                <h1>MixTapE 2020</h1>
                </div>
            </header>
        )
    }
}

export default Header;