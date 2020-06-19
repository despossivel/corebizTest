import React, { memo } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

import Button from '../Button';

import { Container } from './styles';

const Contact = () => <Container>
    <Button label="ENTRE EM CONTATO" icon={<AiOutlineMail size={18} />} />
    <Button label="FALE COM O NOSSO CONSULTOR ONLINE" icon={<AiOutlinePhone size={18} />} />
</Container>;

export default memo(Contact);