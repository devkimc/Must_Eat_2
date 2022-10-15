import React from 'react';
import styled from 'styled-components';
import { InviteChkBtn } from '@/components';
import { useQueryClient } from 'react-query';
import * as queryKes from '@/constants/queryKeys';
import useToggle from '@/lib/hooks/useToggle';
import InviteChkModalContainer from './InviteChkModalContainer';
import useNotProcData from './hooks/useNotProcData';

const Wrapper = styled.div`
    position: absolute;
    right: 5.5rem;
    top: 2rem;
    z-index: 100;
`;

const InviteChkBtnContainer = () => {
    const [inviteChk, toggleInviteChk] = useToggle(false);

    const queryClient = useQueryClient();
    const { data: notProcInvite } = useNotProcData();

    const reQueryInviteList = () => {
        queryClient.invalidateQueries(queryKes.INVITE_LIST);
    };

    const onClickInviteChkBtn = () => {
        toggleInviteChk();

        if (!inviteChk) reQueryInviteList();
    };

    return (
        <Wrapper>
            <InviteChkBtn
                notProcInvite={notProcInvite}
                onClick={onClickInviteChkBtn}
            />
            {inviteChk && <InviteChkModalContainer />}
        </Wrapper>
    );
};

export default InviteChkBtnContainer;
