import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
`;


export const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin-right: 30px;
    margin-left: 30px;

    span{}
    img{
        margin-top: 8px;
        width: 100px;
    }

`;