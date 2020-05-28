import React, { Component } from 'react'
import StartupPersonalInfo from './startupPersnonalInfo';
import StartupCompanyInfo from './StartupCompanyInfo';

export class StartupForm extends Component {

        state={
            step: 1,
            firstname: "",
            lastname: "",
            age: "",
            email: "",
            hightestquali: "",
            phnno: "",
            userID: "",
            domain: "",
            DIPP_no: "",
            address: "",
			city: "",
			country: "",
			postalCode: "",
			startupName: "",
			startupDescription: "",
			webSiteURL: ""
        }

        //proceed to next step
        nextStep= ()=>{
            const {step}= this.state;
            this.setState({
                step: step+1
            });
        }

         //Go to previous  step
         prevStep= ()=>{
            const {step}= this.state;
            this.setState({
                step: step-1
            });
        }

        handleChange= input=> e=>{
            this.setState({
                [input]: e.target.value
            })
        }

    
    render() {

        
        const {step}= this.state;
        const {firstname, lastname, age, email, hightestquali, phnno, userID, domain, DIPP_no, 
            address, city, country, postalCode, startupName,startupDescription, webSiteURL}= this.state;
            
        const values= {firstname, lastname, age, email, hightestquali, phnno, userID, domain, DIPP_no, 
            address, city, country, postalCode, startupName,startupDescription, webSiteURL}
        
            switch(step){
                case 1: 
                    return(
                        <StartupPersonalInfo
                        handleChange= {this.handleChange}
                        nextStep= {this.nextStep}
                        values= {values}
                        />
                    )
                case 2: 
                return(
                    <StartupCompanyInfo
                    handleChange= {this.handleChange}
                    nextStep= {this.nextStep}
                    prevStep= {this.prevStep}
                    values= {values}
                    />
                    )
                case 3: 
                return(<h1>Confirm Details</h1>)
                case 4: 
                return(<h1>Success</h1>)
            }

    }
}

export default StartupForm

