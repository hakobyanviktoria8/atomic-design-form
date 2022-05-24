import React from 'react'
import "./styles.css"

function Input({name, value, handleChange}) {
  return (
    <div className='Input'>
        <input type="text" name={name} value={value} onChange={handleChange} />
    </div>
  )
}

export default Input