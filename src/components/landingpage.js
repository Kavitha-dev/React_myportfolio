import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';
class LandingPage extends Component{
    render(){
        return(
            <div className="landing-section">
                <Grid className="landing-grid">
               <Cell col={12}>
              <h1>Web Developer</h1>

            <hr/>
            <p>HTML | CSS | JavaScript | React | NodeJS | PHP</p>
          
            </Cell>
                         </Grid> 
                </div>
        )
    }
}
export default LandingPage;