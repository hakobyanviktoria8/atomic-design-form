import React from 'react'
import "./styles.css"

function Button({text, event}) {
  return (
    <button className={`Button ${text}`} onClick={event}>{text}</button>
  )
}

export default Button