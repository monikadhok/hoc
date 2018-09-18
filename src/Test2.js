import React from "react"
class Test2 extends React.Component {
    render(){
        return(
            <p> "Test2" </p>
        );
    }

    componentDidMount(){
        console.log("Content : mounted!");
    }

    componentWillUnmount(){
        console.log("Content : about to unmount!");
    }
}

export default Test2;