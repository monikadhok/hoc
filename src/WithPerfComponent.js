import React, { Component } from "react"
import ReactDOM from "react-dom"

const WithPerfComponent = WrappedComponent => {
    return class PerfComponent extends Component {

        constructor(props) {
            super(props);
            this.state = {
                counter: true,
                showComponent: true
            }
            this.unmounted = this.unmounted.bind(this);
            this.addEventListeners = this.addEventListeners.bind(this);
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
            this.setState({ counter: 1 }, () => {
                console.log("Tool : Counter incremented");
                this.setState({ counter: 2 }, () => {
                    console.log("Tool : Counter incremented again");
                    console.timeStamp("HOCMounted");
                    this.addEventListeners();
                });
            });
        }

        addEventListeners() {
            window.addEventListener('HOCMounted', () => {
                console.log("Tool : Captured event: HOCMounted!");
                this.setState({ showComponent: false });
                setTimeout(() => {
                    this.unmounted();
                    console.log("Tool : Happened as per your demand?");
                }, 20000);

            })
        }

        unmounted() {
            console.log("Tool :  after unmounted");

            this.setState({ counter: 1 }, () => {
                console.log("Tool :  Counter incremented");
                this.setState({ counter: 2 }, () => {
                    console.log("Tool : Counter re-incremented");
                    console.log("Tool : HOCUnmounted!");
                    console.timeStamp("HOCUnmounted");
                });
            });
        }

        componentDidMount() {
            console.log("Tool : HOC : mounted!");
            this.cleanStateAddListeners();
        }

    }
}

export default WithPerfComponent;