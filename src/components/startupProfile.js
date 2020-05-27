import React from 'react';
import {Card} from 'react-bootstrap'

class StartupProfile extends React.Component{ 

    constructor(props){
        super(props);
        this.state={
            name: ""
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

        handleChange(e){
            const value= e.target.value;
            const name= e. target.name;

            this.setState({
                [name]: value
            })

            return true;
        }

        handleSubmit(){

        }
            
        

    render(){

 
        return(
            <div>
                <Card>
                    <h1>hey</h1>
                </Card>
                <from onSubmit= {
                    this.handleSubmit}> 
                    <input type= "text"
                            placeholder= "name"
                            name= "name"
                            onChange= {this.handleChange}
                    />
                    <input type= "submit"
                            value= "submit"
                    />
                </from>
                
                
            </div>
        );

    }
    
}

export default StartupProfile;