import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useRecoilValue, RecoilRoot } from "recoil";
import { todoAtomFamily, todoFamilyData } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
   </RecoilRoot>
  )
};

const Todo = ({ id }) => {
 // const todosValue = useRecoilValue(todoAtomFamily(id));
 
  const todos = useRecoilValue(todoFamilyData(id));
  const todosValue =  todos.data
  return  (
   <>
    {todosValue.title} <br />
    {todosValue.description}
    <br />
   </>
  )
}

export default App
