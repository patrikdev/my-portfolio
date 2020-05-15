import React from "react";
import * as S from "./styles";

export const LogoCourse = ({ icon, iconStyle }) => {
  return (
    <S.Container style={iconStyle}>
      <S.Image icon={icon} />
    </S.Container>
  );
};

export default LogoCourse;
