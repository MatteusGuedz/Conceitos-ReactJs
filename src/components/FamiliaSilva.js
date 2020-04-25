import React from 'react'
import Membro from './Membro'

export default props =>
        <div>
            <Membro nome="Antonio" sobrenome={props.sobrenome} />
            <Membro nome="Sebastian" sobrenome={props.sobrenome} />
            <Membro nome="Luis" sobrenome={props.sobrenome} />
            <Membro nome="Frey" sobrenome={props.sobrenome} />
        </div>