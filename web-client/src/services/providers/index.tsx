import React from "react";
import RecursiveRenderer from "../../hocs/RecursiveRenderer";
import Apollo from "./Apollo";

const Providers: React.ElementType = ({ children }) => {
    const providers = [Apollo];

    return (
        <>
            <RecursiveRenderer index={0} list={providers}>
                {children}
            </RecursiveRenderer>
        </>
    );
}

export default Providers;
