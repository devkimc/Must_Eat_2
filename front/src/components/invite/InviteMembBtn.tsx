import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { Wrapper, WhiteCircle, FlexRow } from './InviteMembBtn.styled';

type Props = {
    onClick: () => void;
};

const InviteMembBtn = ({ onClick }: Props) => {
    return (
        <Wrapper>
            <WhiteCircle onClick={onClick}>
                <FlexRow>
                    <FaUserPlus color="#12B886" size={16} />
                </FlexRow>
            </WhiteCircle>
        </Wrapper>
    );
};

export default InviteMembBtn;
