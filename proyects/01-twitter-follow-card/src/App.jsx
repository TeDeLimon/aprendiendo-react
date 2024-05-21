import { TwitterFollowCard } from './TwitterFollowCard'
// Podemos importar el CSS de la siguiente manera:
import './App.css'

// El componente App es un componente funcional que devuelve un JSX
// Los componentes se pueden exportar para ser utilizados en otros archivos, mediante export
// En lugar de usar React.Fragment para envolver los componentes, podemos usar <></>

// Las etiquetas de los componentes se pueden usar como si fueran etiquetas HTML
// Se puede pasar una propiedad booleana true simplemente escribiendo el nombre de la propiedad

// Componente es la factoría de elementos, es una función que devuelve un elemento
// El elemento es lo que se renderiza en el navegador

// Las props o propiedades son los atributos que se le pasan a los componentes
// Las props deberían ser inmutables, no se pueden modificar desde dentro del componente

//? Cómo escribir comentarios en JSX?
// Para escribir comentarios en JSX, se pueden usar las llaves y la barra asterisco {/* */}

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true,
    id: 2786223
  },
  {
    userName: 'TeDeLimon',
    name: 'Luis Villanueva',
    isFollowing: false,
    id: 2786252
  },
  {
    userName: 'Vanderhart',
    name: 'Vanderhart',
    isFollowing: true,
    id: 2786232
  }
]

export function App() {

  // Iteramos sobre el array de usuarios y renderizamos un componente TwitterFollowCard por cada uno

  // En React, se pueden usar llaves para interpolar variables dentro de un JSX

  // La key es un atributo especial que se usa para identificar de forma única a cada elemento en un array

  const componentesUsuario = users.map(({ id, userName, name, isFollowing }) => {
    return (
      <TwitterFollowCard
        key={id}
        userName={userName}
        initialIsFollowing={isFollowing}
      >
        {name}
      </TwitterFollowCard>
    )
  })

  return (
    <section className="App">
      {componentesUsuario}
    </section>
  )
}