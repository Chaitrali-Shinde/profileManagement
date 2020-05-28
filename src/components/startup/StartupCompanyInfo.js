import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'



class StartupCompanyInfo extends React.Component{ 

   continue= e=>{
       e.preventDefault();
       this.props.nextStep();
   }
   back= e=>{
    e.preventDefault();
    this.props.prevStep();
}
            
        

    render(){

        const {values, handleChange}= this.props;

        return(
        
                <MuiThemeProvider>
                  <React.Fragment>
                      <TextField
                      hintText= "Enter Company Name"
                      floatingLabelText= "Company Name"
                      onChange= {handleChange('startupName')}
                      defaultValue= {values.startupName}
                      />
                       <TextField
                      hintText= "Enter Startup Description"
                      floatingLabelText= "Descripyion"
                      onChange= {handleChange('startupDescription')}
                      defaultValue= {values.startupDescription}
                      />
                       <TextField
                      hintText= "Enter Website URL"
                      floatingLabelText= "URL"
                      onChange= {handleChange('webSiteURL')}
                      defaultValue= {values.webSiteURL}

                      />
                       <TextField
                      hintText= "Enter Domain"
                      floatingLabelText= "Domain"
                      onChange= {handleChange('domain')}
                      defaultValue= {values.domain}

                      />
                       <TextField
                      hintText= "Enter DIPP Number"
                      floatingLabelText= "DIPP No."
                      onChange= {handleChange('DIPP_no')}
                      defaultValue= {values.DIPP_no}

                      />
                       <TextField
                      hintText= "Enter Address"
                      floatingLabelText= "Address"
                      onChange= {handleChange('address')}
                      defaultValue= {values.address}

                      />
                         <TextField
                      hintText= "Enter City"
                      floatingLabelText= "city"
                      onChange= {handleChange('city')}
                      defaultValue= {values.city}

                      />
                       <TextField
                      hintText= "Enter Country"
                      floatingLabelText= "country"
                      onChange= {handleChange('country')}
                      defaultValue= {values.country}

                      />
                       <TextField
                      hintText= "Enter Postal Code"
                      floatingLabelText= "Postal Code"
                      onChange= {handleChange('postalCode')}
                      defaultValue= {values.postalCode}

                      />
                     
                      
                      <RaisedButton
                        label="Continue"
                        primary= {true}
                        onClick= {this.continue}
                      />

                    <RaisedButton
                        label="Back"
                        primary= {false}
                        onClick= {this.back}
                      />
                  </React.Fragment>
         
                </MuiThemeProvider>
                
       
        );

    }
    
}

export default StartupCompanyInfo;