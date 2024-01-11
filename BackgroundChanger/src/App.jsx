
import { useState } from 'react';

import './App.css'

function App() {
  const[color,setColor]=useState('Red');
 return(
  <div className="main-container" style={{background:color,height:"100vh",display:"flex",alignItems:"end"}}>
    <div className="container" style={{background:"white", width:"100vw", display:"flex", justifyContent:"space-around",marginBottom:"20px"}}>
      <button onClick={()=>setColor('red')} style={{background:"red"}} className="Red" >Red</button>
     <button onClick={()=>setColor('Blue')} style={{background:"Blue"}} className="Blue">Blue</button>
      <button onClick={()=>setColor('Olive')} style={{background:"Olive"}} className="Olive">Olive</button>
      <button onClick={() =>{setColor('Gray')}} style={{background:"Gray"}} className="Gray">Gray</button>
      <button onClick={() =>{setColor('Yellow')}}  style={{background:"Yellow", color:"Black" }} className="Yellow">Yellow</button>
      <button onClick={() =>{setColor('Pink')}} style={{background:"Pink", color:"Black" }} className="Pink">Pink</button>
      <button onClick={() =>{setColor('Purple')}} style={{background:"Purple", color:"Black" }} className="Purple">Purple</button>
      <button onClick={() =>{setColor('Lavender')}} style={{background:"Lavender", color:"Black" }} className="Lavender">Lavender</button>
      <button onClick={() =>{setColor('White')}} style={{background:"White", color:"Black" }} className="White">White</button>
      <button onClick={() =>{setColor('Black')}} style={{background:"Black", color:"White" }} className="Black">Black</button>
    </div>
  </div>
 )


}

export default App
