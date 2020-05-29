import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import StartupPersonalInfo from './startup/startupPersnonalInfo'
import StartupForm from './startup/StartupForm'
import { Link, Route } from 'react-router-dom';



export class FrontPage extends Component {
    

    render() {
        return (
            <div>
                <CardDeck>
                    <Card>
                        <Card.Img src= "logo192.png"/>
                        <Card.Title>Startup</Card.Title>
                        <Link to= "startupform">
                        <Button variant="primary" >Startup</Button>
                        </Link>
                       
                    </Card>
                    <Card>HI</Card>
                </CardDeck>
                <CardDeck>
                    <Card>
                        hi
                    </Card>
                    <Card>HI</Card>
                </CardDeck>
                 
            </div>
        )
    }
}

export default FrontPage;
