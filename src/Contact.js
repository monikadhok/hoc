import React from "react"
import WithPerfComponent from "./WithPerfComponent"
import ContactChild from "./ContactChild"

class Contact extends React.Component {
    constructor(props){
        super(props);

        this.state = {
           aVal:1, 
           bVal:2,
           cVal:3,
           dVal:4,
           eVal:5,
           fVal:6,
           gVal:7,
           hVal:8,
           iVal:9,
           jVal:10
        }
    }

    render(){
        return(
            <div>
            <p>
                "I am at Contact!"
            </p>
             <div>
                {this.state.aVal}
                {this.state.eVal}
            </div>
            <ContactChild/>
            </div>
        );
    }

    componentDidMount(){
        console.log("Component Contact mounted!");
    }

    componentWillUnmount(){
        console.log("Component Contact about to unmounted!");
    }
}

export default WithPerfComponent(Contact);