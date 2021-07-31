import React from 'react'
import {Card, Accordion, Image, Container, Row, Col, Button} from 'react-bootstrap'


export default function Experience() {

    const scale = require('./Images/scale.svg')

    return (
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
                Experience
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
            <Card.Body>
                <Container fluid>
                    <Row className='row'>
                        <Col md='auto'>
                            <Image fluid className='thumbnails' src={scale} rounded></Image>
                        </Col>
                        <Col>
                            <div className='LP-Titles'>Scale AI</div>
                            <div className='LP-Subtitles'>Field Software Engineer</div>
                            <div className='LP-Descriptions'>September 2020 - Present</div>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}