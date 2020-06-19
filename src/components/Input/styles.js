import styled from 'styled-components';

 
export const Input = styled.input`
width: ${props => props.width ? props.width : '500px'};
height: ${props => props.height ? props.height : '33px'};
border: ${props => props.border ? props.border : '0'};
background: ${props => props.background ? props.background : '#efefef'};
border-radius: ${props => props.borderRadius ? props.borderRadius : '7px 0px 0px 7px'};



    @media (min-width:300px) and (max-width: 650px)
    {
        width:400px;
    }

    @media (min-width:300px) and (max-width: 480px)
    {
        width:300px;
    }


`;

