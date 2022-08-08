import React from 'react';
import styled from 'styled-components';
import { AiOutlineMail } from 'react-icons/ai';

const InviteChkBtn = () => {
    return (
        <Wrapper>
            <WhiteCircle>
                <MsgBox>
                    <UnReadAlarmBorder>
                        <FlexCol>
                            <UnReadAlarm />
                        </FlexCol>
                    </UnReadAlarmBorder>
                    <AiOutlineMail color="#4e61ff" size={21} />
                </MsgBox>
            </WhiteCircle>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: absolute;
    right: 5.5rem;
    top: 2rem;
    z-index: 100;
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

const MsgBox = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;

const UnReadAlarmBorder = styled.div`
    right: 0.5rem;
    display: flex;
    justify-content: center;
    position: absolute;
    background-color: #f4f5f7;
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 0.65rem;
`;

const UnReadAlarm = styled.div`
    background-color: red;
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 0.45rem;
`;

/* Flex */
const FlexCol = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export default InviteChkBtn;