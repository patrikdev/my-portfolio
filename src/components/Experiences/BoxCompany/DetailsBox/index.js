import React from "react";
import * as S from "./styles";

const DetailsBox = ({ charge, start, end }) => {
  return (
    <S.Container>
      <S.Row style={{ padding: "30px 0" }}>
        <S.Label style={{ textAlign: "center" }}>{charge}</S.Label>
      </S.Row>
      <S.Row>
        <S.Col>
          <S.Label>Inicio:</S.Label>
          <S.Label>{start}</S.Label>
        </S.Col>

        <S.Col>
          <S.Label>Até:</S.Label>
          <S.Label>{end}</S.Label>
        </S.Col>
      </S.Row>
    </S.Container>
  );
};

export default DetailsBox;
