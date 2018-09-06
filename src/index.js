import React from "react"
import ReactDOM from "react-dom"
import  { Route, NavLink, HashRouter }  from  "react-router-dom";
import Home from "./Home"
import Content from "./Content"
import Contact from "./Contact"


class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div>
                        Welcome to SPA example
                        <li> <NavLink to="/"> Home </NavLink> </li>
                        <li> <NavLink to="/content"> Content </NavLink> </li>
                        <li> <NavLink to="/contact"> Contact </NavLink> </li>
                    </div>
                    <Route exact path="/" component={Home} />
                    <Route path="/content" component={Content} />
                    <Route path="/contact" component={Contact} />
                </div>
            </HashRouter>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#container")
)
