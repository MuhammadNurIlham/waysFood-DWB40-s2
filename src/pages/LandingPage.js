import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import Image from '../components/assets/Pizza.png';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Products from '../components/Products';

function LandingPage() {
    return (
        <div>
            <Hero />
            <Partners />
            <Products />
        </div>
    )
}

export default LandingPage;