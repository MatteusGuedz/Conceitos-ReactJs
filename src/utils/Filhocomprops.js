import React from 'react'


 export function FilhoComProps(props){
    return React.Children.map(props.children, filho => {
        return React.cloneElement(filho, {...props})
    })
}

