import React, { Component } from 'react';

// import { Container } from './styles';

export default class Contador extends Component {
    state = {
        numero:this.props.numeroInicial
    }
    
    maisUm = () => {
        //    this.state.numero = this.state.numero + 1
        //this.setState({ numero: this.state.numero + 1})
        this.alterarNum(1)
        
    }

    menosUm = () => {
        //    this.state.numero = this.state.numero + 1
        //this.setState({ numero: this.state.numero - 1})
        this.alterarNum(-1)
    }

    alterarNum = diferenca => {
        //    this.state.numero = this.state.numero + 1
        this.setState({ numero: this.state.numero + diferenca})
        
    }
    
    render() {
        return (
            <div>
                <h1>Numero: {this.state.numero}</h1>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>


                <button onClick={() => this.alterarNum(10)}>Inc10</button>
                <button onClick={() => this.alterarNum(-10)}>Dec10</button>
            </div>
        )
    }
}
//1 solução
// constructor(props){
//     super(props)
//     this.maisUm = this.maisUm.bind(this)


//soluçao 2 
// <button onClick={() => this.maisUm()}>Inc</button>

//Solução 03
// maisUm = () =>{
    //   this.props.numero++
//    console.log(this)
// }