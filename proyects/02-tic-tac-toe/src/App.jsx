import { useState } from 'react'
import Square from './components/Square.jsx'
import WinnerModal from './components/WinnerModal.jsx'
import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './logic/board.js'
import confetti from 'canvas-confetti'
import './App.css'

//La lógica es que cuando se haga click en una casilla del tablero se actualice el board y se vuelva a renderizar
function App() {

  // Dibujar el tablero, lo rellenamos por defecto con nulos. Cuando cambie el valor de alguna casilla se actualiza el tablero
  // Posteriormente se rellenará con los valores de los jugadores (X u O)
  //const board = Array(9).fill(null)

  // Para poder actualizar el tablero necesitamos un estado
  // Board es el valor del tablero y setBoard es la función que actualiza el estado
  // Array de ejemplo: const boardEjemplo = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
  const [board, setBoard] = useState(Array(9).fill(null))

  // Necesitamos saber el turno actual - Por defecto, el turno es el de la X
  // La primera posición es el valor del estado, la segunda posición es la función que actualiza el estado
  const [turn, setTurn] = useState(TURNS.X)

  // Es necesario otro estado para comparar si hay un ganador
  const [winner, setWinner] = useState(null) // null si no hay ganador, false si hay empate, X o O si hay ganador

  // Función para reiniciar el juego, reestablecemos el estado inicial del juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  // Es necesario crear la función que actualiza el tablero, se encarga de cambiar los turnos, y de saber quién es el ganador, etc.
  const updateBoard = (index) => {

    // Si la casilla ya está ocupada o ya tenemos un ganador, no hacemos nada
    if (board[index] || winner) return;

    // Actualizamos el tablero X u O
    //! Hacemos una copia del board para no mutar la prop original (...spread operator)
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Necesitamos visualmente saber cuál es el turno del jugador
    // Lo primero vamos a cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    // Actualizamos el turno
    setTurn(newTurn);

    // Necesitamos saber quién es el ganador
    // Comprobamos si hay un ganador para el nuevo tablero
    const newWinner = checkWinner(newBoard)

    // React no actualiza el estado inmediatamente, por lo que no podemos saber si hay un ganador en el mismo momento, es asíncrono
    if (newWinner) {
      confetti() // Lanzamos los confettis
      setWinner(newWinner) // Si hay un ganador, actualizamos el estado
    }

    // Verificamos si hay empate, para ello comprobamos si todas las casillas están ocupadas y no hay ganador
    if (checkEndGame(newBoard) && !newWinner) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>3 en raya</h1>
      <button onClick={resetGame}>Reiniciar el juego</button>
      <section className='game'>
        {
          //El objetivo es renderizar por cada casilla del tablero un componente
          // updateBoard es la función que se encarga de actualizar el tablero
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App