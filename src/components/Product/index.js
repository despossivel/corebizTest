import React, { memo, useContext, useCallback } from 'react';
import {
  CartContext
} from '../../contexts/cart';
import Button from '../Button';
import StarRatingComponent from 'react-star-rating-component';

import { Container, ContainerImg, Img, TagOff, Details, Text } from './styles';

const Product = ({
  productId,
  productName,
  stars,
  imageUrl,
  listPrice,
  price,
  installments
}) => {
  const {
    addItem
  } = useContext(CartContext)


  const formatReal = useCallback((int) => {
    var tmp = int + '';
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if (tmp.length > 6)
      tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    return tmp;
  }, [])


  return <Container>
    <ContainerImg>
      {listPrice ? <TagOff >
        <span>OFF</span>
      </TagOff> : false}

      <Img src={imageUrl} alt="product1" />

    </ContainerImg>
    <Details>
      <Text fontSize='14px' color="#7A7A7A">{productName}</Text>
      <StarRatingComponent
        name={productName}
        value={stars}
        starCount={5}
        starColor={'#F8475F'}
        emptyStarColor={'#ccc'}
        editing={false}
      />
      {listPrice ? <Text fontSize='12px' color="#7A7A7A" textDecoration="line-through">de R$ {formatReal(listPrice)}</Text> : false}

      <Text fontSize='17px' color="#000" fontWeight="bold">por R$ {formatReal(price)}</Text>
      {installments.length > 0 ? <Text fontSize='12px' color="#7A7A7A">ou em {installments[0].quantity}x de R$ {formatReal(installments[0].value)}</Text> : false}
      {/* */}
    </Details>
    <Button {...{
      label: "Comprar",
      background: "#000"
    }} onClick={e => addItem()} />
  </Container >;
}

export default memo(Product);