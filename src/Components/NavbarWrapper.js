import React from 'react'
import {Nav , Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function NavbarWrapper() {
    return (
        <div>
            <Navbar className='fixed-top' bg='dark' variant ='light'>
                
                    <Nav>
                        <Link to='/' className ='header-link' >Home </Link> 
                        <Link to='/characters' className ='header-link'> Characters</Link>
                        <Link to='/reviews' className ='header-link'> Reviews</Link>
                    </Nav>
                
            </Navbar>
        </div>
    )
}
