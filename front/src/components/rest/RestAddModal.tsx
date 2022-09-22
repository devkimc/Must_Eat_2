import React from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { GroupType } from 'lib/api/group';
import {
    BottomBtn,
    CancleBtn,
    CloseBtn,
    ConfirmBtn,
    Container,
    FlexCol,
    Group,
    GroupAdd,
    GroupAddClicked,
    GroupAddImg,
    GroupAddInput,
    GroupAddTxt,
    GroupBlock,
    GroupImg,
    GroupInfo,
    GroupList,
    GroupNm,
    GroupRestCount,
    InputBox,
    Modal,
    RemoveBtn,
    Title,
    Visible,
} from './RestAddModal.styled';

type Props = {
    addClicked: boolean;
    groupNm: string;
    groupList: GroupType[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClickGroupAdd: () => void;
    onClickRemoveBtn: () => void;
    onClickCancleBtn: () => void;
    onClickConfirmBtn: () => void;
    onClickCloseBtn: () => void;
    onClickRestAdd: (groupId: number) => void;
};

const RestAddModal = ({
    addClicked,
    groupNm,
    groupList,
    onChange,
    onClickGroupAdd,
    onClickRemoveBtn,
    onClickCancleBtn,
    onClickConfirmBtn,
    onClickCloseBtn,
    onClickRestAdd,
}: Props) => {
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
        <Container>
            <Visible>
                <Modal>
                    <Title>맛집 추가하기</Title>
                    {!addClicked ? (
                        <GroupAdd onClick={onClickGroupAdd}>
                            <GroupAddImg>
                                <FlexCol>
                                    <AiOutlinePlus size={22} color="#e91e63" />
                                </FlexCol>
                            </GroupAddImg>
                            <GroupAddTxt>새로운 그룹 추가하기</GroupAddTxt>
                        </GroupAdd>
                    ) : (
                        <GroupAddClicked>
                            <InputBox>
                                <GroupAddInput
                                    placeholder="새로운 그룹명을 정해주세요!"
                                    value={groupNm}
                                    onChange={onChange}
                                    // ref={groupNmTag}
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
                    )}
                    <GroupBlock>
                        {groupList?.map((el, i) => (
                            <Group
                                key={el.GROUP_ID}
                                onClick={() => onClickRestAdd(el.GROUP_ID)}
                            >
                                <GroupList>
                                    <GroupImg imgColor={colorArr[i % 10]} />
                                    <GroupInfo>
                                        <GroupNm>{el.GROUP_NM}</GroupNm>
                                        <GroupRestCount>
                                            {el.REST_CNT}개
                                        </GroupRestCount>
                                    </GroupInfo>
                                </GroupList>
                            </Group>
                        ))}
                    </GroupBlock>
                    <CloseBtn onClick={onClickCloseBtn}>
                        <AiOutlineClose color="#fff" size={22} />
                    </CloseBtn>
                </Modal>
            </Visible>
        </Container>
    );
};

export default RestAddModal;
