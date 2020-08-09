import React, { Component } from 'react';
import classes from './ToDoElements.module.css'
import ToDoItem from './ToDoItem'

class ListToDo extends Component {
    state = { 
        items: [
            {id: 1, value: 4, task: "Wynieś śmieci"},
            {id: 2, value: 3, task: "Obierz ziemniaki"},
            {id: 3, value: 0, task: "Wypierz skarpety"},
            {id: 14, value: 1, task: "Szpachluj ścianę"},
        ],
    }

    showAlert = (item) => {
        console.log("Hej");
        const items = [...this.state.items];
             const index = items.indexOf(item);
             items[index] = {...item};
             //items[index].value++;    
             this.setState({ items })
             console.log("klik", items[index].id );
    }

    writeGrass =() => {
        console.log("Done")
    }

    writeTrash = () => {
        console.log("Trash")
    }

    render() { 
        return (
            <div>
                <img src="https://www.rp.pl/apps/pbcsi.dll/storyimage/RP/20170316/ROH/303169854/AR/0/AR-303169854.jpg?imageversion=Artykul&lastModified=20170317143817"
                    onDrag  ={this.writeGrass}
                    onClick   ={this.writeTrash} 
                />
            <div className={classes.ToDoList}> 
              {this.state.items.map(item => 
                <ToDoItem
                key={item.id}
                onCheck={this.showAlert}
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