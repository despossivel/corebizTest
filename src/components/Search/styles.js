import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Button = styled.button`
width: ${props => props.width ? props.width : '33px'};
height: ${props => props.height ? props.height : '33px'};
border: ${props => props.border ? props.border : '0'};
background: ${props => props.background ? props.background : '#efefef'};
border-radius: ${props => props.borderRadius ? props.borderRadius : '0px 7px 7px 0px'};
`