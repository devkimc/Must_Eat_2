import { InviteMembBtn } from 'components';
import React, { useState } from 'react';

const InviteMembBtnContainer = () => {
    const [InviteMemb, setInviteMemb] = useState(false);

    const onClickInviteMembBtn = () => {
        setInviteMemb(true);
    };

    return <InviteMembBtn onClick={onClickInviteMembBtn} />;
};

export default InviteMembBtnContainer;
