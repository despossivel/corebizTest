import React, { memo } from 'react';
import Title from '../TitleSection';
import Product from '../Product';
import { Container, Items } from './styles';


const BestSellers = () => {
  return <Container>
    
    <Title {...{
      text: 'Mais Vendidos',
      color: '#000',
      borderColor: '#ccc',
      paddingLeft: '5%'
    }} />

    <Items>

      <Product />
      <Product />
      <Product />
      <Product />
      
    </Items>

  </Container>;
}

export default memo(BestSellers);