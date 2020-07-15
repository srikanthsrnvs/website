import React from 'react'
import {Card, Accordion, Image, Container, Row, Col, Button} from 'react-bootstrap'


export default function Education() {

    const uoft = require('./Images/uoft.png');
    const coursera = require('./Images/coursera.png');

    return (
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Education
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
            <Card.Body>
                <Container fluid>
                    <Row className='row'>
                        <Col md='auto'>
                            <Image fluid className='thumbnails' src={uoft} rounded></Image>
                        </Col>
                        <Col>
                            <div className='LP-Titles'>University of Toronto</div>
                            <div className='LP-Descriptions'>Computer Science & Machine Learning</div>
                        </Col>
                    </Row>
                    <Row className='row'> 
                        <Col md='auto'>
                            <Image fluid className='thumbnails' src={coursera} rounded></Image>
                        </Col>
                        <Col>
                            <div className='LP-Titles'>Coursera</div>
                            <div className='LP-Descriptions'>Neural networks & Deep learning</div>
                        </Col>
                    </Row>
                    <Row className='row'> 
                        <Col md='auto'>
                            <Image fluid className='thumbnails' src={coursera} rounded></Image>
                        </Col>
                        <Col>
                            <div className='LP-Titles'>Coursera</div>
                            <div className='LP-Descriptions'>Structuring Machine learning projects</div>
                        </Col>
                    </Row>
                    <Row className='lastrow'> 
                        <Col md='auto'>
                            <Image fluid className='thumbnails' src={coursera} rounded></Image>
                        </Col>
                        <Col>
                            <div className='LP-Titles'>Coursera</div>
                            <div className='LP-Descriptions'>Improving deep neural networks: Hyperparameter tuning, Regularization and Optimization</div>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}