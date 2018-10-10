import React, { Component } from "react"
import ReactDOM from "react-dom"

const WithPerfComponent = WrappedComponent => {
    class PerfComponent extends Component {

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
            const { forwardedRef, ...rest } = this.props;
            return (
                <div>
                    <p> {this.state.counter} </p>
                    {this.state.showComponent && <WrappedComponent {...rest} ref={forwardedRef}/>}
                </div>
            );
        }

        componentDidMount() {
            console.log("Tool : HOC : mounted!");
            this.acknowledgeMount();
          }
      
        acknowledgeMount = () => {
            // Clean the previous components with multiple unmounts.
            const timeout = 30000;
            this.setState({ counter: 1 }, () => {
              console.log("Tool : Counter incremented");
              this.setState({ counter: 2 }, () => {
                setTimeout(() => {
                  console.log("Tool : Counter incremented again");
                  console.timeStamp("HOCMounted");
                  this.unloadTheComponent();
                }, timeout);
              });
            });
          };
      
          public unloadTheComponent = () => {
            (window as any).addEventListener("HOCMounted", () => {
              console.log("Tool : Captured event: HOCMounted!!!!!");
              this.setState({ showComponent: false }, () => {
                this.acknowledgeUnmount();
              });
            });
          };
      
          public acknowledgeUnmount = () => {
            const timeout = 30000;
            console.log("Tool : after unmounted");
            this.setState({ counter: 1 }, () => {
              console.log("Tool : Counter incremented");
              this.setState({ counter: 2 }, () => {
                setTimeout(() => {
                  console.log("Tool : Counter re-incremented");
                  console.log("Tool : HOCUnmounted!");
                  console.timeStamp("HOCUnmounted");
                }, timeout);
              });
            });
          };
        };
      
        return React.forwardRef((props, ref) => {
          return <PerfComponent {...props} forwardedRef={ref} />;
        });
}

export default WithPerfComponent;