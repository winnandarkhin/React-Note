import React, { useEffect, useState } from 'react'
import { Header } from "./Header";
import { Footer } from "./Footer";
import GameCircle from "./GameCircle";
import { getComputerMove, isDraw, isWinner } from "../helper";
import { GAME_STATE_PLAYING, PLAYER_1, PLAYER_2, NO_PLAYER, NO_CIRCLES, GAME_STATE_WIN, GAME_STATE_DRAW } from '../constant';
import "../Game.css";


const GameBoard = () => {

  const [gameBoard, setGameBoard] = useState(new Array(NO_CIRCLES).fill(NO_PLAYER))
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING)
  const [winPlayer, setWinPlayer] = useState(NO_PLAYER)

  useEffect(() => {
    initGame()
  }, [])

  const initGame = () => {
    console.log("initGame")
    setGameBoard(new Array(NO_CIRCLES).fill(NO_PLAYER))
    setCurrentPlayer(PLAYER_1)
    setGameState(GAME_STATE_PLAYING)
  }

  const initBoard = () => {
    // setCurrentPlayer(PLAYER_1)
    // setGameBoard(Array(16).fill(NO_PLAYER))

    const circles = []
    for (let i = 0; i < NO_CIRCLES; i++) {
      circles.push(renderCircle(i))
    }
    return circles
  }

  const suggestMove = () => {
    circleClicked(getComputerMove(gameBoard))
  }

  const circleClicked = (id) => {
    console.log("clicked ", id);
    // const board = [...gameBoard]
    // board[id] = currentPlayer
    // setGameBoard(board)

    if (gameBoard[id] !== NO_PLAYER) return;

    if (gameState !== GAME_STATE_PLAYING) return;

    if (isWinner(gameBoard, id, currentPlayer)) {
      console.log("Player", currentPlayer, "wins!")
      setGameState(GAME_STATE_WIN)
      setWinPlayer(currentPlayer)
    }

    if (isDraw(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_DRAW)
      setWinPlayer(NO_PLAYER)
    }

    setGameBoard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer
        return circle
      })
    })

    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1)
    console.log("gameBoard", gameBoard)
  };


  const renderCircle = (id) => {
    return <GameCircle id={id} key={id} className={`player_${gameBoard[id]}`} onCircledClick={circleClicked}></GameCircle>
  }

  return (
    <>
      <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer} />
      <div className="gameBoard">
        {initBoard()}
      </div>
      <Footer onNewGameClick={initGame} onSuggestClick={suggestMove} gameState={gameState} />
    </>
  )
};

export default GameBoard;
