import React from "react"
import Test3111 from "./testnested3111"
import Test3112 from "./testnested3112"
class Test311 extends React.Component {
    render(){
        return(
            <span>
            <p> "Test311" </p>
            <Test3111>
            </Test3111>
            <Test3112></Test3112>
            <Test3112></Test3112>
            <Test3112></Test3112>
            <Test3112></Test3112>
            <Test3112></Test3112>
            <Test3112></Test3112>
            <Test3112></Test3112>
            <Test3112></Test3112>
            <Test3112></Test3112>
            </span>
        );
    }

    componentDidMount(){
        let arr = new Uint8Array(1024 * 1024 * 30);
        this.setState({
            test311: arr
        });
        console.log("Content : mounted!");
    }

    componentWillUnmount(){
        console.log("Content : about to unmount!");
    }
}

export default Test311;