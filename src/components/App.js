import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import CoursesPage from "./courses/CoursesPage";

// If no page is found (using the path at the Route) it will retrieve the default PageNotFound component
import PageNotFound from "./PageNotFound";

function App(){
    return(
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path ="/" component={HomePage} />
                <Route path ="/about" component={AboutPage} />
                <Route path ="/courses" component={CoursesPage} />
                <Route component={PageNotFound} />
            </Switch>

        </div>
    )
}

export default App