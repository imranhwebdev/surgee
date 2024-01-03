import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaPaperPlane, FaChrome } from "react-icons/fa";
import AplicationShap from '../assets/img/ap-shap.png'
import SectionTitle from './SectionTitle'
export default function Aplications(){
    const aplicationsData = [
        { 
            icon: <FaPaperPlane />,
            title: 'Telegram', 
            desc: 'Execute Fast Trades & Snipes on the go from your telegram app' 
        },
        { 
            icon: <FaChrome />,
            title: 'Telegram', 
            desc: 'Execute Fast Trades & Snipes on the go from your telegram app' 
        },
        // Add more buttons as needed
      ];
    return(
        <div className="aplication__area">
            <Container>
                <SectionTitle 
                        title='Use Surge On These Applications' 
                        des='Built Using Ethereum’s EIP - 4337' 
                />
            </Container>
            <div className="aplication__box">
            <Container>
                <Row className='space-evenly'>
                    {aplicationsData.map((aplication, index) => (
                        <Col md={5} key={index}>
                          <div className="single__aplication__box text-center">
                              <div className="box__icon">
                                  {aplication.icon}
                              </div>
                              <h3>{aplication.title}</h3>
                              <p>{aplication.desc}</p>
                          </div>
                        </Col>    
                    ))}
                </Row>
                    <figure className="aplication__shap">
                        <img src={AplicationShap} alt="" />
                    </figure>
            </Container>
            </div>
           
        </div>
    )
}
