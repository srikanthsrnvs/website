import React from 'react'
import {Card, Accordion, Image, Container, Row, Col, Button} from 'react-bootstrap'
import {FaRobot} from 'react-icons/fa'

export default function SideProjects() {

    const pySimplexLink = <a href='https://github.com/srikanthsrnvs/pysimplex'>PySimplex</a>

    return (
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Side Projects
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
            <Card.Body>
                <Container fluid>
                    <Row className='row'>
                        <Col md='auto'>
                            <FaRobot size={50} />
                        </Col>
                        <Col>
                            <div className='LP-Titles'>PySimplex</div>
                            <li className='LP-Descriptions'>
                                {pySimplexLink} is an open source library written in Python to control SimplexMotion motors
                            </li>
                            <li className='LP-Descriptions'>
                                It uses PyModbus to write to modbus registers
                            </li>
                            <li className='LP-Descriptions'>
                                Was written to control Blip's autonomous rovers
                            </li>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}