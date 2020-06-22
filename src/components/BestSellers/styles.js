import styled from 'styled-components';

export const Container = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: normal;


    @media (min-width:300px) and (max-width: 1000px)
    {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`;

export const Items = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 43px;

    @media (min-width:300px) and (max-width: 1000px)
    {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1px 1px;
        width: 56%;
       
    }

`;

export const ButtonArrow = styled.div`
    margin-left: 20px;
    margin-right: 20px;

    &:hover{
        font-size: 22px;
        cursor: pointer;
    }


    @media (min-width:300px) and (max-width: 1000px)
    {
        display:none;
    }


`;