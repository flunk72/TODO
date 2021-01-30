import React, { Component } from 'react'
import './TodoListItem.css'

export class TodoListItem extends Component {

  render() {
    const { label, onDeleted, onToggleDone, onToggleImp, done, important} = this.props;

    let classNames = 'todo-list-item';
    if(done) {
      classNames += ' done';
    }
    if(important) {
      classNames += " important"
    }

    return(
      <span className={`d-flex justify-content-between ${classNames}`}>
      <span
        className="todo-list-item-label"
        onClick={onToggleDone}
      >
        {label}
        
      </span>
      <div>
        <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImp}
        >
          <i className="fa fa-exclamation" />
        </button>

      </div>
    </span>
    )
  }
}