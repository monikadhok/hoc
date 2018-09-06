import React from "react"
import WithPerfComponent from "./WithPerfComponent"

class Content extends React.Component {
    render(){
        return(
            <p> "I am at Content!" </p>
        );
    }

    componentDidMount(){
        console.log("Content : mounted!");
    }

    componentWillUnmount(){
        console.log("Content : about to unmount!");
    }
}

export default Content;