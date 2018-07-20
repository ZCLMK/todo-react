import React, { Component } from 'react';
import deleteBtn from './images/deleteBtn.png'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class TodoItems extends Component {
  constructor(props){
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(item) {
    return (
      <div key={item.key} id="list-item-div">
        
        <div id="item-title">
          <p  onClick={() => this.delete(item.key)}>{item.text}</p>
        </div>
        
        <div onClick={() => this.delete(item.key)} id='delete-btn'>
          <img width='26' height='26'id='#delete-img' src={deleteBtn} alt="delete button"/>
        </div>
      
      </div>
    )
  }

  delete(key){
    this.props.delete(key);
  }
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks)
    return (
        <CSSTransitionGroup
          transitionName="task"
          transitionEnterTimeout={350}
          transitionLeaveTimeout={300}>
          {listItems}
        </CSSTransitionGroup>
    
    )
  }
}

export default TodoItems;