import React from 'react';
import { InviteChkBtnContainer, MapContainer } from 'containers';
import styled from 'styled-components';

const Container = styled.div``;

const Map = () => {
    return (
        <Container>
            <MapContainer />
            <InviteChkBtnContainer />
        </Container>
    );
};

export default Map;
