import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'



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
                      <TextField
                      hintText= "Enter Firstname"
                      floatingLabelText= "Firstname"
                      onChange= {handleChange('firstname')}
                      defaultValue= {values.firstname}
                      />
                       <TextField
                      hintText= "Enter Lastname"
                      floatingLabelText= "Lastname"
                      onChange= {handleChange('lastname')}
                      defaultValue= {values.lastname}

                      />
                       <TextField
                      hintText= "Enter Age"
                      floatingLabelText= "Age"
                      onChange= {handleChange('age')}
                      defaultValue= {values.age}
                      />
                       <TextField
                      hintText= "Enter Email Address"
                      floatingLabelText= "Email"
                      onChange= {handleChange('email')}
                      defaultValue= {values.email}
                      />
                       <TextField
                      hintText= "Enter Highest Qualification"
                      floatingLabelText= "Highest Qualification"
                      onChange= {handleChange('hightestquali')}
                      defaultValue= {values.hightestquali}
                      />
                       <TextField
                      hintText= "Enter Phone Number"
                      floatingLabelText= "Phone No."
                      onChange= {handleChange('phnno')}
                      defaultValue= {values.phnno}
                      />
                     
                      
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