import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import Recoil
import { RootRecoil } from 'recoil';

function App() {
  const [count, setCount] = useState(0)

  return (
    <RootRecoil>
      <div>
        <Todo id={id} />
        <Todo id={id} />
      </div>
    </RootRecoil>
  )
};

const Todo = ({ id }) => {
  return (
    <>
      <div>{title}</div>
      <div>{description}</div>
    </>
  )
}

export default App
