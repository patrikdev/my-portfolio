import React from "react";
import * as S from "./styles";

const TextCourse = ({ text }) => {
  return (
    <S.Container>
      <S.Label>{text}</S.Label>
    </S.Container>
  );
};

export default TextCourse;
