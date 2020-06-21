import styled from 'styled-components';

export const Container = styled.div`
width: 34px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin-right: 20px;

    &:hover {
        cursor: pointer;
    }
`;

export const Count = styled.span`
    float: left;
    background: #F8475F;
    border-radius: 50%;
    font-size: 10px;
    width: 17px;
    height: 17px;
    text-align: center;
    line-height: 16px;
    font-weight: 800;
    color: #fff;
`;