import React from "react";
import * as S from "./styles";
import PageWidth from "../PageWidth/index";

const Banner = () => {
  return (
    <S.Container>
      <PageWidth>
        <S.Col>
          <S.ContainerTitle>
            <S.TitleSize22>Desenvolvedor</S.TitleSize22>
            <S.Title>React</S.Title>
            <S.TitleSize18>&nbsp;e&nbsp;</S.TitleSize18>
            <S.Title>React Native</S.Title>
          </S.ContainerTitle>
        </S.Col>
        <S.Col>
          <S.ContainerImage>
            <S.Image />
          </S.ContainerImage>
        </S.Col>
      </PageWidth>
    </S.Container>
  );
};

export default Banner;
