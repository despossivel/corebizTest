import styled from 'styled-components';

export const Container = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: normal;
`;

export const Items = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ButtonArrow = styled.div`
    margin-left: 20px;
    margin-right: 20px;

    &:hover{
        font-size: 22px;
        cursor: pointer;
    }
`;