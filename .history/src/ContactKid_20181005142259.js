import React from "react"
import WithPerfComponent from "./WithPerfComponent"

class ContactKid extends React.Component {

    constructor(props){
        super(props);
        let arr = new Uint8Array(1024 * 1024 * 30);
        this.state = {
            test3: arr
        }
    }

    render(){
        return(
            <p> "I am at ContactKid!"+  {this.props.name} + {this.props.age}</p>
        );
    }

    componentDidMount(){
        console.log("ContactKid : mounted!");
    }

    componentWillUnmount(){
        console.log("ContactKid : about to unmount!");
    }
}

export default WithPerfComponent(ContactKid);
//export default ContactKid;