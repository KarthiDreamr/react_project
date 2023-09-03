import './App.css'
import React,{Component} from 'react';

class App extends Component{

  constructor(props){
    super(props)
    this.list = ["one","two","three","four"];
  }

  render(){
    return(
      <>
        <ul class="list-group">
          {this.list.map((l,i) => <li key={i} class="list-group-item">{l}</li> )}
        </ul>
      </>
    );
  }
}

export default App
