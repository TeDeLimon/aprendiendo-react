import { WINNER_COMBOS } from '../constants';

/**
 * Comprueba si un jugador cumple con una combinación ganadora
 * 
 * @param {Array} boardToCheck El tablero a comprobar
 * 
 * @returns String | null - El jugador que ha ganado o null si no hay ganador
 */
export const checkWinner = (boardToCheck) => {

    for (const combo of WINNER_COMBOS) {

        // Desestructuramos el array combo
        const [a, b, c] = combo

        // Verificamos si en las 3 casillas del combo existe el mismo valor y es para el mismo jugador
        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {

            return boardToCheck[a]; // Devolvemos el valor del jugador que ha ganado
        }
    }

    return null;
}

/**
 * 
 * Verifica si el juego ha terminado
 * 
 * @param {Array} boardToCheck Verifica si el juego ha terminado
 * 
 * @returns {boolean} - Si el juego ha terminado o no
 */
export const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((square) => square !== null)
}

/**
 * Otra alternativa para comprobar si un jugador cumple con una combinación ganadora
 * 
 * @param {Array} boardToCheck El tablero a comprobar
 * 
 * @returns boolean - Si hay un ganador o no
 */
export const checkWinnerAlternative = (boardToCheck) => {

    // Primero comprobamos las filas 
    for (let i = 0; i < 9; i += 3) {
        if (boardToCheck[i] && boardToCheck[i] === boardToCheck[i + 1] && boardToCheck[i] === boardToCheck[i + 2]) {
            return true
        }
    }

    // Verificamos las columnas
    for (let i = 0; i < 3; i++) {
        if (boardToCheck[i] && boardToCheck[i] === boardToCheck[i + 3] && boardToCheck[i] === boardToCheck[i + 6]) {
            return true
        }
    }

    // Verificamos las diagonales de izquierda a derecha
    if (boardToCheck[0] && boardToCheck[0] === boardToCheck[4] && boardToCheck[0] === boardToCheck[8]) {
        return true
    }

    // Verificamos las diagonales de derecha a izquierda
    if (boardToCheck[2] && boardToCheck[2] === boardToCheck[4] && boardToCheck[2] === boardToCheck[6]) {
        return true
    }

    return false;
}