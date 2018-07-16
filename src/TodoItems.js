import React, { Component } from 'react';
import deleteBtn from './images/deleteBtn.png'

class TodoItems extends Component {
  createTasks(item) {
    return (
      <div id="list-item-div">
        <li key={item.key}>{item.text}></li>
        <a href='#'>
          <img width='26' height='26'id='#delete-img' src={deleteBtn} alt="delete button"/>
        </a>
      </div>
    )
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks)
    return (
      <ul className='theList'>
        {listItems}
      </ul>
    )
  }
}

export default TodoItems;