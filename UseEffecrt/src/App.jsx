import { useState,useEffect } from "react";


function App() {
  const[operation,setOperation]=useState('Post')
  console.log(1)
  useEffect(()=>{
    console.log('Runs whenver the component is rendered');

  },[])
  return (
    <>
      <button onClick={()=>setOperation('Post')}>Post</button>
      <button onClick={()=>setOperation('Comments')}>Comments</button>
      <button onClick={()=>setOperation('Users')}>Users</button>
      <h1>{operation}</h1>
    </>
  )
}

export default App
