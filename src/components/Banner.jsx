import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bannerImg from '../assets/img/hero-right-img.png'
import bannerShap0 from '../assets/img/hero-shap-0.png'
import bannerShap1 from '../assets/img/hero-shap1.png'
import bannerShap2 from '../assets/img/hero-shap2.png'
export default function Banner(){
    const title = "Your <span>Keys</span> <br /> Your <span>Trade</span>";
    const desc = "A The most dominant, secure and versatile platform allowing you to automate your trading journey";
    const buttonData = [
        { 
            text: 'Buy $SURGE', 
            link: '#' 
        },
        { 
            text: 'Launch App', 
            link: '#' 
        },
        // Add more buttons as needed
      ];
    return(
        <div className="banner">
            <figure className="banner-img">
                <img src={bannerImg} alt="" />
            </figure>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={7}>
                        <div className="banner-content">
                        <figure className="banner__shap0">
                            <img src={bannerShap0} alt="" />
                        </figure> 
                        <h1 dangerouslySetInnerHTML={{ __html: title }} />
                            <p>{desc}</p>
                            {buttonData.map((button, index) => (
                                <a target='_target' key={index} href={button.link} className="boxed__btn">
                                    {button.text}
                                </a>
                            ))}
                        </div>
                    </Col>
                    <Col lg={6}>
                        <figure className="responsive_img d-block d-lg-none mt-5">
                            <img src={bannerImg} alt="" />
                        </figure>
                    </Col>
                </Row>   
            </Container>
            
            <figure className="banner__shap1">
                <img src={bannerShap1} alt="" />
            </figure> 
            <figure className="banner__shap2">
                <img src={bannerShap2} alt="" />
            </figure> 
        </div>
    )
}
