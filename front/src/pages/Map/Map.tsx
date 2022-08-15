import React from 'react';
import {
    InviteChkBtnContainer,
    InviteMembBtnContainer,
    MapContainer,
} from 'containers';
import styled from 'styled-components';

const Container = styled.div``;

const Map = () => {
    return (
        <Container>
            <MapContainer />
            <InviteChkBtnContainer />
            <InviteMembBtnContainer />
        </Container>
    );
};

export default Map;
