import React, {useMemo} from 'react';
import { API, APIContext } from '../../data/api/API';

import Header from "./header/Header";
import Footer from "./footer/Footer";

import './App.scss';

const App: React.FunctionComponent = ({children}) => {
    const api = useMemo(() => new API(), []);

    return (
        <APIContext.Provider value={api}>
            <Header />
            <div className="main-wrapper">
                {children}
            </div>
            <Footer />
        </APIContext.Provider>
    );
};

export default App;