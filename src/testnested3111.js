import React from "react"
class Test3111 extends React.Component {
    render(){
        return(
            <p> "Test3111" </p>
        );
    }

    componentDidMount(){
        let arr = new Uint8Array(1024 * 1024 * 30);
        this.setState({
            test3111: arr
        });
        console.log("Content : mounted!");
    }

    componentWillUnmount(){
        console.log("Content : about to unmount!");
    }
}

export default Test3111;