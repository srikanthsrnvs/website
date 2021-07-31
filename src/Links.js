import React from 'react'
import {Button, Image} from 'react-bootstrap'
import {FaInstagram, FaTwitter, FaGithub, FaFacebook, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Links() {
    
    return (
        <div>
            <a href='https://github.com/srikanthsrnvs' target="_blank">
                <Button variant="link">
                    <FaGithub size={30}/>
                </Button>
            </a>
            <a href='https://www.linkedin.com/in/srikanthsrnvs/' target="_blank">
                <Button variant="link">
                    <FaLinkedin size={30}/>
                </Button>
            </a>
            <a href='https://twitter.com/srikanthsrnvs' target="_blank">
                <Button variant="link">
                    <FaTwitter size={30}/>
                </Button>
            </a>
            <a href='https://www.facebook.com/IamGingerTrash' target="_blank">
                <Button variant="link">
                    <FaFacebook size={30}/>
                </Button>
            </a>
            <a href='https://www.instagram.com/srikanth.srinivas' target="_blank">
                <Button variant="link">
                    <FaInstagram size={30}/>
                </Button>
            </a>
        </div>
    )
}