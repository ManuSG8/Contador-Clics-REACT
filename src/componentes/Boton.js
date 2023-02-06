import React from 'react'
import '../styles/Boton.css'

// Sintaxis de desestructuracion { texto, ... }
function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
      className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
      onClick={ manejarClic }
    >
      {texto}
    </button>
  )
}

export default Boton