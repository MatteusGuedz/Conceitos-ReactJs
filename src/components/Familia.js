import React from 'react'
import {FilhoComProps }from '../utils/Filhocomprops'

export default props => 
    <div>
        <h1>Familia</h1>
         {FilhoComProps(props)}
         {/* {React.cloneElement(props.children, {...props})} */}
         {/* {React.cloneElement(props.children, props)} */}
         {/* {React.cloneElement(props.children, {    sobrenome: props.sobrenome })} */}

        {/* {props.children} */}
    </div>