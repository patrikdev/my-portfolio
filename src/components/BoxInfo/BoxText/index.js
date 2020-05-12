import React from "react";
import * as S from "./styles";

const BoxText = (props) => {
  return (
    <S.Container>
      <S.Label>{props.text}</S.Label>
    </S.Container>
  );
};

export default BoxText;
