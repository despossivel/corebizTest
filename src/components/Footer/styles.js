import styled from 'styled-components';

export const Container = styled.div`
    background: #000000;
    height: 180px;
    min-height: 180px;
    color: #fff;
    padding: 10px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;



    @media (min-width:300px) and (max-width: 1000px)
    {
        flex-direction: column;
        height: 420px;
    }

`;
