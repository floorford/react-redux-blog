import React from "react";
import ReactDOM from "react-dom";

// import the Router component
import history from "./history";
import { Router } from "react-router-dom";

// redux and react-redux relevant imports
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./data/reducer";
import initial from "./data/initial";

// import the App component
import App from "./App";

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// wrap the app in Router
// pass our articles through to App using props
ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root"),
);
