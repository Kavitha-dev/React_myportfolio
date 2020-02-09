import React, { Component} from 'react';
import { Tabs, Tab, Grid, Cell,Card, CardTitle, CardText, CardActions,Button, CardMenu,IconButton,a} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state={activeTab:0};
      }
      toggleCategories(){
          if(this.state.activeTab===0){
            return(

                <div className="projects-react-grid">
                     {/* Project 1 */}
             <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                 <CardTitle style={{color:'#fff', height: '176px', background:'url(https://reactjs.org/logo-og.png) center/cover'}}>React Project #1</CardTitle>
                <CardText>React portfolio website</CardText>
                <CardActions border>
                <a href="https://github.com/Kavitha-dev/React_portfolio.git" target="_blank" rel="noopener noreferrer">GITHUB</a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>

             </Card>
             {/* Project 2*/ }
             <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                 <CardTitle style={{color:'#fff', height: '176px', background:'url(https://reactjs.org/logo-og.png) center/cover'}}>React Project #2</CardTitle>
                <CardText>React content will update soon</CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
             </Card>
              
             </div>
             )
          } else if(this.state.activeTab===1){
            return(
                <div className="projects-php-grid">
                {/* Project 1 */}
        <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
            <CardTitle style={{color:'#fff', height: '176px', background:'url(https://softwarelogy.com/wp-content/uploads/2018/03/a.png) center/cover'}}>PHP Application #1</CardTitle>
           <CardText>Registration application</CardText>
           <CardActions border>
               <a href="https://github.com/Kavitha-dev/registration_application.git" target="_blank" rel="noopener noreferrer">GITHUB</a>
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
   <IconButton name="share" />
</CardMenu>

        </Card>

         {/* Project 2 */}
         <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
            <CardTitle style={{color:'#fff', height: '176px', background:'url(https://softwarelogy.com/wp-content/uploads/2018/03/a.png) center/cover'}}>PHP Application #2</CardTitle>
           <CardText>CRUD application</CardText>
           <CardActions border>
           <a href="https://github.com/Kavitha-dev/CRUD_applications.git" target="_blank" rel="noopener noreferrer">GITHUB</a>
   
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
   <IconButton name="share" />
</CardMenu>

        </Card>

{/* Project 3 */}
<Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
            <CardTitle style={{color:'#fff', height: '176px', background:'url(https://softwarelogy.com/wp-content/uploads/2018/03/a.png) center/cover'}}>PHP Application #3</CardTitle>
           <CardText>Online voting system</CardText>
           <CardActions border>
           <a href="https://github.com/Kavitha-dev/voting_app.git" target="_blank" rel="noopener noreferrer">GITHUB</a>
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
   <IconButton name="share" />
</CardMenu>

        </Card>



        </div>
            )
        }

      }
    render(){
        return(
            <div className="project-section" id="projects">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>PHP</Tab>
                </Tabs>
             
                   <Grid>
                       <Cell col={12}>
                           <div className="content"> {this.toggleCategories()}</div>
                        </Cell>
                        </Grid>
                
                </div>
        )
    }
}
export default Projects;