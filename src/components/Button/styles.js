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
    transition: 0.3s;
    
    span{
        margin-left:5px;
        margin-right:5px;
        color:${props => props.color ? props.color : '#fff'};
    }

    &:hover{
        background: ${props => props.background ? props.background : '#f5f5f5'};
        color: #333;
        font-weight: 700;
        opacity: 1
    }

    &:focus{
        outline:0px;
    }
`;


