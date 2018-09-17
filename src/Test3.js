import React from "react"
import Test31 from "./testNested31"
class Test3 extends React.Component {
    render(){
        console.log("Rendering","Test 3");
        return(
            <span>
            <p> "Test3" </p>
            <Test31></Test31>
            </span>
        );
    }

    componentDidMount(){
        let arr = new Uint8Array(1024 * 1024 * 30);
        this.setState({
            test3: arr
        });
        console.log("Content : mounted!");
    }

    componentWillUnmount(){
        console.log("Content : about to unmount!");
    }
}

export default Test3;