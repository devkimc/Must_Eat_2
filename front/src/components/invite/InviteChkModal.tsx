import React from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import {
    Padding,
    Content,
    InviteTxt,
    BoldTxt,
    NormalTxt,
    BtnGorup,
    AcceptBtn,
    RejectBtn,
    Wrapper,
    FlexCol,
} from './InviteChkModal.styled';

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
                {inviteList?.map(invite => (
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
