import React, { memo, useContext } from 'react';
import {
  CartContext
} from 'contexts/cart';
import Button from 'components/Button';
import StarRatingComponent from 'react-star-rating-component';

import { Container, ContainerImg, Img, TagOff, Details, Text } from './styles';

const Product = ({
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

  return <Container>
    <ContainerImg>
      {listPrice ? <TagOff >
        <span>OFF</span>
      </TagOff> : false}

      <Img {...{
        src: imageUrl,
        alt: "product1"
      }} />

    </ContainerImg>
    <Details>

      <Text {...{
        fontSize: '14px',
        color: "#7A7A7A"
      }}>{productName}</Text>

      <StarRatingComponent
        {...{
          name: productName,
          value: stars,
          starCount: 5,
          starColor: '#F8475F',
          emptyStarColor: '#ccc',
          editing: false
        }}
      />

      {listPrice ? <Text {...{
        fontSize: '12px',
        color: "#7A7A7A",
        textDecoration: "line-through"
      }}>de {listPrice.toLocaleString("pt-br", { style: 'currency', currency: 'BRL' })}</Text> : false}

      <Text {...{
        fontSize: '17px',
        color: "#000",
        fontWeight: "bold"
      }}>por {price.toLocaleString("pt-br", { style: 'currency', currency: 'BRL' })}</Text>

      {installments.length > 0 ? <Text {...{
        fontSize: '12px', color: "#7A7A7A"
      }}>ou em {installments[0].quantity}x de {installments[0].value.toLocaleString("pt-br", { style: 'currency', currency: 'BRL' })}</Text> : false}

    </Details>

    <Button {...{
      label: "Comprar",
      background: "#000",
      onClick: e => addItem()
    }} />

  </Container >;
}

export default memo(Product);