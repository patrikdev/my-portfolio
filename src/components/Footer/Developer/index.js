import React from "react";
import * as S from "./styles";
import Facebook from "../../../assets/svg/facebook.svg";
import Linkedin from "../../../assets/svg/linkedin.svg";
import Github from "../../../assets/svg/github.svg";

const Developer = () => {
  return (
    <S.Container>
      <S.ContainerTitle>
        <S.Title>Deselvolvedor</S.Title>
      </S.ContainerTitle>
      <S.ContainerLabel>
        <S.Label>Deselvolvido por Patrik Matos</S.Label>
      </S.ContainerLabel>
      <S.ContainerLabel>
        <S.Label>Todos os Direitos Reservados.</S.Label>
      </S.ContainerLabel>
      <S.ContainerIcons>
        <S.ContainerIcon>
          <S.Icon icon={Facebook} />
        </S.ContainerIcon>
        <S.ContainerIcon>
          <S.Icon icon={Linkedin} />
        </S.ContainerIcon>
        <S.ContainerIcon>
          <S.Icon icon={Github} />
        </S.ContainerIcon>
      </S.ContainerIcons>
    </S.Container>
  );
};

export default Developer;
