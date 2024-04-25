import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

import { ShowTodos } from '../components/ShowTodos';
import { CreateTodo } from '../components/CreateTodo'

function App() {
  const [todos, setTodos] = useState([]);

  // all fetching things happen here
   fetch('http://localhost:3000/todos')
      .then((res) => {
        
     })

  return (
    <>
      <CreateTodo />
      <ShowTodos todos={todos} />
    </>
  )
}

export default App
