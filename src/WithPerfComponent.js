import React, { Component } from "react"
import ReactDOM from "react-dom"

const WithPerfComponent = WrappedComponent => {
    return class NewComponent extends Component {

        constructor(props) {
            super(props);
            this.state = {
                counter: true,
                showComponent: true
            }
            this.addEventListeners = this.addEventListeners.bind(this);
            this.unmounted = this.unmounted.bind(this);
            this.cleanStateAddListeners = this.cleanStateAddListeners.bind(this);
        }

        render() {
            return (
                <div>
                    <p> {this.state.counter} </p>
                    {this.state.showComponent && <WrappedComponent />}
                </div>
            );
        }

        cleanStateAddListeners() {
            //Clean the previous components with multiple unmounts.
            setTimeout(() => {
                this.setState({ counter: 1 }, () => { });
            }, 2000);
            setTimeout(() => {
                this.setState({ counter: 2 }, () => { });
                console.log("Counter incremented again");
                this.addEventListeners();
                console.timeStamp("HOCMounted");
            }, 5000);
        }

        addEventListeners() {
            window.addEventListener('HOCMounted', () => {
                console.log("Captured event: HOCMounted!");
                this.setState({ showComponent: false }, () => this.unmounted);
            })
        }

        unmounted() {
            console.log("after unmounted");
            setTimeout(() => {
                this.setState({ counter: 1 }, () => { });
                console.log("Counter incremented");
            }, 2000);
            setTimeout(() => {
                this.setState({ counter: 2 }, () => { });
                console.log("Counter re-incremented");
                console.log("HOCUnmounted!");
                console.timeStamp("HOCUnmounted");
            }, 6000);
        }

        componentDidMount() {
            console.log("HOC : mounted!");
            this.cleanStateAddListeners();
        }
    }
}

export default WithPerfComponent;