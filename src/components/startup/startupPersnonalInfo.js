import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import { AppBar } from 'material-ui';



class StartupPersonalInfo extends React.Component{ 

   continue= e=>{
       e.preventDefault();
       this.props.nextStep();
   }
            
        

    render(){

        const {values, handleChange}= this.props;

        return(
        
                <MuiThemeProvider>
                  <React.Fragment>
                    <h1 style= {{color: "white",
                                 backgroundColor: "#77a6f7"
                    }}>Personal Details</h1>
                    <br/>
                      <TextField
                      hintText= "Enter Firstname"
                      floatingLabelText= "Firstname"
                      onChange= {handleChange('firstname')}
                      defaultValue= {values.firstname}
                      />
                      <br/>
                       <TextField
                      hintText= "Enter Lastname"
                      floatingLabelText= "Lastname"
                      onChange= {handleChange('lastname')}
                      defaultValue= {values.lastname}
                      />
                      <br/>
                       <TextField
                      hintText= "Enter Age"
                      floatingLabelText= "Age"
                      onChange= {handleChange('age')}
                      defaultValue= {values.age}
                      />
                      <br/>
                       <TextField
                      hintText= "Enter Email Address"
                      floatingLabelText= "Email"
                      onChange= {handleChange('email')}
                      defaultValue= {values.email}
                      />
                      <br/>
                       <TextField
                      hintText= "Enter Highest Qualification"
                      floatingLabelText= "Highest Qualification"
                      onChange= {handleChange('hightestquali')}
                      defaultValue= {values.hightestquali}
                      />
                      <br/>
                       <TextField
                      hintText= "Enter Phone Number"
                      floatingLabelText= "Phone No."
                      onChange= {handleChange('phnno')}
                      defaultValue= {values.phnno}
                      />
                     <br/>
                      
                      <RaisedButton
                        label="Continue"
                        primary= {true}
                        onClick= {this.continue}
                      />
                  </React.Fragment>
         
                </MuiThemeProvider>
                
       
        );

    }
    
}

export default StartupPersonalInfo;