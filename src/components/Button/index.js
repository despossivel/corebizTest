import React, { memo } from 'react';

import { Container } from './styles';

const Button = ({
  label,
  icon,
  ...rest
}) => <Container {...rest}>
    <span>{icon}</span>
    <span>{label}</span>
  </Container>;

export default memo(Button);