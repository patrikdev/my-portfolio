import React from "react";
import * as S from "./styles";

const BoxTitle = ({ title }) => {
  return (
    <S.Container className="container-box-title">
      <S.Label className="box-title">{title}</S.Label>
    </S.Container>
  );
};

export default BoxTitle;
