import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaPaperPlane, FaDiscord, FaGithub } from "react-icons/fa";
import siteLogo from '../assets/img/Footer-Logo.svg';
import twitterX from '../assets/img/twitter_x.svg';
export default function Footer(){
    const footerLeftDesc = 'A dedicated and secure platform allowing you to automate your trading journey';
    const footerSocialTitle = 'Stay Connected';
    const currentYear = new Date().getFullYear();
    const Copyright = `© ${currentYear} Surge. All rights reserved.`;

    const footerSocialItems = [
        {
            imageSrc: twitterX,
            url:'https://www.google.com'
        },
        {
            icon: <FaPaperPlane />,
            url:'https://www.google.com'
        },
        {
            icon: <FaDiscord />,
            url:'https://www.google.com'
        },
        {
            icon: <FaGithub />,
            url:'https://www.google.com'
        },
    ]
    return(
        <footer className="footer">
            <Container>
                <Row className='footer_top'>
                    <Col sm='6' className='text-sm-start text-center'>
                       <div className="footer_top_left ">
                            <a href="/" className='footer__logo'>
                                <img src={siteLogo} alt="Footer Logo" />
                            </a>
                            <p>{footerLeftDesc}</p>
                       </div>
                    </Col>
                    <Col sm='6'>
                        <div className="footer_top_right text-center text-sm-end mt-4 mt-sm-0">
                            <h5>{footerSocialTitle}</h5>
                            <ul className='footer__socials'>
                                {footerSocialItems.map((footerSocialItem, index)=>(
                                    <li key={index}> 
                                        <a href={footerSocialItem.url}  target="_blank"> 
                                            {footerSocialItem.icon ? (footerSocialItem.icon) 
                                            : 
                                            (<img src={footerSocialItem.imageSrc} alt="Social Media" />)} 
                                        </a>
                                    </li>
                                ))}
                                
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className='footer_bottom'>
                    <Col className='text-center'>
                        <p className='copy__right'>{Copyright}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}