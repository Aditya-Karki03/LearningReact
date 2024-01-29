import React from 'react';
import TodoItem from './TodoItem';
import { useState } from 'react';

function Todo() {
    const[text,setText]=useState('')
    const[todos,setTodos]=useState([
        {
            id:1,
            msg:'This is my first task',
            completion:false
        }
    ])

    const AddTask=(text)=>{
        const newTodo={
            id:Date.now(),
            msg: text,
            completion:false
        }
        setTodos([...todos,newTodo]);
        setText('');
    }

    const deleteTodo=(id)=>{

    }

    const completionStatus=(id)=>{

    }

  return (
    <>
        <input type="text" placeholder='Add Todo' onChange={(e)=>setText(e.target.value)} />
        <button className="btn" onClick={()=>AddTask(text)}>Add</button>
        {/* <TodoItem msg={text} completionStatus={completion} AllTodos={todo} /> */}
        {todos.map((todo)=>(
            <TodoItem todoItem={todo} deleteTodoItem={deleteTodo} TodoCompletionStatus={completionStatus} />
        ))}
    </>
  )
}

export default Todo