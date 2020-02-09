import React, { Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Aboutme extends Component{
    render(){
        return(
            <div className="about-section">
                <Grid className="about-grid"> 
                <Cell col={6}>
                <h1>ABOUT ME</h1>
                <hr class="star-light"></hr>
                <p class="about-me-paragraph">
                    
                Hi, I am Kavitha Peesu. I have completed Master of Technology in Computer science and engineering.
       
       </p>
       
<p>I enjoy coding functional websites and applications. I love to learn new technologies and developing simple web applications using HTML, CSS, JavaScript, PHP and React to expertize in my profession. 

 </p>

                    </Cell>
                   </Grid>
                </div>
        )
    }
}
export default Aboutme;