import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    margin-bottom: 10px;

    span{
        border-bottom: 4px solid #fff;
        width:50px;
        margin-top: 10px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;

    span{
        /* margin-bottom:5px; */
        margin-top:5px;
    }
`;