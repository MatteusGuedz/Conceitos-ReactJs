import  React from 'react'
import Filho from './Filho'

export default props  => {
    const notificando = 
      lugar =>  alert(`Liberado para o ${lugar}`)

      return (
          <div>
              <Filho  notificarSaida={notificando}/>
          </div>
      )
} 