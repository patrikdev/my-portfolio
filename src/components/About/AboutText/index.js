import React from "react";
import * as S from "./styles";

const AboutText = () => {
  return (
    <S.Container className="container-about-text">
      <S.Label className="about-text">
        Seja bem-vindo ao meu portifólio. Tenho 23 anos, estudo programação há 2
        anos, desenvolvo aplicações com React, React Native e APIs em Node.
        Atualmente meu foco está em me tornar um bom programador front-end
        criando aplicativos com React Native.
      </S.Label>
    </S.Container>
  );
};

export default AboutText;
