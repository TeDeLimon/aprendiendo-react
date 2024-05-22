/**
 * Los posibles turnos de los jugadores
 */
export const TURNS = {
    X: 'x',
    O: 'o'
}


/**
 * Las combinaciones ganadoras del juego
 */
export const WINNER_COMBOS = [
    [0, 1, 2], // Primera fila
    [3, 4, 5], // Segunda fila
    [6, 7, 8], // Tercera fila
    [0, 3, 6], // Primera columna
    [1, 4, 7], // Segunda columna
    [2, 5, 8], // Tercera columna
    [0, 4, 8], // Diagonal de izquierda a derecha
    [2, 4, 6] // Diagonal de derecha a izquierda
]