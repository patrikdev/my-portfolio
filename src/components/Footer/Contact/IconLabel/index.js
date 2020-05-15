import React from "react";
import * as S from "./styles";

const IconLabel = ({ icon, label }) => {
  return (
    <S.Container className="container-icon-label-footer">
      <S.ContainerIcon className="container-contact-icon-footer">
        <S.Icon className="icon-footer" icon={icon} />
      </S.ContainerIcon>
      <S.ContainerLabel className="container-contact-label-footer">
        <S.Label className="label-contact-footer">{label}</S.Label>
      </S.ContainerLabel>
    </S.Container>
  );
};

export default IconLabel;
