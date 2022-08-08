import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { getInviteList } from '../../lib/api/group';

const InviteChkModal = () => {
    const [inviteList, setInviteList] = useState([]);

    useEffect(() => {
        getInviteList().then(res => {
            setInviteList(res.data.result);
        });
    }, []);

    return (
        <Wrapper>
            <Padding>
                {inviteList.map(invite => (
                    <Content key={invite.INVITE_ID}>
                        <InviteTxt>
                            <BoldTxt>{invite.SEND_USER_ID}</BoldTxt>
                            <NormalTxt>님이</NormalTxt>&nbsp;
                            <BoldTxt>{invite.GROUP_NM}</BoldTxt>
                            <NormalTxt>에 초대했습니다.</NormalTxt>
                        </InviteTxt>
                        <BtnGorup>
                            <AcceptBtn>
                                {/* <AcceptTxt> */}
                                <FlexCol>
                                    <AiOutlineCheck color="#12B886" size={14} />
                                </FlexCol>

                                {/* </AcceptTxt> */}
                            </AcceptBtn>
                            <RejectBtn>
                                {/* <RejectTxt> */}
                                <FlexCol>
                                    <AiOutlineClose color="#FF6B6B" size={14} />
                                </FlexCol>

                                {/* </RejectTxt> */}
                            </RejectBtn>
                        </BtnGorup>
                    </Content>
                ))}
            </Padding>
        </Wrapper>
    );
};

export default InviteChkModal;

const Wrapper = styled.div`
    background-color: #f4f5f7;
    position: absolute;
    width: 17rem;
    height: 19rem;
    right: 1rem;
    border-radius: 15px;
    padding: 0.5rem 1rem 0 1rem;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 20%), 0 0.06rem 0 rgb(0 0 0 / 2%);
`;

const Padding = styled.div`
    width: 100%;
    height: 100%;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid #d0d7de;
`;

const InviteTxt = styled.div`
    height: 1.3rem;
    line-height: 1.5rem;
    width: 13rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const BoldTxt = styled.span`
    font-size: 0.9rem;
    color: #28323c;
`;

const NormalTxt = styled.span`
    font-size: 0.9rem;
    color: #5f5f5f;
`;

const BtnGorup = styled.div`
    display: flex;
    margin-left: 0.3rem;
`;

const AcceptBtn = styled.div`
    display: flex;
    justify-content: center;
    width: 2rem;
    border-radius: 5px;
    color: #fff;
    background-color: #fff;
    height: 1.2rem;
    margin-right: 0.4rem;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 20%), 0 0.06rem 0 rgb(0 0 0 / 2%);
    cursor: pointer;
`;

const RejectBtn = styled.div`
    display: flex;
    justify-content: center;
    width: 2rem;
    border-radius: 10px;
    border-radius: 5px;
    background-color: #fff;
    color: #4e61ff;
    height: 1.2rem;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 20%), 0 0.06rem 0 rgb(0 0 0 / 2%);
    cursor: pointer;
`;

const FlexCol = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

// const AcceptTxt = styled.span``;
// const RejectTxt = styled.span``;
