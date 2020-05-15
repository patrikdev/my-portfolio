import React from "react";
import * as S from "./styles";

const BoxText = (props) => {
  return (
    <S.Container className="container-box-text-company">
      <S.Label className="box-text-company">{props.text}</S.Label>
    </S.Container>
  );
};

export default BoxText;
