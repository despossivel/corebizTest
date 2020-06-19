import styled from 'styled-components';

export const Container = styled.div`
    width: 216px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;


export const Img = styled.img`
    width: 216px;
    height: 200px;
`;

export const TagOff = styled.span``;

export const Details = styled.div`
    margin-top: 7px;
    margin-bottom: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.span`
    font-size: ${props => props.fontSize ? props.fontSize : '12px'};
    color:  ${props => props.color ? props.color : '#000'};
    font-weight:   ${props => props.fontWeight ? props.fontWeight : 'normal'};
`;
