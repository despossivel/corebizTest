import styled from 'styled-components';

export const Container = styled.div`
    background: #F2F2F2;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.div`
    font-style: normal;
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};;
    font-size: ${props => props.size ? props.size : '22px'};
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #333333;
`


export const FlexContainer = styled.div`
    display: flex;
    margin-top: 20px;
    transition: 0.3s;

    div+div{
        margin-left: 15px;
        margin-right: 15px;
    }
`;