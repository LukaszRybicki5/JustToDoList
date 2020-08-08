import React, { Component } from 'react';
import classes from './App.module.css'

class ToDoItem extends Component {

    render() { 
        return ( 
            <div className={classes.ToDoItem}>   
                <input type="checkbox"/>
                <p>Write something here</p>        
            </div>   
         );
    }
}

export default ToDoItem;