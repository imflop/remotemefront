import React from 'react';

import './App.scss';
import Header from "./header/Header";

const App: React.FunctionComponent = ({children}) => {
    return (
        <>
            <Header />
            <main className="container">
                {children}
            </main>
        </>
    );
};

export default App;