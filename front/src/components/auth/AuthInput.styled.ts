import styled from 'styled-components';

export const InputField = styled.input`
    width: 95%;
    border: none;
    margin-left: 0.5rem;
    :focus {
        outline: none;
    }
`;
export const Input = styled.div`
    margin-bottom: 1rem;
    width: 100%;
`;
export const InputNm = styled.div`
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    margin-left: 0.3rem;
`;

export const InputLine = styled.div`
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    border: 1px solid silver;
    height: 1.5rem;
`;
export const Icon = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
