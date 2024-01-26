import './App.css'
import { useState } from 'react';
import InputBox from './Components/InputBox'
import useCurrencyInfo from './Hooks/useCurrencyInfo'



function App() {
const[from,setFrom]=useState(0);
const[to,setTo]=useState(0);
const[fromCurrencyType,setFromCurrencyType]=useState('usd');
const[toCurrencyType,setToCurrencyType]=useState('inr');


const currencyandValues=useCurrencyInfo(fromCurrencyType.toLowerCase());
// console.log(currencyandValues)


// [toCurrencyType][toCurrencyType]
const Options=Object.keys(currencyandValues)
// console.log(Options)

const conversion=()=>{
setTo(currencyandValues[toCurrencyType]*from);
}

const swap=()=>{
  setFrom(to);
  setTo(from);
  setFromCurrencyType(toCurrencyType);
  setToCurrencyType(fromCurrencyType);
}

  return (
    <div className="App">
      <InputBox label='from' defaultcurrencyValue={fromCurrencyType} currencyType='Currency Type' currencyOptions={Options}  value={from} OnValueChange={(newFromValue)=>setFrom(newFromValue)} currencyValue={fromCurrencyType} changedCurrency={(newfromCurrencyType)=>setFromCurrencyType(newfromCurrencyType)} />
       <button className='swap button' onClick={swap}>Swap</button>
      <InputBox label='to' defaultcurrencyValue={toCurrencyType} currencyType='Currency Type' currencyOptions={Options} value={to} OnValueChange={(newToValue)=>setTo(newToValue)}  currencyValue={toCurrencyType} changedCurrency={(newToCurrencyType)=>setToCurrencyType(newToCurrencyType)} disabledValue={true} />
      <button className='convert button' onClick={conversion}>Convert</button>
    </div>
  );
}

export default App;
