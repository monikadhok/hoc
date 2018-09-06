import React, { Component } from "react"
import ReactDOM from "react-dom"

const WithPerfComponent = WrappedComponent => {
    return class NewComponent extends Component {

        constructor(props) {
            super(props);
            this.state = {
                showComponent: true
            }
        }

        render() {
            return (
                <div>
                    {this.state.showComponent && <WrappedComponent />}
                </div>
            );
        }
        componentWillMount(){
            console.timeStamp("HOCWillMount")
        }

        componentDidMount() {
            console.log("Perf : mounted!");
            console.timeStamp("HOCMounted")
            this.setState({
                showComponent: false
            })
            console.log("Perf >>>>> unmounted!");
            console.timeStamp("HOCUnmounted")
            setTimeout(() => {
                this.setState({
                    showComponent: true
                })
                console.log("Perf >>>>> mounted again!");
                console.timeStamp("HOCMountedAgain")
            }, 1000);

        }

        componentWillUnmount() {
            console.log("Perf : about to unmount!");
        }
    };
}

export default WithPerfComponent;