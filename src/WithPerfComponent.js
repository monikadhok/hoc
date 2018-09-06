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
            console.log("Perf : mounted!");
            console.timeStamp("HOCMounted")

            window.addEventListener('snapshotTaken1', () => {
                this.setState({ showComponent: false }, () => {
                    console.log("Perf >>>>> unmounted!");
                    console.timeStamp("HOCUnmounted");
                    window.addEventListener('snapshotTaken2', () => {
                        this.setState({ showComponent: true }, () => {
                            console.log("Perf >>>>> mounted again!");
                            console.timeStamp("HOCMountedAgain");
                            window.addEventListener('snapshotTaken3', () => {
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