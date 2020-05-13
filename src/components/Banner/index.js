import React from "react";
import * as S from "./styles";

const Banner = () => {
  return (
    <S.Container>
      <S.Col>
        <S.ContainerTitle>
          <S.Title>Patrik Matos </S.Title>
        </S.ContainerTitle>
      </S.Col>
      <S.Col>
        <S.ContainerImage>
          <S.Image />
        </S.ContainerImage>
      </S.Col>
    </S.Container>
  );
};

export default Banner;
