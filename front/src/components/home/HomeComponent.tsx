import React from 'react';
import styled from 'styled-components';
// import ramenImg from 'assets/img/ramen_3.jpg';

const Container = styled.div`
    background: #000;
    height: 100vh;
    z-index: 5;
`;

const BackgroundImg = styled.div`
    /* background-image: url(); */
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.7;
    height: 100%;
    z-index: -10;
`;

const HomeComponent = () => {
    return (
        <Container>
            <BackgroundImg />
        </Container>
    );
};

export default HomeComponent;
