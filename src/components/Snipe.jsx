import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from './SectionTitle';
import snipeItemImg1 from '../assets/img/manual_snipe.png';
import snipeItemImg2 from '../assets/img/auto_snipe.png';
import snipeItemImg3 from '../assets/img/Analysis.png';
export default function Snipe(){
    const snipeItems = [
        {
            id:1,
            title:'Manual Snipe',
            desc:'Users can set specific criteria to execute trades instantly when the conditions are met.',
            img:snipeItemImg1,
        },
        {
            id:2,
            title:'Auto-Snipe',
            desc:'Automatically identify and capitalize on lucrative trading opportunities in the market. ',
            img:snipeItemImg2,
        },
        {
            id:3,
            title:'Off-Chain Scraping',
            desc:'Real-time analysis of market trends to detect heavily sniped contracts on other platforms, providing a strategic advantage in a competitive market',
            img:snipeItemImg3,
        },
    ]
    return(
        <div className="snipe__area" id='snipe'>
            <Container>
                <SectionTitle 
                        title='Custom, Accurate Sniping' 
                        des='Seize fruitful opportunities from newly deployed contracts with high speed and automated sniping strategies.' 
                />
                <Row className="snipe__wrapper">
                    {
                        snipeItems.map((snipeItem, index)=>(
                        <Col lg='4' md='6' key={index}>
                            <div className="single__snipe__item text-center">
                                <figure className='snipe__Img'>
                                    <img src={snipeItem.img} alt="Snipe image" />
                                </figure>
                                <div className="snipe__content">
                                    <h3>{snipeItem.title}</h3>
                                    <p>{snipeItem.desc}</p>
                                </div>
                            </div>
                        </Col>
                        )) 
                    }
                </Row>
            </Container>
           
        </div>
    )
}
