import { useState } from 'react';

import './App.css'
import WithoutUsingHook from './Practice'

function App() {
 const[count,countUpdate]=useState(0);
  // let count=0;
  const counter=()=>{
    countUpdate(count+1)
    console.log(count);
  }
 
  return (
    <>
      <WithoutUsingHook/>
      <br />
      <button onClick={counter}>Using Hook {count}</button>
    </>
  )
}

export default App
