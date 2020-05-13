import React from "react";
import * as S from "./styles";

const BoxTitle = ({ title }) => {
  return (
    <S.Container>
      <S.Label>{title}</S.Label>
    </S.Container>
  );
};

export default BoxTitle;
