import React from 'react';
import {
    InviteChkBtnContainer,
    InviteMembBtnContainer,
    MapContainer,
    SearchInputContainer,
    SearchResultContainer,
} from 'containers';
import styled from 'styled-components';

const Container = styled.div``;

const SearchBlock = styled.div`
    background: white;
    position: absolute;
    z-index: 20;
    width: 24rem;
    height: 100vh;
    box-shadow: 0 0 0.3rem 0 rgb(0 0 0 / 20%), 0.3rem 0 1rem 0 rgb(0 0 0 / 10%);
`;

const MapPage = () => {
    return (
        <Container>
            <SearchBlock>
                <SearchInputContainer />
                <SearchResultContainer />
            </SearchBlock>
            <MapContainer />
            {/* <InviteChkBtnContainer />
            <InviteMembBtnContainer /> */}
        </Container>
    );
};

export default MapPage;
