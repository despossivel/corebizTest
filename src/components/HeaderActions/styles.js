import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Item = styled.div`
    width: 140px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-right: 20px;

    &:hover {
        cursor: pointer;
    }

`

export const Text = styled.span`
color: #7A7A7A;

    &:hover {
        color: #333;
        font-weight: 700;
    }

`;
