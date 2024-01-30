import React from 'react';
import TodoItem from './TodoItem';
import '../Styles/Todo.modules.css'
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
        setTodos(todos.filter((todo)=>(
            todo.id!==id
        )))
    }

    const completionStatus=(id)=>{
        setTodos(todos.map(todo => {
            if (todo.id === id) {
            return {...todo, completion: !todo.completed};
            } else {
            return todo;
            } 
            }));
    }

  return (
    <>
        <div className="todo-container">
            <div className="input-btn">
                <input type="text" placeholder='Add Todo' onChange={(e)=>setText(e.target.value)} />
                <button className="btn" onClick={()=>AddTask(text)}>Add</button>
            </div>
            
            {todos.map((todo)=>(
                <TodoItem todoItem={todo} deleteTodoItem={deleteTodo} TodoCompletionStatus={completionStatus} />
            ))}
        </div>
    </>
  )
}

export default Todo