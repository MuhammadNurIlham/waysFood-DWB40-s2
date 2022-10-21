import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import Image from '../components/assets/Pizza.png';

function Hero() {
    return (
        <div className='top-page'>
            <div className='container'>
                <div className='row d-flex justify-content-xl-between'>
                    <div className='col title pt-5 ps-5'>
                        <div className='left-title mt-5'>Are You Hungry ?<br></br>Express Home Delivery</div>
                        <div className='left-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                    </div>
                    <div className='col py-4'>
                        <img className='rounded float-start' src={Image} alt='todo'></img>
                    </div>
                </div>
            </div>
            {/* <Container>
                <Row>
                    <Col md={7} className='title pt-5 ps-5'>
                        <div className='left-title mt-5'>Are You Hungry ?<br></br>Express Home Delivery</div>
                        <div className='left-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                    </Col>
                    <Col className='py-4'>
                        <img className='rounded float-start' src={Image} alt='todo'></img>
                    </Col>
                </Row>
            </Container> */}
        </div>
    )
}

export default Hero;