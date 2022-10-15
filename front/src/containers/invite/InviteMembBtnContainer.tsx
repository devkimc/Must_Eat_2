import { InviteMembBtn } from '@/components';
import React, { useState } from 'react';
import InviteMembModalContainer from './InviteMembModalContainer';

const InviteMembBtnContainer = () => {
    const [inviteMemb, setInviteMemb] = useState<boolean>(false);

    const onClickInviteMembBtn = () => {
        setInviteMemb(true);
    };

    const closeInviteMemb = () => {
        setInviteMemb(false);
    };

    return (
        <>
            <InviteMembBtn onClick={onClickInviteMembBtn} />
            {inviteMemb && (
                <InviteMembModalContainer closeInviteMemb={closeInviteMemb} />
            )}
        </>
    );
};

export default InviteMembBtnContainer;
