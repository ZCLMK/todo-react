import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './todoList.css';

class TodoList extends React.Component {
  constructor(props){
      super(props);
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.state = {
        items:[]
      }
    }
componentDidMount() {

const storageKeys  = Object.keys(window.localStorage)
let itemsOnRefresh = []
storageKeys.forEach((key) =>{
  let item = {}
  item["key"] = key
  item['text'] = window.localStorage.getItem(String(key))
itemsOnRefresh.push(item)
})

this.setState({items: itemsOnRefresh})
}
  addItem(e){
    if( /[A-Za-z0-9]/.test(this._inputElement.value)){  // string needs to contain at least one number of letter (cap or not)

      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      }
      localStorage.setItem(String(newItem.key), newItem.text)

            //----------------------------------------------Local storage-----------------------------------------------------
      this.setState((prevState) => {
        return {
          // concat allows us to work with a copy of the 'items' array (immutability of state)
          items: prevState.items.concat(newItem)
        }
      })
      this._inputElement.value = ""
      // console.log(this.state.items)
      console.log(window.localStorage)
      e.preventDefault()
    }
  }
    deleteItem(key) {
      
     let filteredItems = this.state.items.filter((item) => item.key !== key)
     window.localStorage.removeItem(String(key))
    //  console.log(window.localStorage)
    this.setState({items: filteredItems})
      }

  
  render() {
    return(
      <div className="todoListMain">
        <div className="header">
          <h1> Todo list</h1>
          <form onSubmit={this.addItem}>
            <input 
              type="text" 
              placeholder="Ajouter une tâche..."
              ref={(a) => this._inputElement = a}
              ></input>
            <button type="submit">Créer</button>
          </form>
        </div>
        <div id="the-list">
        <TodoItems entries={this.state.items}
                              delete={this.deleteItem}/>
        </div>
      </div>
    )
  }
}

export default TodoList;