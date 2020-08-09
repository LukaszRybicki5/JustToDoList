import React, { Component } from 'react';
import classes from './ToDoElements.module.css'

class ToDoItem extends Component {

  

    

    render() { 

        return ( 
            <div className={classes.ToDoItem}>   
                <input type="checkbox" onClick={() => this.props.onCheck(this.props.item)}/>
        <p>{this.props.item.task} {this.props.item.id}</p>   
            </div>   
         );
    }
}

export default ToDoItem;