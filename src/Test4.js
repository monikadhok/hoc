import React from "react"
class Test4 extends React.Component {
    render(){
        return(
            <p> "Test4" </p>
        );
    }

    componentDidMount(){
        let arr = new Uint8Array(1024 * 1024 * 30);
        this.setState({
            test: arr
        });
        console.log("Content : mounted!");
    }

    componentWillUnmount(){
        console.log("Content : about to unmount!");
    }
}

export default Test4;