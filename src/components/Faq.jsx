import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import SectionTitle from './SectionTitle';
export default function Faq(){
    const accordionData = [
        {
            id:1,
            title:'What is Surge?',
            desc:'Our versatile platform allows users to take advantage of various features to automate their trading journey. Seize fruitful opportunities from newly deployed contracts with high speed and automated sniping strategies.',
        },
        {
            id:2,
            title:'What is a Smart Wallet?',
            desc:'Our versatile platform allows users to take advantage of various features to automate their trading journey. Seize fruitful opportunities from newly deployed contracts with high speed and automated sniping strategies.',
        },
        {
            id:3,
            title:'How can i recover my password?',
            desc:'Our versatile platform allows users to take advantage of various features to automate their trading journey. Seize fruitful opportunities from newly deployed contracts with high speed and automated sniping strategies.',
        },
        {
            id:4,
            title:'What infrastructure is in place for surge?',
            desc:'Our versatile platform allows users to take advantage of various features to automate their trading journey. Seize fruitful opportunities from newly deployed contracts with high speed and automated sniping strategies.',
        },
        {
            id:5,
            title:'How are transactions being processed via surge?',
            desc:'Our versatile platform allows users to take advantage of various features to automate their trading journey. Seize fruitful opportunities from newly deployed contracts with high speed and automated sniping strategies.',
        },
        {
            id:6,
            title:'Is Surge multi-chain?',
            desc:'Our versatile platform allows users to take advantage of various features to automate their trading journey. Seize fruitful opportunities from newly deployed contracts with high speed and automated sniping strategies.',
        },
    ]
    return(
        <div className="faq__area" id='faq'>
            <Container>
                <SectionTitle 
                        title='frequently asked question'
                />
                <Row>
                    <Col>
                        <div className="faq__wrapper">
                            <Accordion defaultActiveKey={accordionData[0].id.toString()}>
                                {accordionData.map((item) => (
                                    <Accordion.Item key={item.id} eventKey={item.id.toString()}>
                                        <Accordion.Header>{item.title}</Accordion.Header>
                                        <Accordion.Body>{item.desc}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
           
        </div>
    )
}
