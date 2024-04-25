import { useState, useContext, useMemo } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

// import { CountContext } from './context';
import { countState, evenSelector } from "../store/atoms/count";
import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";

function App() {    
  return (
    <RecoilRoot>
      <CouterContainer />
      <Button />
      <IsEven />
    </RecoilRoot>
  )
}


const CouterContainer = () => {
  const count = useRecoilValue(countState);

  return (
    <div>
      {count}
    </div>
  )
}

const IsEven = () => {
  // selctor in recoil is same as useMemo we have in react, it only rerender when value changs;
  // this is a useMemo way of optimizing it, but we generally do with recoil default one which is selector;

//  const even = useMemo(() => {
//    return (count % 2 == 0)
//  }, [count]);

  const isEven = useRecoilValue(evenSelector);

  console.log("re-render")
  return (
     <div>{isEven ? "Value is even" : "value is not even"}</div>
  )
}


const Button =() => {
  const setCount = useSetRecoilState(countState);
  console.log('button-re-rendering');
  return (
  <>
     <button onClick={() => setCount(val => val - 1)}>
       decrement
     </button>
      <button onClick={() => setCount(val => val + 1)}>
        increment
      </button>
    </>
  )
}

export default App
