import { useEffect, useState } from 'react'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'

import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector((state) => state.todos)
  const [storedTodos,setStoredTodos]=useState([])


  
  return (
    <>
      <div className='flex flex-col justify-center items-center ' >
        <h1 className='text-3xl font-bold p-3 m-2'>Task Manager</h1>
        <AddTodo />
      </div>
      <div className=' shadow-2xl m-6  flex flex-col justify-center items-center  '>
        {todos.length>0 && todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
