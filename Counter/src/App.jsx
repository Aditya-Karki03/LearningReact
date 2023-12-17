import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let count=5;
const addvalue= ()=>{
  console.log(`Value Added ${Math.random()}`)
}

  return (
    <>     
      <h1>Hello Guys</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={addvalue}>Add</button>
      <br />
      <button>Subtract</button>
    </>
  )
}

export default App
