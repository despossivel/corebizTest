import styled from 'styled-components';

export const Container = styled.div`
    background: #F2F2F2;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media  (max-width: 700px)
    {
        height: 30vh;
    }

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

    @media  (max-width: 700px)
    {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        div+div{
            margin-top: 15px;
            margin-bottom: 15px;
        }


    }


`;