import React from "react";
import * as S from "./styles";

const BoxText = ({ text }) => {
  return (
    <S.Container className="container-box-text">
      <S.Label className="box-text">{text}</S.Label>
    </S.Container>
  );
};

export default BoxText;
