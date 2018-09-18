
import React from "react"
class Test5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    render(){
        return(
            <p> {this.state.counter} </p>
        );
    }

    componentDidMount(){
        setTimeout(()=> {
            this.setState({ counter: 1 }, () => {});
        }, 5000);
        setTimeout(()=> {
            this.setState({ counter: 2 }, () => {});
        }, 10000);
        setTimeout(()=> {
            this.setState({ counter: 3 }, () => {});
        }, 15000);
        setTimeout(()=> {
            this.setState({ counter: 4 }, () => {});
        }, 20000);
        setTimeout(()=> {
            this.setState({ counter: 5 }, () => {});
        }, 25000);
        console.log("Content : mounted!");
    }

    componentWillUnmount(){
        console.log("Content : about to unmount!");
    }
}

export default Test5;