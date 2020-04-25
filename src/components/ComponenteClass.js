import React, { Component } from 'react';


export default class components extends Component {
  render() {
    return (
    <h1>{this.props.valor || 'Padrao'}</h1>
    )
  }
}

