import React, { useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GroupType } from 'lib/api/group';
import {
    BottomBtn,
    CancleBtn,
    CloseBtn,
    ConfirmBtn,
    Container,
    Group,
    GroupAddClicked,
    GroupAddInput,
    GroupBlock,
    GroupImg,
    GroupInfo,
    GroupList,
    GroupRestCount,
    InputBox,
    Modal,
    RemoveBtn,
    Title,
    UserNm,
    Visible,
} from './InviteMembModal.styled';

type Props = {
    groupList: GroupType[];
    userId: string;
    selectedGroupId: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClickGroup: (index: number) => void;
    onClickRemoveBtn: () => void;
    onClickCancleBtn: () => void;
    onClickConfirmBtn: () => void;
    closeInviteMemb: () => void;
};

const InviteMembModal = ({
    groupList,
    userId,
    selectedGroupId,
    onChange,
    onClickGroup,
    onClickRemoveBtn,
    onClickCancleBtn,
    onClickConfirmBtn,
    closeInviteMemb,
}: Props) => {
    const userIdTag = useRef<React.MutableRefObject<undefined>>();

    const colorArr: Array<string> = [
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
        <Container>
            <Visible>
                <Modal>
                    <Title>유저 초대하기</Title>
                    <GroupBlock>
                        {groupList?.map((el, i) => (
                            <Group
                                key={el.GROUP_ID}
                                onClick={() => onClickGroup(el.GROUP_ID)}
                                selected={el.GROUP_ID === selectedGroupId}
                            >
                                <GroupList>
                                    <GroupImg imgColor={colorArr[i % 10]} />
                                    <GroupInfo>
                                        <UserNm>{el.GROUP_NM}</UserNm>
                                        <GroupRestCount>
                                            {el.REST_CNT}개
                                        </GroupRestCount>
                                    </GroupInfo>
                                </GroupList>
                            </Group>
                        ))}
                    </GroupBlock>
                    <GroupAddClicked>
                        <InputBox>
                            <GroupAddInput
                                placeholder="맛집을 공유하고 싶은 유저의 ID를 입력해주세요!"
                                value={userId}
                                onChange={onChange}
                                ref={userIdTag}
                            />
                            <RemoveBtn onClick={onClickRemoveBtn}>
                                <AiOutlineClose color="#1a1616" size={15} />
                            </RemoveBtn>
                        </InputBox>
                        <BottomBtn>
                            <CancleBtn onClick={onClickCancleBtn}>
                                취소
                            </CancleBtn>
                            <ConfirmBtn onClick={onClickConfirmBtn}>
                                확인
                            </ConfirmBtn>
                        </BottomBtn>
                    </GroupAddClicked>
                    <CloseBtn onClick={closeInviteMemb}>
                        <AiOutlineClose color="#fff" size={22} />
                    </CloseBtn>
                </Modal>
            </Visible>
        </Container>
    );
};

export default InviteMembModal;
