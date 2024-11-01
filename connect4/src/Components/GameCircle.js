import React from 'react'
import '../Game.css'



const GameCircle = ({ id, className, onCircledClick }) => {

  const onClick = (id) => {
    onCircledClick(id)
  }

  return (
    <div className={`gameCircle player_0 ${className}`} onClick={() => onClick(id)}></div>
  )
}

export default GameCircle