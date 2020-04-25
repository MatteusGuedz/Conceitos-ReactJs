import React from 'react'
import ReactDOM from 'react-dom'
// import Primeiro from './components/PrimeiroComponente'
// import  ComProps from './components/Props'
// import {CompA, CompB, CompC} from './components/DoisComponentes'
// import MultiElement from './components/MultiElementos';
// import FamiliaSilva from './components/FamiliaSilva'
// import Familia from './components/Familia'
// import Membro from './components/Membro'
// import CComFuncao from './components/ComponenteComFuncao'
// import Pai from './components/Pai'
//  import ComponenteClass from './components/ComponenteClass'
//import Contador from './components/Contador'
import Hook from './components/Hook'
 

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
            <Hook />
                {/* <Contador numeroInicial={2}/> */}
                {/* <ComponenteClass valor="Aloha"/> */}

                {/* <Pai /> */}
            {/* <CComFuncao /> */}

            {/* <Familia sobrenome="Silva">
                    <Membro nome="Joao" />
                    <Membro nome="Ellen" />
            </Familia> */}

            {/* <FamiliaSilva/> */}
              {/* <MultiElement /> */}
             {/* <Primeiro /> */}
              {/* <ComProps nome="Mouse"/> */}
           
            {/* <CompA valor="Ola eu A!"/>
            <CompB valor="Ola eu B!"/>
            <CompC valor="Ola eu C!"/> */}

            

    </div>
    , elemento)