import React from 'react';
import styled from 'styled-components';
import { FaUserPlus } from 'react-icons/fa';

const InviteMembBtn = ({ onClickInviteMembBtn }) => {
    return (
        <Wrapper>
            <WhiteCircle onClick={onClickInviteMembBtn}>
                <FlexRow>
                    <FaUserPlus color="#e91e63" size={16} />
                </FlexRow>
            </WhiteCircle>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: absolute;
    right: 2rem;
    top: 2rem;
    z-index: 1000;
`;

const WhiteCircle = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2.5rem;
    background-color: #f4f5f7;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 20%), 0 0.06rem 0 rgb(0 0 0 / 2%);
    cursor: pointer;
`;

const FlexRow = styled.div`
    display: flex;
    justify-content: center;
`;

export default InviteMembBtn;
