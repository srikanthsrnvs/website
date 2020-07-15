import React from 'react'
import { useState } from 'react'
import { Container, Row, Col, Accordion, Card, Button, Image } from 'react-bootstrap'

import Links from './Links'
import Education from './Education'
import Startups from './Startups'

import './LandingPage.css'
import SideProjects from './SideProjects'


export default function LandingPage() {

    return (
        <div className="LP-Header">
            <Container fluid>
                <Container fluid>
                    <Row>
                        <Col>
                            Srikanth Srinivas
                        </Col>
                        <Col>
                            <div className='LP-Links'>
                                <Links />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='LP-MainBody'>
                    I'm a Software Engineer with entrepreneurial experience.
                </div>
                <Accordion>
                    <Education />
                    <Startups />
                    <SideProjects />
                </Accordion>
            </Container>
        </div>
    );
}