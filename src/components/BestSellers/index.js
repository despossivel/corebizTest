import React, { memo, useEffect, useState, useMemo } from 'react';
import Title from '../TitleSection';
import Product from '../Product';
import Loading from '../Loading';
import { Container, Items, ButtonArrow } from './styles';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import {
  getProducts
} from '../../services/api';

const BestSellers = () => {
  const [load, setLoad] = useState(true);
  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      try {

        const response = await getProducts();
        switch (response.status) {
          case 200:
            setProducts(response.data);
            break;

          case 404:
            console.log('Nada encontradoi')
            break;

          default:
            console.error('Aconteceu alguma coisa', response.data)
            break;
        }
        setLoad(false)

      } catch (error) {
        console.error(error)
      }
    })()
  }, [])


  const productRender = useMemo(() => products.map((product) => <Product {...product} />), [products])


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
      {load ? <Loading /> : productRender}
      <ButtonArrow>
        <AiOutlineRight />
      </ButtonArrow>
    </Items>

  </Container>;
}

export default memo(BestSellers);