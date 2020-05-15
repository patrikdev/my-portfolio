import React from "react";
import * as S from "./styles";

const DetailsBox = ({ charge, start, end }) => {
  return (
    <S.Container className="container-details-box-company">
      <S.Row className="row-box-details" style={{ padding: "30px 0" }}>
        <S.Label className="value-box-details" style={{ textAlign: "center" }}>
          {charge}
        </S.Label>
      </S.Row>
      <S.Row className="row-box-details">
        <S.Col className="col-box-details">
          <S.Label className="label-box-details">Inicio:</S.Label>
          <S.Label className="value-box-details">{start}</S.Label>
        </S.Col>

        <S.Col className="col-box-details">
          <S.Label className="label-box-details">Até:</S.Label>
          <S.Label className="value-box-details">{end}</S.Label>
        </S.Col>
      </S.Row>
    </S.Container>
  );
};

export default DetailsBox;
