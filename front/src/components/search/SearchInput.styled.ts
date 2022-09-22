import styled from 'styled-components';

export const SearchInputBlock = styled.div``;

export const Container = styled.div`
    width: 22rem;
    padding: 1.5rem 1rem;
    background-color: #12b886;
`;

export const InputBox = styled.div`
    height: 3rem;
    padding: 0 0.6rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 20%), 0 0.06rem 0 rgb(0 0 0 / 2%);
    position: relative;
    background-color: white;
`;

export const InputField = styled.input`
    border: 0 none;
    outline: none;
    padding: 1rem 1rem 0.8rem;
    font-size: 1rem;
`;

export const SearchButton = styled.button`
    position: absolute;
    height: 3rem;
    padding: 0.6rem 0;
    right: 1rem;
    border: none;
    background: none;
    cursor: pointer;

    svg {
        color: silver;
        &:hover {
            color: #3c4043;
        }
    }
`;
