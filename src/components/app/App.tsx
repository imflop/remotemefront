import React from 'react';

import Header from "./header/Header";
import Footer from "./footer/Footer";

import './App.scss';

const App: React.FunctionComponent = ({children}) => {
    return (
        <>
            <Header />
            <div className="main-wrapper">
                {children}
            </div>
            <Footer />
        </>
    );
};

export default App;