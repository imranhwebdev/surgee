import React, { useState } from 'react';
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';
import SectionTitle from './SectionTitle';
import WalletRightImg from '../assets/img/trading_wallet_right-img2.png';
import Eip from '../assets/img/eip.png';
import key from '../assets/img/key.png';
import eip_arrow from '../assets/img/eip_arrow.png';
import self from '../assets/img/self-icon.png';
import automation from '../assets/img/automation_icon.png';

export default function Wallet() {
    const Title = 'Security';
    const Desc ='Your Assets, Your Control. We never store your private keys.';
    const BtnText ='Read More';
    const Btnlink ='https://google.com';
    const Title2 = 'Self-Sovereignty';
    const Desc2 ='You decide - automated trading or manual control.';
    const BtnText2 ='Read More';
    const Btnlink2 ='https://google.com';
    const Title3 = 'Automation';
    const Desc3 ='Trade smarter with customizable trading strategies.';
    const BtnText3 ='Read More';
    const Btnlink3 ='https://google.com';
    const Title4 = 'Efficiency';
    const Desc4 ='Seamless and swift execution of your trades.';
    const BtnText4 ='Read More';
    const Btnlink4 ='https://google.com';


    const [rotationAngle, setRotationAngle] = useState('0deg');
    const [newClass , setNewClass] = useState(0);
    const [fadeEffect, setFadeEffect] = useState(false);
    const handleTabClick = () => {
       setNewClass(newClass <= 3 ? newClass + 1 : 1);
       setFadeEffect(true);
       console.log(newClass);
    // Get the current rotation angle
    const currentRotationAngle = parseInt(rotationAngle, 10);

    // Calculate the next rotation angle based on the active tab
    const newRotationAngle = currentRotationAngle + 90;

    // Update the state with the new rotation angle
    setRotationAngle(`${newRotationAngle}deg`);
    setTimeout(() => {
        setFadeEffect(false);
    }, 500);
};

    

    const combinedStyles = {
        transform: `rotate(${rotationAngle})`,
        transition: `transform 0.5s ease-in-out, opacity 0.5s ease-in-out ${fadeEffect ? ', visibility 0s linear 0.5s' : ''}`,
    };

    return (
        <div className="wallet__area" id='wallet'>
            <Container>
                <SectionTitle 
                        title='A Purpose Built Trading Wallet' 
                        des='Unlock the Future of Crypto Trading with Our Innovative Wallet' 
                />
            </Container>
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className='align-items-center'>
                        <Col md='6' className='order-2 order-md-1'>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div className="wallet_single_box">
                                        <h3>{Title}</h3>
                                        <p>{Desc}</p>
                                        <a target='_blank' href={Btnlink} className='inline__btn'>{BtnText}</a>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className="wallet_single_box">
                                        <h3>{Title2}</h3>
                                        <p>{Desc2}</p>
                                        <a target='_blank' href={Btnlink2} className='inline__btn'>{BtnText2}</a>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className="wallet_single_box">
                                        <h3>{Title3}</h3>
                                        <p>{Desc3}</p>
                                        <a target='_blank' href={Btnlink3} className='inline__btn'>{BtnText3}</a>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                    <div className="wallet_single_box">
                                        <h3>{Title4}</h3>
                                        <p>{Desc4}</p>
                                        <a target='_blank' href={Btnlink4} className='inline__btn'>{BtnText4}</a>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content> 
                        </Col>
                        <Col md='6' className='order-1 order-md-2'>
                            <figure className='w_i'>
                                <img
                                    src={WalletRightImg}
                                    alt="Wallet Image"
                                    style={combinedStyles}
                                />
                                {/* style={{ transform: `translate(-50%, -50%) rotate(${rotationAngle})`,  transition: 'transform 0.5s ease-in-out' }} */}
                                <div className={`all_click_icons ${fadeEffect ? 'fade' : ''}`} id={newClass} >
                                    <Nav.Link eventKey="first"  className={`sc ${fadeEffect ? 'fade' : ''}`} onClick={() => handleTabClick('first')}>
                                        <img src={key} alt="" className={fadeEffect ? 'fade' : ''} />
                                    </Nav.Link>
                                    <Nav.Link eventKey="second" className={`ss ${fadeEffect ? 'fade' : ''}`} onClick={() => handleTabClick('second')}>
                                    <img src={eip_arrow} alt="" className={fadeEffect ? 'fade' : ''} />
                                    </Nav.Link>
                                    <Nav.Link eventKey="third" className={`au ${fadeEffect ? 'fade' : ''}`} onClick={() => handleTabClick('third')}>
                                    <img src={automation} alt="" className={fadeEffect ? 'fade' : ''} />
                                    </Nav.Link>
                                    <Nav.Link eventKey="four" className={`eff ${fadeEffect ? 'fade' : ''}`} onClick={() => handleTabClick('four')}>
                                    <img src={self} alt="" className={fadeEffect ? 'fade' : ''} />
                                    </Nav.Link>
                                </div>
                                <span className='eip'>
                                    <img src={Eip} alt="" />
                                </span>
                            </figure>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
}
