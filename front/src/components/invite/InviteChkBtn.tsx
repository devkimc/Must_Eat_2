import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import {
    Wrapper,
    MsgBox,
    UnReadAlarmBorder,
    FlexCol,
    UnReadAlarm,
} from './InviteChkBtn.styled';

type Props = {
    notProcInvite: number;
    onClick: () => void;
};

const InviteChkBtn = ({ notProcInvite, onClick }: Props) => {
    return (
        <Wrapper onClick={onClick}>
            <MsgBox>
                {notProcInvite >= 1 ? (
                    <>
                        <UnReadAlarmBorder>
                            <FlexCol>
                                <UnReadAlarm />
                            </FlexCol>
                        </UnReadAlarmBorder>
                        <AiOutlineMail color="#12B886" size={21} />
                    </>
                ) : (
                    <AiOutlineMail color="#12B886" size={21} />
                )}
            </MsgBox>
        </Wrapper>
    );
};

export default InviteChkBtn;
