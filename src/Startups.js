import React from 'react'
import {Card, Accordion, Image, Container, Row, Col, Button} from 'react-bootstrap'


export default function Startups() {

    const uoft = require('./Images/blip.png');
    const coursera = require('./Images/astrum.png');

    const blipEndpoints = <a href={'https://blip-live.firebaseapp.com/#intro'}>Here's the API docs</a>
    const blipApp = <a href={'https://apps.apple.com/ca/app/blip-driver/id1397140753'}>Here's the driver facing app</a>
    const astrumLink = <a href={'https://www.astrum.ai'}>Astrum.ai</a>
    const roverLink = <a href={'https://drive.google.com/drive/u/3/folders/16rhXzpnnE2r-Tf5yzjvB5i6v06zM74ir'}>Autonomous rovers</a>

    return (
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Startups
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
            <Card.Body>
                <Container fluid>
                    <Row className='row'>
                        <Col md='auto'>
                            <Image fluid className='thumbnails' src={uoft} rounded></Image>
                        </Col>
                        <Col>
                            <div className='LP-Titles'>Blip.delivery</div>
                            <li className='LP-Descriptions'>
                                Blip was a same-day delivery API powered by crowdsourced drivers, written in Reactjs, Node, Swift and Python
                            </li>
                            <li className='LP-Descriptions'>
                                I was the sole engineer, and built the entire platform from the ground up
                            </li>
                            <li className='LP-Descriptions'>
                                {blipEndpoints}
                            </li>
                            <li className='LP-Descriptions'>
                               {blipApp}
                            </li>
                            <li className='LP-Descriptions'>
                                We eventually worked on {roverLink} to replace drivers, after amassing 1000 drivers in Toronto, and powering several stores.
                            </li>
                        </Col>
                    </Row>
                    <Row className='row'> 
                        <Col md='auto'>
                            <Image fluid className='thumbnails' src={coursera} rounded></Image>
                        </Col>
                        <Col>
                            <div className='LP-Titles'>Astrum.ai</div>
                            <li className='LP-Descriptions'>
                                {astrumLink} is a no-code AutoML tool written in Python and React, using Tensorflow, Pytorch and Google Cloud
                            </li>
                            <li className='LP-Descriptions'>
                                I am the sole engineer, and have built the platform from the ground up
                            </li>
                            <li className='LP-Descriptions'>
                                It uses Reinforcment learning, transfer learning, and evolutionary simulations to search for ideal NN architectures
                            </li>
                            <li className='LP-Descriptions'>
                                It's currently closed source, and a revenue generating project.
                            </li>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}