import Input from './Components/Input';
import './App.css';
import { useState } from 'react';


function App() {
 const[amount,setAmount]=useState(0);

  return (
    <>
      <div className="main-container">
        <div className="form-container">
          <Input
           label='From'
           currencyType='INR'  
           amount={amount}       
           
          />
          <Input
           label='To'
           currencyType='USD'          
          />
        </div>
      </div>
    </>
  );
}

export default App
