import React, { Component } from 'react';
import classes from './App.module.css'
import ToDoItem from './ToDoItem'

class ListToDo extends Component {
    state = {  }
    render() { 
        return (
            <div className={classes.ToDoList}> 
                <ToDoItem/> 
                <ToDoItem/>
                <ToDoItem/>             
            </div>
        );
    }
}
 
export default ListToDo;