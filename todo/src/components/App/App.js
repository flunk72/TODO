import React, { Component } from 'react'
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import { Filter } from '../Filter/Filter'
import { AddItem } from '../AddItem/AddItem';
import './App.css'

export default class App extends Component {
  maxId = 100;
  state = {
    todoData : [
      { label: "Drink Cofee", important: false, id: 1},
      { label: "Learn React", important: false, id: 2},
      { label: "Make Awesome App", important: true, id: 3}
    ]
  }

  deleteItem = (id) => {
    this.setState(({todoData})=> {
      const idx = todoData.findIndex((el) => el.id === id)

      const newArray = [ ...todoData.slice(0, idx), ...todoData.slice(idx + 1) ]
      return {
        todoData: newArray
      }
    })
  }
  onItemAdded = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState(({todoData}) => {
      const newArr = [
        ...todoData, newItem
      ]
      return {
        todoData: newArr
      }
    })
  }

  onToggleImp = (id) => {
    console.log("fffff", id);
    
  }

  onToggleDone = (id) => {
    console.log("dddd", id);
  }
  render() {
    return(
      <div className="todo-app">
      <AppHeader toDo={3} done={1}/>
      <div className="top-panel d-flex">
        <SearchPanel/>
        <Filter/>
      </div>
        <TodoList todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImp={this.onToggleImp}
          onToggleDone={this.onToggleDone}
        />
        <AddItem onItemAdded={this.onItemAdded}/>
    </div>
    )
  }
}