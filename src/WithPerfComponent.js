import React, { Component } from "react"
import ReactDOM from "react-dom"

const WithPerfComponent = WrappedComponent => {
    return class NewComponent extends Component {

        constructor(props) {
            super(props);
            this.state = {
                showComponent: true
            }
            this.addEventListeners = this.addEventListeners.bind(this);
            this.mountedAgain = this.mountedAgain.bind(this);
            this.unmounted = this.unmounted.bind(this);
        }

        render() {
            return (
                <div>
                    {this.state.showComponent && <WrappedComponent />}
                </div>
            );
        }

        addEventListeners() {
            //window.addEventListener('HOCMounted', () => {
              //  this.setState({ showComponent: false }, this.unmounted);
                this.setState({ showComponent: false }, () => {});
           // })
        }

        unmounted() {
            console.log("HOCUnmounted!");
            console.timeStamp("HOCUnmounted");
            window.addEventListener('HOCUnmounted', () => {
                this.setState({ showComponent: true }, this.mountedAgain);
            });
        }

        mountedAgain() {
            console.log("HOCMountedAgain");
            console.timeStamp("HOCMountedAgain");
            window.addEventListener('HOCMountedAgain', () => {
                console.log("took all snapshots!")
            })
        }

        componentDidMount() {
            console.log("HOC : mounted!");
            console.timeStamp("HOCMounted");
            setTimeout(() => this.addEventListeners(), 10000);
        }
    }
}

export default WithPerfComponent;