import React, { useState } from 'react';
import styled from 'styled-components';
import { InviteChkBtn } from 'components';
import { getNotProcInvite } from 'lib/api/group';
import { useQuery, useQueryClient } from 'react-query';
import { AxiosResponse, AxiosError } from 'axios';
import InviteChkModalContainer from './InviteChkModalContainer';

const Wrapper = styled.div`
    position: absolute;
    right: 5.5rem;
    top: 2rem;
    z-index: 100;
`;

const InviteChkBtnContainer = () => {
    const [inviteChkModal, setInviteChkModal] = useState(false);

    const queryClient = useQueryClient();
    const { data: notProcInvite } = useQuery<
        AxiosResponse,
        AxiosError,
        AxiosResponse
    >('notProcInvite', getNotProcInvite);

    const setPlugInviteChkModal = () => {
        setInviteChkModal(prev => !prev);
    };

    const reQueryInviteList = () => {
        queryClient.invalidateQueries('inviteList');
    };

    const onClickInviteChkBtn = () => {
        setPlugInviteChkModal();

        if (!inviteChkModal) reQueryInviteList();
    };

    return (
        <Wrapper>
            <InviteChkBtn
                notProcInvite={notProcInvite?.data?.result[0].count}
                onClick={onClickInviteChkBtn}
            />
            {inviteChkModal && <InviteChkModalContainer />}
        </Wrapper>
    );
};

export default InviteChkBtnContainer;
