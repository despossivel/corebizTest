import React, { memo } from 'react';
import Slider from 'components/Slider';
import Newsletter from 'components/Newsletter';
import BestSellers from 'components/BestSellers';

const Home = () => <>
    <Slider />
    <BestSellers />
    <Newsletter />
</>;

export default memo(Home);