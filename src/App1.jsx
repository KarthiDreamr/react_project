import React,{Component} from 'react';
// import { Link } from 'react-router-dom'

class List extends Component{

  constructor(props){
    super(props)
    this.list = ["one","two","three","four"];
  }

  render(){
    return(
      <>
        <ul>
          {this.list.map((l,i) => <li key={i} >{l}</li> )}
        </ul>
      </>
    );
  }
}

export default App
