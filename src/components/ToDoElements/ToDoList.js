import React, { Component } from 'react';
import classes from './ToDoElements.module.css'
import ToDoItem from './ToDoItem'

class ListToDo extends Component {
    state = { 
        items: [
            {id: 1, value: 4, task: "Wynieś śmieci", checked: false},
            {id: 2, value: 3, task: "Obierz ziemniaki", checked: false},
            {id: 3, value: 0, task: "Wypierz skarpety", checked: false},
            {id: 14, value: 1, task: "Szpachluj ścianę", checked: false},
        ],
    }

    showAlert = (item) => {
        const items = [...this.state.items];
             const index = items.indexOf(item);
             items[index] = {...item};
             //items[index].value++;    
             this.setState({ items })
             console.log("klik", items[index].id );
    }

    handleCheckBox = (item) => {
        const items = [...this.state.items];
             const index = items.indexOf(item);
             items[index] = {...item};
             items[index].checked = !items[index].checked
             this.setState({ items })
             console.log("klik", items[index].checked, items[index].id);
    }

    render() { 
        return (
            <div>
            <div className={classes.ToDoList}> 
              {this.state.items.map(item => 
                <ToDoItem
                key={item.id}
                onCheck={this.showAlert}
                onChanged={this.handleCheckBox}
                item={item}
                > 
                <p>{item.id}</p>
                </ToDoItem>
                )}      
            </div>
            </div>
        );
    }
}
 
export default ListToDo;