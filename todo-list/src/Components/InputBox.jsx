import React from 'react'
import '../Styles/InputBox.css'

function InputBox({
    title,
    placeholderValue
}) {
  return (
    <div className="input-container">
        <h2>{title}</h2>
        <input type="text" placeholder={placeholderValue} />
    </div>
  )
}

export default InputBox