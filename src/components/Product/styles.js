import styled from 'styled-components';

export const Container = styled.div`
    min-height: 356px;
    height: 356px;
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
        border-radius: 7px 7px 7px 7px;
    }

    @media (min-width:300px) and (max-width: 1000px)
    {
        margin-bottom: 15px;
    }

`;

export const ContainerImg = styled.div`
    position: relative;
    text-align: center;
    border-radius: 7px;
`;


export const Img = styled.img`
    width: 216px;
    height: 200px;
    border-radius: 7px;
`;

export const TagOff = styled.div`
    position: absolute;
    right: 0px;
    color: #fff;
    font-weight: 900;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 80px 80px 0;
    border-color: transparent #F8475F transparent transparent;
    span{
        margin-left: 41px;
        margin-top: 15px;
        position: absolute;
    }


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
