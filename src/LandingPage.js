import React from 'react'
import { useState } from 'react'
import { Container, Row, Col, Accordion, Card, Button, Image } from 'react-bootstrap'

import Links from './Links'
import Education from './Education'
import Startups from './Startups'
import Experience from './Experience'

import './LandingPage.css'
import SideProjects from './SideProjects'


export default function LandingPage() {

    return (
        <div className="LP-Header">
            <Container fluid>
                <div style={{display: 'inline', alignItems: 'center'}}>
                    <div>Srikanth Srinivas</div>
                    <div className='LP-Links'>
                        <Links />
                    </div>
                </div>
                <div className='LP-MainBody'>
                    I'm a Software Engineer with entrepreneurial experience.
                </div>
                <Accordion>
                    <Education />
                    <Experience />
                    <Startups />
                    <SideProjects />
                </Accordion>
            </Container>
        </div>
    );
}