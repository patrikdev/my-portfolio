import React from "react";
import * as S from "./styles";

const TitleCourse = ({ title }) => {
  return (
    <S.Container>
      <S.Label>{title}</S.Label>
    </S.Container>
  );
};

export default TitleCourse;
