import React from 'react'
import InputBox from './Components/InputBox'
import './App.css'

function App() {
  return (
    <div className='main-container'>
        <div className='input-boxes'>
        <InputBox  title='Title' placeholderValue='What is title of your todo'/>
        <InputBox title='Description' placeholderValue='What is description of your todo'/>
        <button className='submit' type='submit'>Add</button>
        </div>
        
    </div>
  )
}

export default App