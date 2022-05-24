import React from 'react'
import "./styles.css"

function Message({error}) {
  return (
    <div className='Message'>{error}</div>
  )
}

export default Message