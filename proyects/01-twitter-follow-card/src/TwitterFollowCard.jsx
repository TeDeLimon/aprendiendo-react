import { useState } from 'react'
// Los hooks son funciones que nos permiten usar características para dotar de funcionalidad a los componente
// useState nos va a servir para controlar el estado del componente
// useState nos devuelve un array con dos elementos, el primero es el estado y el segundo es una función que nos permite cambiar el estado
// useState recibe un argumento que es el valor inicial del estado

//Cuando un componente padre se vuelve a renderizar, todos sus hijos también se renderizan

// Nunca jamás modifiques una prop desde dentro de un componente. Las props son inmutables.

// Children es una prop especial que permite renderizar elementos dentro de un componente, son los hijos del componente
// Children puede ser un texto, o puede ser otro componente, etc

// Cuando usar children y cuando usar props:
//* Si el componente debe ser muy extensible y puede tener muchos elementos hijos, es mejor usar children

//? Qué son los estados?
// Imaginad que estáis en una habitación y queréis saber si la luz está encendida o apagada
// Para saberlo, necesitáis un interruptor que podéis activar o desactivar
// En React, los estados son como ese interruptor, nos permiten saber si algo está activado o desactivado

//Exportamos el componente
/**
 * Componente funcional que renderiza un card de Twitter
 * 
 * @param {Any} children - Los hijos del componente
 * @param {string} userName - El nombre de usuario de Twitter
 * @param {boolean} initialIsFollowing - Si el usuario está siguiendo a otro usuario
 *  
 * @returns {JSX.Element} - El JSX del componente
 */
export function TwitterFollowCard({ children, userName = 'unkown', initialIsFollowing = false }) {

    //useState nos devuelve un array con dos elementos, el primero es el estado y el segundo es una función que nos permite cambiar el estado
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    // Creamos una función que se ejecutará cuando se haga click en el botón. Cambiará el estado de isFollowing
    const handleClick = () => setIsFollowing(!isFollowing)

    // Devolvemos el JSX del componente
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="El avatar de Midudev"
                    src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}