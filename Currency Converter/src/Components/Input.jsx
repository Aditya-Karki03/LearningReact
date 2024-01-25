import React from 'react'
import '../Styles/Input.css'
function Input(props) {
  return (
    <>
      <div className="from-container">
        <div className="labels">
        <label>{props.label}</label>
        <label>{props.currencyType}</label>
        </div>
        <div className="amount-currency">
          <input type="text" value={props.amount}/>
        </div>
      </div>
    </>
  )
}

export default Input;
// So the value of Number(e.target.value) is provided to the callback function with argument as amount and then the setAmount sets the amount in the UI is that correct