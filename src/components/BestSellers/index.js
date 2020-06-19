import React, { memo } from 'react';
import Title from '../TitleSection';
import Product from '../Product';
import { Container, Items, ButtonArrow } from './styles';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';


const BestSellers = () => {
  return <Container>

    <Title {...{
      text: 'Mais Vendidos',
      color: '#000',
      borderColor: '#ccc',
      paddingLeft: '5%'
    }} />

    <Items>
      <ButtonArrow>
        <AiOutlineLeft />
      </ButtonArrow>
      <Product />
      <Product />
      <Product />
      <Product />
      <ButtonArrow>
        <AiOutlineRight />
      </ButtonArrow>
    </Items>

  </Container>;
}

export default memo(BestSellers);