import React from 'react';
import styled from 'styled-components';

/* Option */
const ResultOption = styled.div`
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #eee;
    cursor: pointer;
`;

const DivLine = styled.div`
    width: 0.1rem;
    border-right: 1rem;
    background-color: #eee;
`;

const Option = styled.div`
    padding-top: 0.7rem;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const OptionTxt = styled.div`
    padding-bottom: 0.3rem;
    font-size: 1.2rem;
    color: ${props => (props.selected ? '#12b886' : '#969696')};
    border-bottom: ${props => (props.selected ? '3px solid #12b886' : 'none')};
`;

type Props = {
    tab: boolean;
    onClickTab: () => void;
};

const OptionTab = ({ tab, onClickTab }: Props) => {
    return (
        <ResultOption>
            <Option onClick={!tab ? onClickTab : null}>
                <OptionTxt selected={tab}>검색</OptionTxt>
            </Option>
            <DivLine />
            <Option onClick={tab ? onClickTab : null}>
                <OptionTxt selected={!tab}> 그룹</OptionTxt>
            </Option>
        </ResultOption>
    );
};

export default OptionTab;
