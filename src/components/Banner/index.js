import React from "react";
import * as S from "./styles";
import PageWidth from "../PageWidth/index";

const Banner = () => {
  return (
    <S.Container className="container-banner">
      <PageWidth>
        <S.Col className="col-banner-labels">
          <S.ContainerLabels className="container-banner-labels">
            <S.TitleSize22 className="title-size22-banner">
              Desenvolvedor
            </S.TitleSize22>
            <S.Title className="title-banner">React</S.Title>
            <S.TitleSize18 className="title-size18-banner">
              &nbsp;e&nbsp;
            </S.TitleSize18>
            <S.Title2 className="title-banner">React Native</S.Title2>
          </S.ContainerLabels>
        </S.Col>
        <S.Col className="col-banner-image">
          <S.ContainerImage className="container-banner-image">
            <S.Image className="banner-image" />
          </S.ContainerImage>
        </S.Col>
      </PageWidth>
    </S.Container>
  );
};

export default Banner;
