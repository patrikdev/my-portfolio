import React from "react";
import * as S from "./styles";
import PageWidth from "../PageWidth/index";

const Banner = () => {
  return (
    <S.Container>
      <PageWidth>
        <S.Col>
          <S.ContainerTitle>
            <S.Title>Desenvolvedor React e React Native Junior</S.Title>
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
