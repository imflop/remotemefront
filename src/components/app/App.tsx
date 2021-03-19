import React from 'react';
import { Layout, Menu} from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const { Header, Content, Footer } = Layout;

import './App.scss';
import Jobs from '../jobs/Jobs';

const App = () => {
    return (
        <Router>
            <Layout>
                <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"><Link to="/">Jobs</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/create">Create</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>
                        <Switch>
                            <Route path="/">
                                <Jobs />
                            </Route>
                            {/*<Route path="/create">*/}
                            {/*    <Users />*/}
                            {/*</Route>*/}
                        </Switch>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>RemoteMe</Footer>
            </Layout>
        </Router>
    );
};

export default App;