import React from "react"

class Test1 extends React.Component {
    render(){
        return(
            <p> "Test1" </p>
        );
    }

    componentDidMount(){
        console.log("Content : mounted!");
    }

    componentWillUnmount(){
        console.log("Content : about to unmount!");
    }
}

export default Test1;