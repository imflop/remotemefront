import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import "./assets/scss/styles.scss";

import App from './components/app/App';
import RouteWithSubRoutes from "./hocs/RouteWithSubRoutes";
import routes from "./pages/urls";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App>
                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </App>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
);