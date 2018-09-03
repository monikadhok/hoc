import React from "react"
import WithPerfComponent from "./WithPerfComponent"

class Content extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <p>
                "I am at Content!"
            </p>
        );
    }

    componentDidMount(){
        console.log("Component Content mounted!");
    }

    componentWillUnmount(){
        console.log("Component Content about to unmounted!");
    }
}

export default WithPerfComponent(Content);