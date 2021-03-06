import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'



class MentorConfirm extends React.Component{ 

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

        const {values: {firstName, lastName, email, phone_no, experience_in_Domain, qualification, method_of_contact,
            what_makes_you_a_great_mentor, about_yourself, address, city, country}}= this.props;

        return(
        
                <MuiThemeProvider>
                  <React.Fragment>
                  <h1 style= {{color: "white",
                                 backgroundColor: "#77a6f7"
                    }}>Confirm your Details</h1>
                     <List>
                         <ListItem
                         primaryText= "First Name:"
                         secondaryText= {firstName}
                          />
                     </List> <List>
                         <ListItem
                         primaryText= "Last Name:"
                         secondaryText= {lastName}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Phone No."
                         secondaryText= {phone_no}
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
                         primaryText= "experience in Domain"
                         secondaryText= {experience_in_Domain}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Qualification"
                         secondaryText= {qualification}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Method of Contact"
                         secondaryText= {method_of_contact}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "What makes you a great mentor"
                         secondaryText= {what_makes_you_a_great_mentor}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "About Yourself"
                         secondaryText= {about_yourself}
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

export default MentorConfirm;