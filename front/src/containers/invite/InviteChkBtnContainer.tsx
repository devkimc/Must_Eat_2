import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { InviteChkBtn } from 'components';
import { getNotProcInvite } from 'lib/api/group';
import InviteChkModalContainer from './InviteChkModalContainer';

const Wrapper = styled.div`
    position: absolute;
    right: 5.5rem;
    top: 2rem;
    z-index: 100;
`;

const InviteChkBtnContainer = () => {
    const [notProcInvite, setNotProcInvite] = useState(0);

    /* 처리하지 않은 초대있는 지 확인 */
    useEffect(() => {
        getNotProcInvite().then(res => {
            setNotProcInvite(res.data.result[0].count);
        });
    }, []);

    return (
        <Wrapper>
            <InviteChkBtn notProcInvite={notProcInvite} />
            {/* <InviteChkModalContainer /> */}
        </Wrapper>
    );
};

export default InviteChkBtnContainer;
