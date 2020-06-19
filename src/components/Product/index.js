import React, { memo, useContext } from 'react';
import ProductiMG from '../../asserts/product1.png';
import {
  CartContext
} from '../../contexts/cart';
import Button from '../Button';
import StarRatingComponent from 'react-star-rating-component';

import { Container, Img, TagOff, Details, Text } from './styles';

const Product = () => {
  const {
    addItem
  } = useContext(CartContext)

  return <Container>
    <div>
      <Img src={ProductiMG} alt="product1" />
      <TagOff />
    </div>
    <Details>
      <Text fontSize='14px' color="#7A7A7A">Sapato floater preto</Text>
      <StarRatingComponent
        value={4.5}
        starCount={5}
        starColor={'#F8475F'}
        emptyStarColor={'#ccc'}
        editing={false}
      />

      <Text fontSize='12px' color="#7A7A7A">de R$ 299,00</Text>
      <Text fontSize='17px' color="#000" fontWeight="bold">por R$ 259,90</Text>
      <Text fontSize='12px' color="#7A7A7A">ou em 9px de R$ 28,87</Text>
    </Details>
    <Button {...{
      label: "Comprar",
      background: "#000"
    }} onClick={e => addItem()} />
  </Container >;
}

export default memo(Product);