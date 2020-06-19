import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
font-size: 18px;
margin-bottom: 10px;
padding-left: ${props => props.paddingLeft ? props.paddingLeft : '0px'};
color: ${props => props.color ? props.color : '#0000'};

span{
    border-bottom: 4px solid ${props => props.borderColor ? props.borderColor : '#0000'};
    width:50px;
    margin-top: 10px;
}
`;
