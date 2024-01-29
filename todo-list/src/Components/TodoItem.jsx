import React from 'react'


function TodoItem({
    todoItem,
    deleteTodoItem,
    TodoCompletionStatus
}){
    console.log(todoItem)
    return(
<>
        <input type="checkbox" checked={todoItem.completion} onChange={()=>TodoCompletionStatus(todoItem.id)} />
        <p>{todoItem.msg}</p>
        <button onClick={()=>deleteTodoItem(todoItem.id)}>Delete</button>
    </>
    )
}

 



export default TodoItem