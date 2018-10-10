import React from "react"
import WithPerfComponent from "./WithPerfComponent"

class Contact extends React.Component {

    constructor(props){
        super(props);
        let arr = new Uint8Array(1024 * 1024 * 30);
        this.state = {
            test3: arr
        }
    }

    render(){
        return(
            <p> "I am at Contact!"  </p>
        );
    }

    componentDidMount(){
        console.log("ContactKid : mounted!");
    }

    componentWillUnmount(){
        console.log("Contact : about to unmount!");
    }
}

export default WithPerfComponent(Contact);