import React from "react"
import Test311 from "./testnested311"
class Test31 extends React.Component {
    render(){
        return(
            <span>
            <p> "Test31" </p>
            <Test311></Test311>
            </span>
        );
    }

    componentDidMount(){
        let arr = new Uint8Array(1024 * 1024 * 30);
        this.setState({
            test31: arr
        });
        console.log("Content : mounted!");
    }

    componentWillUnmount(){
        console.log("Content : about to unmount!");
    }
}

export default Test31;