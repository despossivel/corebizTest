import React, { memo } from 'react';
import SmartSlider from "react-smart-slider";

import BannerBlack from 'asserts/bannerBlack.png';
import Banner from 'asserts/banner.png';

import {
  Container,
  ContainerImgs,
  ContainerText,
  Children,
  Text,
  BannerBackground,
  BannerImg,
  AlingText
} from './styles';

const Slider = () => <Container>

  <SmartSlider
    slides={[
      {
        // url: Banner,
        childrenElem: <Children>
          <ContainerText>
            <AlingText>
              <Text {...{ color: "#fff", size: "14px" }} >Olá, o que você está buscando?</Text>
              <Text {...{ fontWeight: "bold", color: "#fff", size: "33px" }} >Criar ou migrar seu e-commerce?</Text>
            </AlingText>
          </ContainerText>
          <ContainerImgs>
            <BannerBackground src={BannerBlack} alt="w" />
            <BannerImg src={Banner} alt="dsf" />
          </ContainerImgs>
        </Children>
      },
      {
        url: Banner
      }
    ]}
    buttonShape="square" // round or square
  />

</Container>;

export default memo(Slider);