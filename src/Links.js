import React from 'react'
import {Button, Image} from 'react-bootstrap'
import {FaInstagram, FaTwitter, FaGithub, FaFacebook, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Links() {
    
    return (
        <div>
            <Link to='https://github.com/srikanthsrnvs'>
                <Button variant="link">
                    <FaGithub size={30}/>
                </Button>
            </Link>
            <Link to='https://www.linkedin.com/in/srikanthsrnvs/'>
                <Button variant="link">
                    <FaLinkedin size={30}/>
                </Button>
            </Link>
            <Link to='https://twitter.com/srikanthsrnvs'>
                <Button variant="link">
                    <FaTwitter size={30}/>
                </Button>
            </Link>
            <Link to='https://www.facebook.com/IamGingerTrash'>
                <Button variant="link">
                    <FaFacebook size={30}/>
                </Button>
            </Link>
            <Link to='https://www.instagram.com/srikanth.srinivas'>
                <Button variant="link">
                    <FaInstagram size={30}/>
                </Button>
            </Link>
        </div>
    )
}