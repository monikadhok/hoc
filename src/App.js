/*React Router works by defining what I call a routing region. 
Inside this region are two things:
1. Your navigation links
2. The container to load your content into
There’s a close correlation between the URL your navigation links specify and 
the content that ultimately gets loaded.
*/

/* 
1) Wrap JSX in to <HashRouter>
2) Replace the links in a with NavLink 
3) Add Route
The value you specify for the path determines when this route is going to 
be active. When a route is active, the component specified by the component 
prop gets rendered. For example, when we click on the Stuff link (whose path 
is /stuff as set by the NavLink component’s to prop), the route whose path 
value is also /stuff becomes active. This means the contents of our Stuff 
component get rendered.
*/

import React from "react"
import  {   Route,   NavLink,   HashRouter }  from  "react-router-dom";
import Home from "./Home"
import Content from "./Content"
import Contact from "./Contact"

class App extends React.Component {

    componentDidMount(){
        console.log("Component App mounted!");
    }
    
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

export default App;