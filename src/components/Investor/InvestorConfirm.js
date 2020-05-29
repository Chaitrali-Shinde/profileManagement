import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'



class InvestorConfirm extends React.Component{ 

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

        const {values: {firstName, lastName, email, phone_no, age}}= this.props;

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
                         primaryText= "Age"
                         secondaryText= {age}
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

export default InvestorConfirm;