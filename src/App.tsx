import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './ModeData'
import * as Decorations from './Deco';
import { Partes, BaseD, Decoracion } from './ModeData';

interface IState{
  base:String;
  pedido:Decorations.Pizza;
}
class Name extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      base:"queso",
      pedido:new Decorations.Queso(2)
    }
    console.log("creando Name");
  }
  Elementos(): Partes {
    var partesObj: Partes;
    partesObj = {
      bases: [
        {
          name: "queso",
          clase: (presio: number) => new Decorations.Queso(presio), presio: 2
        } as BaseD,
        {
          name: "Vegana",
          clase: (presio: number) => new Decorations.Vegana(presio), presio: 3
        } as BaseD,
        {
          name: "Piña",
          clase: (presio: number) => new Decorations.Pina(presio), presio: 4
        } as BaseD,
      ],
      decoraciones: [
        {
          name: "anchos",
          clase: (before: Decorations.Pizza, presio: number) => new Decorations.Anchoa(before, presio), presio: 5
        } as Decoracion,
        {
          name: "jamon",
          clase: (before: Decorations.Pizza, presio: number) => new Decorations.Anchoa(before, presio), presio: 6
        } as Decoracion,
        {
          name: "peperoni",
          clase: (before: Decorations.Pizza, presio: number) => new Decorations.Anchoa(before, presio), presio: 7
        } as Decoracion,
      ]
    };
    var partes = 0;
    console.log("partes " + typeof (partes));
    return partesObj;
  }
  setBase(element:BaseD ){
    this.setState({base:element.name,pedido:element.clase(element.presio)});
  }
  setDecoration(element:Decoracion){
    console.log("lol");
    var pedido:Decorations.Pizza=this.state.pedido;
    this.setState({pedido:element.clase(pedido,element.presio)});
  }
  render() {
    console.log(typeof (Decorations.Queso))
    var partes: Partes = this.Elementos();
    
    return (<div>
      <div>bases: {this.state.base}</div>
      <ul>
        {partes.bases.map(element => {
          return (
            <li key={element.name}>
              <button onClick={()=>{this.setBase(element)}} >{element.name}</button>
              ${element.presio}
            </li>
          );
        })}
      </ul>
      <div>
        decoraciones
      </div>
      <ul>
        {partes.decoraciones.map(element => {
            return(
              <li key={element.name}>
              <input type="checkbox" onSelect={()=>{this.setDecoration(element)}} />
              {element.name}
            </li>
            )
        })}
      </ul>
      <div>
        precio:
      </div>
    </div>)
  }
}

/*
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default Name;
