import styled from 'styled-components';

export const Container = styled.div`
`;

export const ContainerImgs = styled.div`
display: flex;
/* height: 100%; */

`;

export const Children = styled.div`
    width: 44%;
`;

export const AlingText = styled.div`
    margin-left: -50%;
    margin-top: -14%;
`;

export const Text = styled.span`
    color: ${props => props.color ? props.color : '#fff'};
    font-size: ${props => props.size ? props.size : '22px'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
`;

export const BannerBackground = styled.img`
    margin-left: 0%;
    z-index: 9;

    @media (min-width:1700px)  and (max-width: 1900px)
    {
        margin-left:   0%;
    }

    @media (min-width:1521px)  and (max-width: 1700px)
    {
        margin-left: -10%;
    }

    @media (min-width:1451px)  and (max-width: 1520px)
    {
        margin-left: -40%;
    }

   @media (min-width:1200px)  and (max-width: 1450px)
    {
        margin-left: -40%;
    }

    @media (min-width:1000px)  and (max-width: 1200px)
    {
        margin-left: -65%;
    }
 
    @media (min-width:900px)  and (max-width: 1000px)
    {
        margin-left: -95%;
    }

    @media (max-width: 900px)
    {
        display: none;
    }
 
 
`;

export const BannerImg = styled.img`
    margin-left: -30%;
 
    @media (min-width:1900px)  and (max-width: 2100px)
    {
        margin-left:   -20%;
    }

    @media (min-width:1700px)  and (max-width: 1900px)
    {
        margin-left:   -10%;
    }
    

`;

export const ContainerText = styled.div`
    z-index: 9999;
    position: absolute;

    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;

    span{
        float: left;
        position: absolute;
        margin-top: -25px;
    }

    span+span{
        margin-top: 0px;
        width: 272px;
        line-height: 1;
    }


    /* @media (min-width:1000px) 
    {

        span{
        float: left;
        position: absolute;
        margin-top: 0px;
    }

    span+span{
        margin-top: 25px;
    }

       
    } */



`;