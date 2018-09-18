import React from "react"
import ReactDOM from "react-dom"
import  { Route, NavLink, HashRouter }  from  "react-router-dom";
import Home from "./Home"
import Content from "./Content"
import Contact from "./Contact"
import Test1 from "./Test1"
import Test2 from "./Test2"
import Test3 from "./Test3"
import Test4 from "./Test4"
import Test5 from "./Test5"



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
                        <li> <NavLink to="/test1"> Test1 </NavLink> </li>
                        <li> <NavLink to="/test2"> Test2 </NavLink> </li>
                        <li> <NavLink to="/test3"> Test3 </NavLink> </li>
                        <li> <NavLink to="/test4"> Test4 </NavLink> </li>
                        <li> <NavLink to="/test5"> Test5 </NavLink> </li>
                    </div>
                    <Route exact path="/" component={Home} />
                    <Route path="/content" component={Content} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/test1" component={Test1} />
                    <Route path="/test2" component={Test2} />
                    <Route path="/test3" component={Test3} />
                    <Route path="/test4" component={Test4} />
                    <Route path="/test5" component={Test5} />
                </div>
            </HashRouter>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#container")
)
