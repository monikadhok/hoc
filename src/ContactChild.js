import React from "react"

class ContactChild extends React.Component {
    render(){
        return(
            <div>
            <p>
                "I am at ContactChild!"
            </p>
            </div>
        );
    }

    componentDidMount(){
        console.log("Component ContactChild mounted!");
    }

    componentWillUnmount(){
        console.log("Component ContactChild about to unmounted!");
    }
}

export default ContactChild;