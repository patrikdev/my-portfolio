import React from "react";
import * as S from "./styles";

const BoxText = ({ text }) => {
  return (
    <S.Container>
      <S.Label>{text}</S.Label>
    </S.Container>
  );
};

export default BoxText;
