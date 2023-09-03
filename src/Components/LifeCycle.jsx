import React, { Component } from "react";

class LifeCycleComponent extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")
        console.log(props)
        console.log(state)
      }

    componentDidMount(){
        console.log("Component got mounted")
    }

    handleForceUpdate = () => {
        console.log("Don't Uncomment it!")
        // this.forceUpdate();
      }

    render() {
        return (
            <div>
                <h1>Heading</h1>
                <button onClick={this.handleForceUpdate()}>Force Update</button> 
            </div>
        );
    }

    componentWillUnmount(){
        console.log("Component got unmounted")
    }

    componentDidCatch(error, info) {
        // Handle the error here
        console.error(error);
        console.error(info);
      }
}

export default LifeCycleComponent;