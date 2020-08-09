import React, { Component } from 'react';
import classes from './Navbar.module.css';

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <div className={classes.Navbar}>
                <a className={classes.NavbarActive} href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
          );
    }
}
 
export default Navbar;