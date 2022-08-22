import React from 'react';
import styled from 'styled-components';
import { InviteChkBtn } from 'components';
import { getNotProcInvite } from 'lib/api/group';
import { useQuery } from 'react-query';
import { AxiosResponse, AxiosError } from 'axios';
import InviteChkModalContainer from './InviteChkModalContainer';

const Wrapper = styled.div`
    position: absolute;
    right: 5.5rem;
    top: 2rem;
    z-index: 100;
`;

const InviteChkBtnContainer = () => {
    const { data: notProcInvite } = useQuery<
        AxiosResponse,
        AxiosError,
        AxiosResponse
    >('notProcInvite', getNotProcInvite);

    return (
        <Wrapper>
            <InviteChkBtn
                notProcInvite={notProcInvite?.data?.result[0].count}
            />
            <InviteChkModalContainer />
        </Wrapper>
    );
};

export default InviteChkBtnContainer;
