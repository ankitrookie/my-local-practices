import { useState, useEffect, useMemo, useCallback } from 'react';
import './App.css';

import { Headers } from '../component/Headers';
import { Todos } from '../component/Todos';
import { ButtonComponent } from '../component/ButtomComponent';
import { SecondComponent } from "../component/SecondComponent";

function App() {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState(1);
 //  const [counter, setCounter] = useState(0);

 // let counter = useMemo(() => {
 //   console.log("useMemo has run")
 //   let counterValue = 0;
//    for (let index = 1; index <= inputVal; index++) {
 //     counterValue = counterValue + index
 //   }
 //   return counterValue;
 // }, [inputVal])

//  useEffect(() => {
  //    let finalCounter = 0;
    //  for (let i = 1; i <= inputVal; i++) {
      //  finalCounter = finalCounter + i;
      // }
      //setCounter(finalCounter)
 // }, [inputVal])
  //

  //      <input onChange={(e) => setInputVal(e.target.value)} placeholder="put number" /> <br />
     //     Sum from 1 to {inputVal} is {counter} <br />
       //   <button onClick={() => setCount(count + 1)}>Count {count}</button>


  const  functioncallbackexample = useCallback(() => {
    console.lgo("even this normal function is doing notiong, the child component rereders, that why we use callback to memoize fucntion, so hat if state hasnt chaged we dont rerender.")
  }, [])
 
  const secondFunction = useCallback(() => {
    console.log("this is second function");
  }, [])

  return (
      <div>
          <ButtonComponent  functioncallbackexample={functioncallbackexample} /> <br />
          <SecondComponent secondFunction={secondFunction} /> <br />
          <button onClick={() => setCount(count + 1)}>
            Count {count}
          </button>
      </div>
  )
}


/* Wrapper Element (<div>):

Provides a single parent element.
Optimizes updates within that parent.
Only re-renders specific components that change.
Fragment (<>...</>):

Acts as a placeholder without adding DOM elements.
Doesn't optimize updates like a div wrapper.
Re-renders entire fragment and its children if any part changes.
Efficiency:

div wrappers lead to more efficient updates.
Fragments avoid extra DOM elements but may lack optimization.
Practical Example (Lego Blocks):
A
div is like organizing Lego blocks in a labeled box.
Changing one block (component) is easy within the box.
Fragment is like scattering blocks on a table without a box.
Changing one block requires handling all blocks, even if only one changed.

*/

export default App
