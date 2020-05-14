import React from "react";
import * as S from "./styles";

const IconLabel = ({ icon, label }) => {
  return (
    <S.Container>
      <S.ContainerIcon>
        <S.Icon icon={icon} />
      </S.ContainerIcon>
      <S.ContainerLabel>
        <S.Label>{label}</S.Label>
      </S.ContainerLabel>
    </S.Container>
  );
};

export default IconLabel;
