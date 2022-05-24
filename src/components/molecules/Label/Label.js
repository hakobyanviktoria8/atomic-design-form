import React from 'react'
import Input from '../../atoms/Input/Input'
import LabelTitle from '../../atoms/LabelTitle/LabelTitle'
import Message from '../../atoms/Message/Message'
import "./styles.css"

function Label({title, name, value, handleChange, error}) {
  return (
    <label className='label'>
        <LabelTitle title={title}/>
        <Input name={name} value={value} handleChange={handleChange}/>
        <Message error={error}/>
    </label>
  )
}

export default Label