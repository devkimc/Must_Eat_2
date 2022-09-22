import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {
    SearchInputBlock,
    Container,
    InputBox,
    InputField,
    SearchButton,
} from './SearchInput.styled';

type Props = {
    searchIp: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    onSearch: () => void;
    onEnterPress: (e: React.KeyboardEvent<HTMLImageElement>) => void;
};

const SearchInput = ({ searchIp, onChange, onSearch, onEnterPress }: Props) => {
    return (
        <SearchInputBlock>
            <Container>
                <InputBox>
                    <InputField
                        type="text"
                        value={searchIp}
                        onChange={onChange}
                        onKeyPress={onEnterPress}
                        placeholder="검색어를 입력하세요."
                    />
                    <SearchButton onClick={onSearch}>
                        <AiOutlineSearch size={24} />
                    </SearchButton>
                </InputBox>
            </Container>
        </SearchInputBlock>
    );
};

export default SearchInput;
