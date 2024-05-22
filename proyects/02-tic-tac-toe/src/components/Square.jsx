
/**
 * Componente que representa una casilla del tablero
 * 
 * @param {Any} children - Los hijos del componente
 * 
 * @param {boolean} isSelected - Si el cuadro está seleccionado
 * @param {function} updateBoard - La función que se encarga de actualizar el tablero
 * @param {number} index - El índice de la casilla
 *  
 * @returns {JSX.Element} - El JSX del componente
 */
export default function Square({ children, isSelected, updateBoard, index }) {

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