import React from "react";
import { Route, RouteProps } from "react-router-dom";


export interface RouteObject extends RouteProps {
    routes?: RouteObject[];
}


/**
 * Обёртка для <Route>
 * @param route
 */
const RouteWithSubRoutes = ({component: Component, ...rest}: RouteObject) => (
    <>
        <Route
            {...rest}
            render={routeProps => (
                // @ts-ignore
                <Component {...routeProps} />
            )}
        />
    </>
);

export default RouteWithSubRoutes;