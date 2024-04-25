import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { AppRoot } from "./components/AppRoot";
import { Online } from "./components/Online";
import { IsIntervalComponent } from "./components/IsIntervalComoponent";

function App() {

  return (
    <>
      <AppRoot />
      <Online />
      <IsIntervalComponent />
    </>
  )
}

export default App
