import React, { memo } from 'react';
import Logo from '../Logo';
import Search from '../Search';
import Actions from '../HeaderActions';
import { Container } from './styles';

const Header = () => {
  return <Container>


    <Logo />
    <Search />
    <Actions />

  </Container>;
}

export default memo(Header);