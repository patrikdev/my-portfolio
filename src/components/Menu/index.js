import React from "react";
import * as S from "./styles";
import PageWidth from "../PageWidth/index";

const Menu = () => {
  return (
    <S.Container>
      <PageWidth>
        <S.ContainerLogo>
          <S.Logo />
        </S.ContainerLogo>
        <S.ContainerLabel>
          <S.Label>Home</S.Label>
          <S.Label>Sobre</S.Label>
          <S.Label>Experiências</S.Label>
          <S.Label>Cursos</S.Label>
          <S.Label>Projetos</S.Label>
        </S.ContainerLabel>
      </PageWidth>
    </S.Container>
  );
};

export default Menu;
