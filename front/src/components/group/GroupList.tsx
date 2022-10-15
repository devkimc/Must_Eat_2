import { GroupType } from '@/lib/api/group';
import React from 'react';
import styled from 'styled-components';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ImExit } from 'react-icons/im';

const GroupListBlock = styled.div`
    overflow: hidden;
    overflow-y: scroll;
    height: 44rem;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        width: 0.44rem;
        height: 3rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(175, 175, 175, 0.72);
        border-radius: 10px;
        height: 1rem;
    }
    &::-webkit-scrollbar-track {
        background-color: #e4e4e4;
        border-radius: 100px;
    }
`;

const GroupBox = styled.div`
    display: flex;
    padding-left: 1.5rem;
`;

const GroupImg = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 0.5rem;
    background-color: ${props => props.imgColor};
`;

const GroupInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 0.7rem;
`;

const GroupRestCount = styled.div`
    padding-top: 0.4rem;
    font-size: 0.9rem;
    color: #969696;
`;

const GroupNm = styled.div`
    font-size: 1rem;
    color: #333;
`;

const Group = styled.li`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid silver;
    padding: 0.5rem 0;
    cursor: pointer;

    &:hover {
        background-color: #f5f6f8;
    }
`;

const GroupExit = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 2rem;
`;

type Props = {
    groupList: GroupType[];
    onClickGroup: (groupId: number) => void;
    onClickDelete: (groupId: number) => void;
};

const GroupList = ({ groupList, onClickGroup, onClickDelete }: Props) => {
    const colorArr = [
        '#f5e6ab',
        '#f0c33c',
        '#b8e6bf',
        '#1ed14b',
        '#c5d9ed',
        '#72aee6',
        '#dcdcde',
        '#a7aaad',
        '#facfd2',
        '#ff8085',
    ];

    return (
        <GroupListBlock>
            {groupList?.map((el, i) => (
                <Group
                    key={el.GROUP_ID}
                    onClick={() => onClickGroup(el.GROUP_ID)}
                >
                    <GroupBox>
                        <GroupImg imgColor={colorArr[i % 10]} />
                        <GroupInfo>
                            <GroupNm>{el.GROUP_NM}</GroupNm>
                            <GroupRestCount>{el.REST_CNT}개</GroupRestCount>
                        </GroupInfo>
                    </GroupBox>
                    <GroupExit>
                        <RiDeleteBin6Line
                            onClick={() => onClickDelete(el.GROUP_ID)}
                            color="#FF6B6B"
                            size={18}
                        />
                    </GroupExit>
                </Group>
            ))}
        </GroupListBlock>
    );
};

export default GroupList;
