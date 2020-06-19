import React, { memo } from 'react';

import { Container } from './styles';

const TitleSection = ({
    text,
    ...rest
}) => {
    return <Container {...rest}>
        <b>{text}</b>
        <span></span>
    </Container>;
}

export default memo(TitleSection);