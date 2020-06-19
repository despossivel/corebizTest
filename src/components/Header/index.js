import React, { memo } from 'react';
import Logo from '../Logo';
import Search from '../Search';
import Actions from '../HeaderActions';
import { Container } from './styles';


const Header = () => <Container>
  <Logo />
  <Search />
  {/* <CartContext></CartContext> */}
  <Actions />
</Container>;

export default memo(Header);