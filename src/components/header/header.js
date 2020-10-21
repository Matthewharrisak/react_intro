import React, { Component } from 'react';
import logo from '../../logo.svg';
import Welcome from '../welcome/welcome';
// import './Header.css';

class Header extends Component {
    render(){
        return (
            <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          
          <Welcome/>
        </header>
        )
    }
}

export default Header;