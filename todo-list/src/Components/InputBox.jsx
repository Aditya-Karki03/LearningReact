import React from 'react';
import { useState,useEffect } from 'react';
import '../Styles/InputBox.css'

function InputBox() {
  const[todo,setTodo]=useState('');
  

  //The below function was printing the same value two times even if the value was changed
  //it is because of async nature of setTodo() function, it does not change the todo immediately 
  //Hence we need to use the useEffect hook

  const TodoAdder=(e)=>{
    e.preventDefault();
    const input=document.querySelector('.text')
    setTodo(input.value)
    // console.log(todo)
  }

  useEffect(()=>{
    console.log(todo);
  },[todo])


  return (
    <>
      <div className="input-container">
        <input className='text' type="text" placeholder='Add Todo'  />
        <input type="submit" value='Add' onClick={TodoAdder} />
      </div>
    </>
  )
}

export default InputBox