import React from 'react'
import '../Styles/Item.modules.css'

function TodoItem({
    todoItem,
    deleteTodoItem,
    TodoCompletionStatus
}){
    console.log(todoItem)
    return(
<>
        <div className="main-container">
            <input className='check' type="checkbox" checked={todoItem.completion} onChange={()=>TodoCompletionStatus(todoItem.id)} />
            <p>{todoItem.msg}</p>
            <button onClick={()=>deleteTodoItem(todoItem.id)}>Delete</button>
        </div>
    </>
    )
}

 



export default TodoItem