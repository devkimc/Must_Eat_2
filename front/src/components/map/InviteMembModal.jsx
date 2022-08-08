import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { errorToast } from 'utils/toast';

import { AiOutlineClose } from 'react-icons/ai';
import { inviteGroup, getGroupList } from '../../lib/api/group';
import { successToast } from '../../utils/toast';

const InviteMembModal = ({ closeInviteMemb }) => {
    // const [addClicked, setAddClicked] = useState(false);
    const [selectedGroupId, setSelectedGroupId] = useState();
    const [userNmInput, setUserNmInput] = useState('');
    const [groupList, setGroupList] = useState([]);
    const userNmTag = useRef();

    const getGroup = () => {
        getGroupList().then(res => {
            setGroupList(res.data.list);
        });
    };

    useEffect(() => {
        getGroup();
    }, []);

    const onChangeUserNm = e => {
        setUserNmInput(e.target.value);
    };

    const onClickRemoveBtn = () => {
        setUserNmInput('');
    };

    const onClickCancleBtn = () => {
        setUserNmInput('');
    };

    const onClickGroup = index => {
        setSelectedGroupId(groupList[index].GROUP_ID);
    };

    const onClickConfirmBtn = async () => {
        if (userNmInput === '') {
            userNmTag.current.focus();
            errorToast('유저 이름을 입력해 주세요!');
            return;
        }

        inviteGroup(selectedGroupId, userNmInput).then(() => {
            successToast(`${userNmInput} 님을 초대했습니다!`);
            // onClickCancleBtn();
            // getGroup();
        });
        // .catch(err => {
        //     console.log(err);
        // });
    };

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
                    <Title>유저 초대하기</Title>
                    {groupList.map((el, i) => (
                        <Group
                            key={el.GROUP_ID}
                            onClick={() => onClickGroup(i)}
                        >
                            <GroupList>
                                <GroupImg imgColor={colorArr[i]} />
                                <GroupInfo>
                                    <UserNm>{el.GROUP_NM}</UserNm>
                                    <GroupRestCount>{i + 2}개</GroupRestCount>
                                </GroupInfo>
                            </GroupList>
                        </Group>
                    ))}
                    <GroupAddClicked>
                        <InputBox>
                            <GroupAddInput
                                placeholder="맛집을 공유하고 싶은 유저의 ID를 입력해주세요!"
                                value={userNmInput}
                                onChange={onChangeUserNm}
                                ref={userNmTag}
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

const Container = styled.div`
    z-index: 501;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
`;

const Visible = styled.div`
    z-index: 3001;
    visibility: visible;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    ::after {
        background: rgba(0, 0, 0, 0.6);
        content: '';
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
`;

const Modal = styled.div`
    position: absolute;
    width: 21rem;
    border-radius: 0.28rem;
    box-shadow: 0 4px 20px 0 rgb(0 0 0 / 10%);
    background: #fff;
    z-index: 2000;
    position: fixed;
    top: 50%;
    left: 50%;
    height: auto;
    padding: 30px;
    transform: translate(-50%, -50%);
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 2rem;
`;

/* 그룹 생성 - 클릭 후  */
const GroupAddClicked = styled.div`
    margin-bottom: 1.5rem;
`;

const InputBox = styled.div`
    display: flex;
    border-bottom: 1px solid;
    padding-bottom: 0.5rem;
`;

const GroupAddInput = styled.input`
    width: 100%;
`;

const RemoveBtn = styled.div`
    cursor: pointer;
`;

const BottomBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 1.5rem;
    padding-right: 0.3rem;
`;

const CancleBtn = styled.div`
    cursor: pointer;
    color: #a8a7a8;
`;

const ConfirmBtn = styled.div`
    cursor: pointer;
    margin-left: 0.5rem;

    :hover {
        color: #e91e63;
    }
`;

/* 그룹 리스트 */
const Group = styled.div`
    border-bottom: 1px solid silver;
    padding: 0.5rem 0;
    cursor: pointer;
`;

const GroupList = styled.li`
    display: flex;
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

const UserNm = styled.div`
    font-size: 1rem;
    color: #333;
`;

/* 닫기 */
const CloseBtn = styled.button`
    border: none;
    position: absolute;
    top: -2rem;
    right: -0.5rem;
`;
