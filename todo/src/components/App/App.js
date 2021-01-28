import React from 'react'
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';

const App = () => {
  const todoData = [
    { label: "Drink Cofee", important: false, id: 1},
    { label: "Learn React", important: false, id: 2},
    { label: "Make Awesome App", important: true, id: 3}
  ];
  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList todos={todoData}/>
    </div>
  ) 
}

export default App;