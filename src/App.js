import react from 'react';
import logo from './logo.svg';
import './App.css';


class App extends react.Component{

  constructor(props){
    super(props);
    this.state = {
      int1:'',
      int2:'',
      int3:''
    }
  }

  result(){
    this.setState({
      int3 : this.state.int2 + this.state.int1
    })
  }

  
  onChangeint1(event){
    this.setState({int1 : event.target.value})

}
onChangeint2(event){
  this.setState({int2 : event.target.value})

}

  render(){
    return (
      <div className="App">
        <h1>Hello world</h1>
        <input type="number" name="in1" value={this.state.int1} onChange={(event) => this.onChangeint1(event)}/>
        <input type="number" name="in2" value={this.state.int2} onChange={(event) => this.onChangeint2(event)}/>
        
        <input type="button" name="cal" value="Calculate" onClick={() => this.result()}/> 
        <input type="number" name="int3"  value={this.state.int3}/>
      </div>
    );

  }
  
}

export default App;
