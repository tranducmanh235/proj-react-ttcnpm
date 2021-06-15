import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { ManagerContext } from '../contexts/ManagerContext'

const Header = () => {
    const {cookSignout} = useContext(ManagerContext)
    const signout = () => cookSignout()
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
                <Navbar.Brand href='/'>Nhom 13</Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-header' />
                <Navbar.Collapse id='navbar-header'>
                    <Nav className='me-auto'>
                        <Nav.Link href='/' className=''>Menu</Nav.Link>
                        <Nav.Link href='/signin' className=''>Sign In</Nav.Link>
                        <Button variant='danger' onClick={signout}>Sign Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header