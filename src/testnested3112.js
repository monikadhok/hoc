import React from "react"
class Test3112 extends React.Component {
    render(){
        return(
            <p> "Test3112" </p>
        );
    }

    componentDidMount(){
        let arr = new Uint8Array(1024 * 1024 * 30);
        this.setState({
            test3112: arr
        });
        console.log("Content : mounted!");
    }

    componentWillUnmount(){
        console.log("Content : about to unmount!");
    }
}

export default Test3112;