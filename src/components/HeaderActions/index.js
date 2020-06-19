import React, { memo } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import Cart from '../Cart';
import { Container, Item, Text } from './styles';

const HeaderActions = () => {
    return <Container >
        <Item>
            <AiOutlineUser />
            <Text>Minha Conta</Text>
        </Item>
        <Cart />
    </Container>;
}

export default memo(HeaderActions);