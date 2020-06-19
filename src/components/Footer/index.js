import React, { memo } from 'react';
import LocationInfo from '../LocationInfo';
import Contact from '../Contact';
import Copyright from '../Copyright';
import { Container } from './styles';

const Footer = () => <Container>
  <LocationInfo />
  <Contact />
  <Copyright />
</Container>;

export default memo(Footer);