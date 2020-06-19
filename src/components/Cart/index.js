import React, { memo } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Container, Count } from './styles';

const Cart = () => {
    return <Container>
        <AiOutlineShoppingCart />
        <Count>
            1
    </Count>
    </Container>;
}

export default memo(Cart);