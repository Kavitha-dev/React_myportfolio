import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Aboutme from './aboutme';
import Projects from './projects';
import Contact from './contact';
const Main = () =>{
    return(
        
        <Switch> 
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        </Switch>
       
    );
    
}
export default Main;