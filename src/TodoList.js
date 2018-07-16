import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './todoList.css';

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[]
    }
    this.addItem = this.addItem.bind(this);
    }

  addItem(e){
    if(this._inputElement.value !== ""){
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      }
      this.setState((prevState) => {
        return {
          // concat allows us to work with a copy of the 'items' array (immutability of state)
          items: prevState.items.concat(newItem)
        }
      })
      this._inputElement.value = ""
      console.log(this.state.items)
      e.preventDefault()
    }

  }
  render() {
    return(
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input 
              type="text" 
              placeholder="Ajouter une tâche..."
              ref={(a) => this._inputElement = a}
              ></input>
            <button type="submit">+</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}/>
      </div>
    )
  };
}

export default TodoList;