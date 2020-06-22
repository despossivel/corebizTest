import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background: #ccc;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 70px;
    background: #fff;
    border-bottom: 1px solid #cccccc8f;



    @media (min-width:300px) and (max-width: 1000px)
    {
        flex-direction: column;
        margin-top: 15px;
        padding-bottom: 15px;
        height: 20vh;
    
    
        form{
            margin-bottom: 15px;
            margin-top: 15px;
        }
    
    }
`;
