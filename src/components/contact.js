import React, { Component} from 'react';
import {Grid, Cell,List, ListItem, ListItemContent,} from 'react-mdl';
import {a} from 'react-mdl';
class Contact extends Component{
    render(){
        return(
            <div className="contact-body" id="contact">
            <Grid className="contact-grid"> 
                   <Cell col={6}>
                   <h2>CONTACT ME</h2>  
                   <div className="contact-list">
               <List>
                <ListItem>


                <ListItemContent>
                    <p>
                       <a href="https://www.linkedin.com/in/kavitha-p-641505179/" target="_blank" rel="noopener noreferrer">
                       <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                       </p>
                        <p>
                            <strong>Linkedin</strong>
                        <br/>
                        <br/>
                      </p>
                  </ListItemContent>

                <ListItemContent>
                    <p>
                       <a href="https://github.com/Kavitha-dev" target="_blank" rel="noopener noreferrer">
                       <i class="fa fa-github" aria-hidden="true"></i>
                        </a>
                       </p>
                        <p>
                            <strong>GitHub</strong>
                        <br/>
                        <br/>
                      </p>
                  </ListItemContent>

                  <ListItemContent>
                      <p>
                       <i class="fa fa-phone fa-3x" aria-hidden="true"></i>
                     </p>
                       <p>
                         <strong>Phone:</strong>
                       <br/>+358451374666
                      </p>
                  </ListItemContent>

                  <ListItemContent>
                      <p>
                       <i class="fa fa-envelope fa-3x" aria-hidden="true"></i>
                       </p>
                       <p>
                          <strong> Email:</strong>
                      
                       <br/>kavitha.peesu1@gmail.com
                      </p>
                  </ListItemContent>

                  
                </ListItem>
                </List>
                </div>
                   </Cell>
                   </Grid>
                </div>
        )
    }
}
export default Contact;