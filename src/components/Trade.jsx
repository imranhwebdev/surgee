import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from './SectionTitle';
import tradeItemImg1 from '../assets/img/RapidChange.png';
import tradeItemImg2 from '../assets/img/BuyAndSellStock.png';
import tradeItemImg3 from '../assets/img/SelfReflection.png';
import tradeItemImg4 from '../assets/img/Safe.png';
import tradeItemImg5 from '../assets/img/Transaction.png';
export default function Trade(){
    const tradeItems = [
        {
            id:1,
            title:'Rapid Transactions',
            desc:'Surge allows users to very easily and quickly execute buy and sell transactions at rapid speeds. Bypassing manual approvals & using MEV solutions allows for this.',
            img:tradeItemImg1,
        },
        {
            id:2,
            title:'Controlled Price Orders',
            desc:'Users are able to configure at what point they would like to buy or sell an asset based on a percentage change either up or down.',
            img:tradeItemImg2,
        },
        {
            id:3,
            title:'Trade Mimicking Strategy Replication',
            desc:'Follow the money! Copy trade profitable traders by replicating their on-chain movements. Copy paste their wallet address and duplicate their gains.',
            img:tradeItemImg3,
        },
        {
            id:4,
            title:'Anti-Rug Mechanism',
            desc:'With an automated rug prevention system, surge can execute transactions on your behalf in order to protect users from rug-pulls',
            img:tradeItemImg4,
        },
        {
            id:5,
            title:'Surge Protection',
            desc:'Simulate buys & sells off-chain to prevent the risk of failed transactions and save on gas fees.',
            img:tradeItemImg5,
        },
    ]
    return(
        <div className="trade__area" id='trade'>
            <Container>
                <SectionTitle 
                        title='A Comprehensive Trading Suite' 
                        des='Our versatile platform allows users to take advantage of various features to automate their trading journey' 
                />
                <Row>
                    <Col>
                        <div className="trade__wrapper">
                            {
                               tradeItems.map((tradeItem, index)=>(
                                    <div className="single__trade__item" key={index}>
                                        <div className="trade__content">
                                            <h3>{tradeItem.title}</h3>
                                            <p>{tradeItem.desc}</p>
                                        </div>
                                        <figure className='trade__Img'>
                                            <img src={tradeItem.img} alt="trading suite box image" />
                                        </figure>
                                    </div>
                               )) 
                            }
                            
                        </div>
                    </Col>
                </Row>
            </Container>
           
        </div>
    )
}
