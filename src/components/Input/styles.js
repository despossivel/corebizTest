import styled from 'styled-components';


export const Input = styled.input`
width: ${props => props.width ? props.width : 'none'};
height: ${props => props.height ? props.height : '33px'};
border: ${props => props.border ? props.border : '0'};
background: ${props => props.background ? props.background : '#efefef'};
border-radius: ${props => props.borderRadius ? props.borderRadius : '7px 7px 7px 7px'};
padding-left: 12px;

border: ${props => props.error ? '2px solid #D7182A' : '0'};;

    &:focus{
        outline: 0px;
    }


    @media (min-width:300px) and (max-width: 650px)
    {
        width:400px;
    }

    @media (min-width:300px) and (max-width: 480px)
    {
        width:300px;
    }


`;

export const ERROR = styled.span`
    color: #D7182A;
    font-size: 11px;
    margin-top: 7px;
    margin-left: 6px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: unset;
`;