import React from "react";
import * as S from "./styles";
import Facebook from "../../../assets/svg/facebook.svg";
import Linkedin from "../../../assets/svg/linkedin.svg";
import Github from "../../../assets/svg/github.svg";

const Developer = () => {
  return (
    <S.Container className="container-information-developer">
      <S.ContainerTitle className="container-title-developer">
        <S.Title className="title-developer">Deselvolvedor</S.Title>
      </S.ContainerTitle>
      <S.ContainerLabel className="container-information-create">
        <S.Label className="label-information">
          Deselvolvido por Patrik Matos
        </S.Label>
      </S.ContainerLabel>
      <S.ContainerLabel className="container-information-rights">
        <S.Label className="label-rights">
          Todos os Direitos Reservados.
        </S.Label>
      </S.ContainerLabel>
      <S.ContainerIcons className="container-all-icons-social">
        <S.ContainerIcon className="container-icon">
          <S.Icon className="icon-social" icon={Facebook} />
        </S.ContainerIcon>
        <S.ContainerIcon className="col-footer-contact">
          <S.Icon className="icon-social" icon={Linkedin} />
        </S.ContainerIcon>
        <S.ContainerIcon className="col-footer-contact">
          <S.Icon className="icon-social" icon={Github} />
        </S.ContainerIcon>
      </S.ContainerIcons>
    </S.Container>
  );
};

export default Developer;
