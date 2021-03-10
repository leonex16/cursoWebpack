import React, { Component } from 'react';

export class HelloWorld extends Component{
  render(){
    return(
      <div className="">
        <h1>Hello World con {this.props.name}</h1>
      </div>
    )
  }
}