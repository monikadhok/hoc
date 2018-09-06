import React from "react"
import WithPerfComponent from "./WithPerfComponent"

class Contact extends React.Component {
    render(){
        return(
            <div>
            <p>
                "I am at Contact!"
            </p>
            </div>
        );
    }

    componentDidMount(){
        console.log("Contact : mounted!");
    }

    componentWillUnmount(){
        console.log("Contact : about to unmount!");
    }
}

export default WithPerfComponent(Contact);