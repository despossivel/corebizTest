import React, { memo, useContext } from 'react';
import {
    CartContext
} from '../../contexts/cart';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Container, Count } from './styles';

const Cart = () => {
    const {
        items
    } = useContext(CartContext)

    return <Container>
        <AiOutlineShoppingCart />
        {items > 0 ? <Count>{items}</Count> : false}
    </Container>;
}

export default memo(Cart);