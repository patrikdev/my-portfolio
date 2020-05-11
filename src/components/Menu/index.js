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
        <S.ContainerLabel></S.ContainerLabel>
      </PageWidth>
    </S.Container>
  );
};

export default Menu;
