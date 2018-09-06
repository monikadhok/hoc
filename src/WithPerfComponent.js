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
        }

        render() {
            return (
                <div>
                    {this.state.showComponent && <WrappedComponent />}
                </div>
            );
        }

        addEventListeners() {
            window.addEventListener('HOCMounted', () => {
                this.setState({ showComponent: false }, () => {
                    console.log("HOCUnmounted!");
                    console.timeStamp("HOCUnmounted");
                    window.addEventListener('HOCUnmounted', () => {
                        this.setState({ showComponent: true }, () => {
                            console.log("HOCMountedAgain");
                            console.timeStamp("HOCMountedAgain");
                            window.addEventListener('HOCMountedAgain', () => {
                                console.log("took all snapshots!")
                            })
                        })
                    })
                })
            });  
        }

        componentDidMount() {
            console.log("HOC : mounted!");
            console.timeStamp("HOCMounted");
            this.addEventListeners();
        }
    }
}

export default WithPerfComponent;