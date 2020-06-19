import React, { memo } from 'react';
import Img from '../../asserts/logo.png'
import { Container } from './styles';

const Logo = () => <Container src={Img} />;

export default memo(Logo);