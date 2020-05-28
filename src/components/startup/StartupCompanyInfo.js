import React from 'react';
import {Card, Form} from 'react-bootstrap'

class StartupCompanyInfo extends React.Component{ 

    constructor(props){
        super(props);
        this.state={
            
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
                <Form.Group>
                  
                <from onSubmit= {
                    this.handleSubmit}> 

                   
                    <input type= "number"
                            placeholder= "DIPP NO."
                            name= "DIPP_no"
                            onChange= {this.handleChange}
                    />
                     
                    <input type= "text"
                            placeholder= "Address"
                            name= "address"
                            onChange= {this.handleChange}
                    />

                    <input type= "text"
                            placeholder= "City"
                            name= "city"
                            onChange= {this.handleChange}
                    />

                    <input type= "country"
                            placeholder= "Country"
                            name= "country"
                            onChange= {this.handleChange}
                    />

                    <input type= "number"
                            placeholder= "Postal Code"
                            name= "postalCode"
                            onChange= {this.handleChange}
                    />

                    <input type= "text"
                            placeholder= "Startup Name"
                            name= "startupName"
                            onChange= {this.handleChange}
                    />

                    <input type= "text"
                            placeholder= "Startup Description"
                            name= "startupDescription"
                            onChange= {this.handleChange}
                    />

                    <input type= "url"
                            placeholder= "Startup Website URL"
                            name= "websiteURL"
                            onChange= {this.handleChange}
                    />
                    

                    <input type= "submit"
                            value= "submit"
                    />

                </from>
                </Form.Group>
                
            </div>
        );

    }
    
}

export default StartupCompanyInfo;