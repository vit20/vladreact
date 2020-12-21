import React from 'react';
import TodoList from './Todo/TodoList'



function App() {
let todos = [
  {id:1, completed: false, title: "cup chleb "},
  {id:2, completed: false, title: "cup maslo "},
  {id:3, completed: false, title: "cup mleko "},
]

function toggleTodo(id) {
  todos =todos.map(todo =>{
    if (todo.id === id){
      todo.completed = !todo.completed
    }
    return todo
  })
}

  return(
  <div className="wrapper">
    <h1>123</h1>
    <TodoList todos={todos} onToggle={toggleTodo}/>
  </div>
  
  )
}


export default App;
