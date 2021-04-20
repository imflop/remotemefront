import React from "react";
import { Route, RouteProps } from "react-router-dom";


type Modify<T, R> = Omit<T, keyof R> & R;
export type RouteObject  = Modify<RouteProps , {
    component: React.ElementType,
}>


/**
 * Обёртка для <Route>
 * @param route
 */
const RouteWithSubRoutes = ({component: Component, ...rest}: RouteObject) => (
    <>
        <Route
            {...rest}
            render={routeProps => (
                <Component {...routeProps} />
            )}
        />
    </>
);

export default RouteWithSubRoutes;