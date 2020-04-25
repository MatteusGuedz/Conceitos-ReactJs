import React from 'react';

// import { Container } from './styles';

const ComProps = (props) => (
    <div>
        <h1>Nome: {props.nome}</h1>
        <h2>Preço: {Math.random(2,10)} </h2>
        <h3>Conservado: {true ? 'Yes' : 'No'}</h3>
    </div>
)

export default ComProps;
