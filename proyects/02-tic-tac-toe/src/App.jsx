import { useState } from 'react'
import './App.css'

// Necesitamos conocer los turnos de los jugadores
const TURNS = {
  X: 'x',
  O: 'o'
}

// Cada celda del tablero se llamará Square
// Square es un componente separado de la App que ya se puede reutilizar
const Square = ({ children, isSelected, updateBoard, index }) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={className} key={index} onClick={handleClick}>
      {children}
    </div>
  )
}

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

  // Es necesario crear la función que actualiza el tablero, se encarga de cambiar los turnos, y de saber quién es el ganador, etc.
  const updateBoard = (index) => {

    //! Hacemos una copia del board para no mutar la prop original
    const newBoard = [...board]

    // Si la casilla ya está ocupada, no se puede hacer nada
    if (board[index]) {
      return
    }

    // Actualizamos el tablero X u O
    newBoard[index] = turn
    setBoard(newBoard)

    console.log('index :>> ', index);

    // Lo primero vamos a cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X

    // Actualizamos el turno
    setTurn(newTurn);
  }

  // Necesitamos visualmente saber cuál es el turno del jugador

  // Necesitamos saber quién es el ganador

  return (
    <main className='board'>
      <h1>3 en raya</h1>
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
    </main>
  )
}

export default App