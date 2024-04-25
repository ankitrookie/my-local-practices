import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { MainComponent } from "../components/MainComponent"
import { NameContext } from "./context";

function App() {
  const [name, setName] = useState("Ankit");
  const [lastName, setLastName] = useState("Mukhia")

  return (
    <>
      <NameContext.Provider value={name}> 
        <MainComponent />
      </NameContext.Provider>
    </>
  )
}

export default App
