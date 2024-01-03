import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, animateScroll as scroll} from 'react-scroll'
import logo from '../assets/img/Logo.svg'

export default function Header(){ 
    const [fix, setFix] = useState(false)
    function setFixed(){
        if(window.scrollY >= 392){
            setFix(true)
        }else{
            setFix(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', setFixed);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', setFixed);
        };
      }, []);
    return(
        <header className={fix ? 'heading fixed' : 'heading'}>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <div className="header__logo">
                        <Navbar.Brand href="/">
                            <img src={logo} alt="" />
                        </Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="wallet" spy={true} smooth={true}  offset={fix ? -70 : -50} duration={500}>Wallet</Link>
                        <Link to="trade" spy={true} smooth={true}  offset={fix ? -70 : -70} duration={500}>Trade</Link>
                        <Link to="snipe" spy={true} smooth={true} offset={fix ? -70 : -50} duration={500}>Snipe</Link>
                        <Link to="comunity" spy={true} smooth={true}  offset={fix ? -90 : -70} duration={500}>Community</Link>
                        <Link to="faq" spy={true} smooth={true}  offset={fix ? -70 : -70} duration={500}>FAQ</Link>
                    </Nav>
                    <Nav>
                        <a href="/" className='boxed__btn'>Buy $SURGE</a>
                        <a href="/" className='boxed__btn'>Documents</a>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}