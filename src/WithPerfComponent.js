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

        componentDidMount() {
            console.log("HOC : mounted!");
            console.timeStamp("HOCMounted")

            window.addEventListener('HOCMounted', () => {
                this.setState({ showComponent: false }, () => {
                    console.log("HOC : unmounted!");
                    console.timeStamp("HOCUnmounted");
                    window.addEventListener('HOCUnmounted', () => {
                        this.setState({ showComponent: true }, () => {
                            console.log("HOC : mounted again!");
                            console.timeStamp("HOCMountedAgain");
                            window.addEventListener('HOCMountedAgain', () => {
                                console.log("took all snapshots!")
                            })
                        })
                    })
                })
            });
        }
    }
}

export default WithPerfComponent;