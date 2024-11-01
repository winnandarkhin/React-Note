import React from 'react'
import { GAME_STATE_DRAW, GAME_STATE_PLAYING, GAME_STATE_WIN } from '../constant'

export const Header = ({ gameState, currentPlayer, winPlayer }) => {

  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return `Player ${currentPlayer} turn`
      case GAME_STATE_WIN:
        return `Player ${winPlayer} wins`
      case GAME_STATE_DRAW:
        return `Game is a draw`
      default:
        return 'Welcome to Connect Four!'
    }
  }
  return (
    <div className='panel header'>
      <div className='header-text'>{renderLabel()}</div>
    </div>
  )
}
