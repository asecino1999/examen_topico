import React from 'react';
import {Vector,Adapter} from './Adapter'
//import logo from './logo.svg';
//import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// ejemplo pasar un js como un objeto 
//var dia: Pat.Dimante = new Pat.Dimante(
//  { max: Infinity, descuento: 40, millaje: 5 } as Pat.Rango, "Diamante"
//  );
interface IState {
  color:string;
  fil:number;
  col:number;
  adap:Adapter;
  tempFil:number;
  tempCol:number;
}
class App extends React.Component<{}, IState> {
  constructor(props:any){
    super(props);
    var fil=5;
    var col=3;

    this.state={
      color:"red",
      fil:fil,
      col:col,
      tempCol:col,
      tempFil:fil,
      adap:new Adapter(fil,col)
    }
  }
  setG(){
    this.setState({color:"green"} );
  }

  setValue(x:number,y:number,ev:React.ChangeEvent<HTMLInputElement>){
    var adap:Adapter=this.state.adap;
    var value:number=parseFloat(ev.target.value);
    adap.setElement(x,y,value);
    this.setState({});
  }
  setTempFil(x:number,ev:React.ChangeEvent<HTMLInputElement>){

  }

  setSize(){

  }

  render(){
  var col:Array<number>=[];
  for (let index = 0; index < this.state.col; index++) {
    col.push(index);
  }
  var fil=[]; 
  for (let index = 0; index < this.state.fil; index++) {
    fil.push(index);
  }


  return (
    <div className="App" style={ {backgroundColor: this.state.color}}>
      <button onClick={()=>this.setG()}>set size </button>
      <div> numero de filas <input type="number" value={this.state.fil} /></div>
      <div> numero de columnas <input type="number" value={this.state.col} /></div>

      <Container>
        
      {
        fil.map((element, index) => {
          //console.log("itera "+index)
          return(
            <Row key={"index"+index} >
              {
                col.map((element,index2) => {
                  //console.log("itera 2 "+index2)
                  return(<Col key={"index"+index+"index2"+index2}>
                    <input type="number" onChange={(ev)=>this.setValue(index,index2,ev)} value={this.state.adap.getElement(index,index2)}></input>
                  </Col>)
                  ;
                })
              }
          </Row>
          )
        })
      }
        
      </Container>
      <Container>
        
        {
          fil.map((element, index) => {
            //console.log("itera "+index)
            return(
              <Row key={"2index"+index} >
                {
                  col.map((element,index2) => {
                    //console.log("itera 2 "+index2)
                    return(<Col key={"2index"+index+"index2"+index2}>
                     {this.state.adap.getElement(index,index2)}
                    </Col>)
                    ;
                  })
                }
            </Row>
            )
          })
        }
          
        </Container>
    </div>
  );}
}

export default App;
