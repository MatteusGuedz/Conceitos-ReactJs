import React from 'react'

export default props => {
    const aprovados = ['Ana', 'Paulo', 'Jośe', 'Rayza']
    const gerarItem = item => {
         return  item.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItem(aprovados)}
        </ul>
    )
}