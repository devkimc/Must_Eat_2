import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const Wrapper = styled.div`
    background-color: #f4f5f7;
    position: absolute;
    width: 16.5rem;
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
    width: 1.7rem;
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
    width: 1.7rem;
    border-radius: 10px;
    border-radius: 5px;
    background-color: #fff;
    height: 1.2rem;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 20%), 0 0.06rem 0 rgb(0 0 0 / 2%);
    cursor: pointer;
`;

const FlexCol = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

type Props = {
    inviteList: {
        INVITE_ID: number;
        SEND_USER_ID: string;
        GROUP_NM: string;
    }[];

    onClickAccept: (inviteId: number) => void;
    onClickReject: (inviteId: number) => void;
};

const InviteChkModal = ({
    inviteList,
    onClickAccept,
    onClickReject,
}: Props) => {
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
                            <AcceptBtn
                                onClick={() => onClickAccept(invite.INVITE_ID)}
                            >
                                <FlexCol>
                                    <AiOutlineCheck color="#12B886" size={13} />
                                </FlexCol>
                            </AcceptBtn>
                            <RejectBtn
                                onClick={() => onClickReject(invite.INVITE_ID)}
                            >
                                <FlexCol>
                                    <AiOutlineClose color="#FF6B6B" size={13} />
                                </FlexCol>
                            </RejectBtn>
                        </BtnGorup>
                    </Content>
                ))}
            </Padding>
        </Wrapper>
    );
};

export default InviteChkModal;
