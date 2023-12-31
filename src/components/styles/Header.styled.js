import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 40px 10px;

    h1 {
        color: black;
    }

    &:hover {
        background-color: black;
    }
`