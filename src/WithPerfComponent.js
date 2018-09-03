import React, {Component} from "react"

const WithPerfComponent = WrappedComponent =>{
    return class NewComponent extends Component{
        render() {
            return (
              <div>
                    <WrappedComponent/>
              </div>
            );
          }

          componentWillUnmount(){
              setImmediate(() => {
                console.log("Is the child component unmounted?");
              });
              console.log("Higher order component will unmount!");
          }

          componentDidMount(){
            console.log("Higher order component did mount!");
          }
        };
    }
    
export default WithPerfComponent;