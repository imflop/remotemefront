import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import "./assets/scss/styles.scss";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from './components/app/App';
import RouteWithSubRoutes from "./hocs/RouteWithSubRoutes";
import routes from "./pages/urls";

Sentry.init({
    dsn: "https://c93339ed773d4d6ebc3c7d21350a1c1e@o578669.ingest.sentry.io/5735030",
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0, // Capture 100% of transactions
});

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