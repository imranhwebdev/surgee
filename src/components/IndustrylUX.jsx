import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from './SectionTitle';
import phoneImg from '../assets/img/phone.png';
export default function IndustrylUX(){
    const sectionTitle = "Industry-Leading UX";
    const sectionDesc = "User-Centric, Modern, and Effortless";
    const industryluxItems = [
        {
            id:1,
            btnTxt:'Purpose-Built App',
            btnLink:'https://www.google.com',
            desc:'Designed for an intuitive user experience.',
        },
        {
            id:2,
            btnTxt:'One-Click Trades',
            btnLink:'https://www.google.com',
            desc:'Execute trades with a single click.',
        },
        {
            id:3,
            btnTxt:'Social Logins',
            btnLink:'https://www.google.com',
            desc:'Seamlessly integrate with your favorite platforms.',
        },
        {
            id:4,
            btnTxt:'User-Friendly Design',
            btnLink:'https://www.google.com',
            desc:'A clean and familiar interface for all users.',
        },
    ]
    return(
        <div className="industrylux__area">
            <Container>
                <Row className="industrylux__wrapper justify-content-end">
                    <Col xxl='9' lg='7'>
                        <div className="section__title">
                            <h2>{sectionTitle}</h2>
                            <p>{sectionDesc}</p>
                        </div>
                        {industryluxItems.map((industryluxItem, index)=>(
                            <div className="single__industrylux__item" key={index}>
                                <a target='_target' href={industryluxItem.btnLink} className='btn'>{industryluxItem.btnTxt}</a>
                                <p>{industryluxItem.desc}</p>
                            </div>
                        ))}
                    </Col>
                    <Col xxl='3' lg='5'>
                        <figure className='industrylux_img text-end'>
                            <img src={phoneImg} alt="Industry-Leading UX image" />
                        </figure>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
