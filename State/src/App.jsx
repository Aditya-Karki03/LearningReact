import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let count=0;
  const counter=()=>{
    count=count+1;
    console.log(count);
  }
 
  return (
    <>
      <button onClick={counter}>{count}</button>
    </>
  )
}

export default App
