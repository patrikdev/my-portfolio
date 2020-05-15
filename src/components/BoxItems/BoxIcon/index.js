import React from "react";
import * as S from "./styles";

export const BoxIcon = ({ icon, iconStyle }) => {
  return (
    <S.Container className="container-box-icon" style={iconStyle}>
      <S.Image className="box-icon" icon={icon} />
    </S.Container>
  );
};

export default BoxIcon;
