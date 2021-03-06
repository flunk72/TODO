import React from 'react'
import { TodoListItem } from '../TodoListItem/TodoListItem'
import "./TodoList.css"

const TodoList = ({todos, onDeleted, onToggleDone, onToggleImp}) => {
  const elements = todos.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem 
          { ... itemProps }
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImp={()=> onToggleImp(id)}
        />
      </li>
    )
  })
  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  )
}

export default TodoList;