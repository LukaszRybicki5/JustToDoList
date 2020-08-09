import React, { Component } from 'react';
import classes from './Footer.module.css'

class Footer extends Component {
    render() { 

        let currentDate = new Date().getFullYear()

        return (
            <div className={classes.Footer}>
            <p>Created by @ŁR {currentDate}</p>
            </div>
          );
    }
}
 
export default Footer;