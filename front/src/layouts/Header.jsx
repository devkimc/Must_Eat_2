import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from 'assets/img/logo.PNG';

const Container = styled.div`
    font-size: 1rem;
    color: black;
    background: white;
    z-index: 10;
    width: 100%;
`;

const MenuGroup = styled.ul`
    padding: 1.5rem 2rem;
    display: flex;
`;

const Menu = styled.li`
    padding: 0rem 1rem;
`;

const LogoImg = styled.img`
    height: 1.6rem;
`;

const Header = () => {
    return (
        <Container>
            <MenuGroup>
                <Menu>
                    <Link to="/">
                        <LogoImg src={logo} alt="logo" />
                    </Link>
                </Menu>
                <Menu>
                    <Link to="/map">Map </Link>
                </Menu>
                <Menu>
                    <Link to="/login">Login </Link>
                </Menu>
            </MenuGroup>
        </Container>
    );
};

export default Header;
