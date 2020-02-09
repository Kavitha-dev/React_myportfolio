import React from 'react';
import './App.css';
import { Layout, Header, Drawer, Navigation,Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
    <Layout>
        <Header className="header-color" title="My Portfolio" scroll>
         <Navigation>
                <Link activeClassName='is-active' to="/">Home</Link>
                <Link activeClassName='is-active' to="/aboutme">About me</Link>
                <Link activeClassName='is-active' to="/projects">Projects</Link>
                <Link activeClassName='is-active' to="/contact">Contact</Link>
                </Navigation>
        </Header>
        <Drawer title="My Portfolio">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
            
        </Drawer>
       <Content>
            <div className="page-content" />
            <Main/>
       </Content>
       </Layout>
</div>
  );
}

export default App;
