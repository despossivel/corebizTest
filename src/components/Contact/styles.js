import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button+button{
        margin-top: 20px;
    }



`;


export const Button = styled.button`
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width:190px;
    width:190px;
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