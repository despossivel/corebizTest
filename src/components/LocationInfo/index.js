import React, { memo } from 'react';
import Title from '../TitleSection';
import { Container, Content } from './styles';

const LocationInfo = () => <Container>
    <Title {...{
        text: 'Localização',
        color: '#fff',
        borderColor: '#fff'
    }} />
    <Content>
        <span>Rua Ifigênia Maria de Oliveira 3793 </span>
        <span>Jd. Piratininga - 14403-583</span>
        <span>Franca SP, Brasil</span>
        <span>contato@clickqi.com.br</span>
        <span>+55 16 3713-6985</span>
    </Content>
</Container>;

export default memo(LocationInfo);