import { GroupType } from 'lib/api/group';
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {
    Group,
    GroupBox,
    GroupExit,
    GroupImg,
    GroupInfo,
    GroupListBlock,
    GroupNm,
    GroupRestCount,
} from './GroupList.styled';

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
