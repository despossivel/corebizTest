import React, { memo } from 'react';

import { Container, Title, Content } from './styles';

const LocationInfo = () => <Container>
    <Title>
        <b>Localização</b>
        <span></span>
    </Title>
    <Content>
        <span>Rua Ifigênia Maria de Oliveira 3793 </span>
        <span>Jd. Piratininga - 14403-583</span>
        <span>Franca SP, Brasil</span>
        <span>contato@clickqi.com.br</span>
        <span>+55 16 3713-6985</span>
    </Content>
</Container>;

export default memo(LocationInfo);