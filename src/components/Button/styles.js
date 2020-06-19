import styled from 'styled-components';

export const Container = styled.button`
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width:190px;
    width:${props => props.width ? props.width : '190px'};
    background: ${props => props.background ? props.background : '#fff'};
    border-radius: 7px;
    border:0px;
    cursor: pointer;

    span{
        margin-left:5px;
        margin-right:5px;
    }

    &:focus{
        outline:0px;
    }
`;


