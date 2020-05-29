import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'



class StartupConfirm extends React.Component{ 

   continue= e=>{
       e.preventDefault();
       //Api calling
       this.props.nextStep();
   }

   back= e=>{
    e.preventDefault();
    this.props.prevStep();
}
      
            
        

    render(){

        const {values: {firstname, lastname, age, email, hightestquali, phnno, userID, domain, DIPP_no, 
            address, city, country, postalCode, startupName,startupDescription, webSiteURL}}= this.props;

        return(
        
                <MuiThemeProvider>
                  <React.Fragment>
                  <h1 style= {{color: "white",
                                 backgroundColor: "#77a6f7"
                    }}>Confirm your Details</h1>
                     <List>
                         <ListItem
                         primaryText= "First Name:"
                         secondaryText= {firstname}
                          />
                     </List> <List>
                         <ListItem
                         primaryText= "Last Name:"
                         secondaryText= {lastname}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Age"
                         secondaryText= {age}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Email"
                         secondaryText= {email}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Highest Qualification"
                         secondaryText= {hightestquali}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Phone No."
                         secondaryText= {phnno}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "DIPP No."
                         secondaryText= {DIPP_no}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Startup Name"
                         secondaryText= {startupName}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Startup Description"
                         secondaryText= {startupDescription}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Startup Website URL"
                         secondaryText= {webSiteURL}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Domain"
                         secondaryText= {domain}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Address"
                         secondaryText= {address}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "City"
                         secondaryText= {city}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Country"
                         secondaryText= {country}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Postal Code"
                         secondaryText= {postalCode}
                          />
                     </List>



                      
                      <RaisedButton
                        label="Confirm and Continue"
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

export default StartupConfirm;