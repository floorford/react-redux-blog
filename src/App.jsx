import React from "react";

import {
    Route,
    Switch,
} from "react-router-dom";

import Header from "./components/Header";
import FourOhFour from "./components/FourOhFour";

import Articles from "./containers/Articles/Articles";
import Article from "./containers/Articles/Article";
import Add from "./components/Articles/Add";
import Edit from "./containers/Articles/Edit";
import Tags from "./containers/Articles/Tags";


const App = () => (
    <React.Fragment>
        { /* header should show on all pages */ }
        <Header subtitle="Very insightful">My Blog</Header>

        { /* route switch, to handle 404s */ }
        <Switch>
            { /* the articles list */ }
            <Route exact path="/" component={ Articles } />

            { /* show the add form - has to come before :id so "add" doesn't get treated as an id  */ }
            <Route exact path="/articles/add" component={ Add } />

            { /* pass through the id to the container */ }
            <Route exact path="/articles/:id" render={ ({ match }) => (
              <Article id={ +match.params.id } /> )}
            />

            <Route exact path="/articles/:id/edit" render={ ({ match }) => (
              <Edit id={ +match.params.id } /> )}
            />

            <Route exact path="/tags/:tag" render={ ({ match }) => (
              <Tags tag={ match.params.tag } /> )}
            />

            { /* 404 page */}
            <Route component={ FourOhFour } />
        </Switch>

    </React.Fragment>
);

export default App;
