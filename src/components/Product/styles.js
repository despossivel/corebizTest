import styled from 'styled-components';

export const Container = styled.div`
    width: 216px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left:5px;
    margin-right:5px;
    padding-bottom: 10px;
    border: 1px solid #cccccc42;
    border-radius: 7px;
    &:hover{
        background: #F2F2F2;
        cursor: pointer;
        // padding-bottom: 10px;
        border-radius: 7px 7px 7px 7px;
    }

`;

export const ContainerImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 7px;
`;


export const Img = styled.img`
    width: 216px;
    height: 200px;
    border-radius: 7px;
`;

export const TagOff = styled.span`
    border-radius: 7px 7px 0px 0px;
    width: 100%;
    background: #F8475F;
    color: #fff;
    font-weight: 900;
`;

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
    text-decoration:  ${props => props.textDecoration ? props.textDecoration : 'none'};
`;
