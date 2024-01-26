import React from 'react'
import '../Styles/InputBox.css'

function InputBox({
  label,
  value=0,
  disabledValue=false,
  defaultcurrencyValue='usd',
  currencyOptions=[],
  OnValueChange,
  changedCurrency
}) {
  return (
    <>
        <div className="input-container">
          <div className="labels">
            <label htmlFor={label}>{label}</label>
            <label htmlFor="Currency Type">Currency Type</label>
          </div>
          <div className="inputs">
            <input type="number" value={value} disabled={disabledValue} onChange={(e)=>OnValueChange && OnValueChange(Number(e.target.value)) } />
            <select  value={defaultcurrencyValue} onChange={(e)=>changedCurrency && changedCurrency(e.target.value)}>
            {currencyOptions.map((currency)=>(
               <option  key={currency} value={currency}>{currency}</option> 
            ))}
              
            </select>
          </div>
        </div>
    </>
  )
}

export default InputBox