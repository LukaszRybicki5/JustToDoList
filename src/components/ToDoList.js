import React, { Component } from 'react';
import classes from '../App.module.css'
import ToDoItem from './ToDoItem'

class ListToDo extends Component {
    state = {  }
    render() { 
        return (
            <div className={classes.ToDoList}> 
                <ToDoItem name="Interesting"/> 
                <ToDoItem name="Curios"/>
                <ToDoItem name="Funny"/>             
            </div>
        );
    }
}
 
export default ListToDo;