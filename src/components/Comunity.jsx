import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from './SectionTitle';
import ComunityItemImg1 from '../assets/img/comunity_medium.svg';
import ComunityItemIcon from '../assets/img/comunity_btn_icon.svg';
import ComunityItemTelegramIcon from '../assets/img/tlegram_icon.svg';
import ComunityItemTwitterIcon from '../assets/img/twitter_x.svg';
import ComunityItemImg2 from '../assets/img/Community.svg';
export default function Comunity(){
    const ComunityItems = [
        {
            id:1,
            subTitle:'Live News Feed',
            title:'Follow our Medium',
            desc:'Get the latest news, updates, and developments from our team by visiting our Medium page. We regularly publish interesting content that will keep you informed and engaged.',
            btnText:'Medium',
            btnLink:'https://www.google.com',
            btnIcon: ComunityItemIcon,
            img: ComunityItemImg1,
        },
        {
            id:2,
            subTitle:'Hang With the Gang',
            title:'Join our thriving Community',
            desc:'Join the community on our official Discord/Telegram channels and take part in our team AMA’s, regular contents and giveaways!',
            btnText:'Telegram',
            btnLink:'https://www.telegram.com',
            btnIcon: ComunityItemTelegramIcon,
            btnTextTwo:'Twitter',
            btnLinkTwo:'https://www.twitter.com',
            btnIconTwo: ComunityItemTwitterIcon,
            img:ComunityItemImg2,
        },
    ]
    return(
        <div className="comunity__area" id='comunity'>
            <Container>
                <SectionTitle 
                        title='Get Connected' 
                />
                <Row className="comunity__wrapper">
                    {
                        ComunityItems.map((ComunityItem, index)=>(
                        <Col lg='6' key={index} className='mb-4'>
                            <div className="single__comunity__item">
                                <div className="comunity__content">
                                    <span>{ComunityItem.subTitle}</span>
                                    <h3>{ComunityItem.title}</h3>
                                    <p>{ComunityItem.desc}</p>
                                    <a target='_blank' href={ComunityItem.btnLink} className='inline__btn'> <img src={ComunityItem.btnIcon} alt="" />{ComunityItem.btnText}</a>
                                    {ComunityItem.btnTextTwo && ComunityItem.btnLinkTwo && (
                                        <a href={ComunityItem.btnLinkTwo} className='inline__btn'><img src={ComunityItem.btnIconTwo} alt="" />  {ComunityItem.btnTextTwo}</a>
                                    )}

                                </div>
                                <div className="comunity__right_box">
                                    <figure className='comunity__Img'>
                                        <img src={ComunityItem.img} alt="comunity image" />
                                    </figure>
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
