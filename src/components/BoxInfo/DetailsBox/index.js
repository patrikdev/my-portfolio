import React from "react";
import * as S from "./styles";

const DetailsBox = () => {
  return (
    <S.Container>
      <S.Col>
        <S.Row>
          <div>Cargo:</div>
        </S.Row>
        <S.Row>
          <div>Inicio:</div>
        </S.Row>
        <S.Row>
          <div>Fim:</div>
        </S.Row>
      </S.Col>
      <S.Col>
        <S.Row>
          <div>Auxiliar Técnico</div>
        </S.Row>
        <S.Row>
          <div>22/12/2020</div>
        </S.Row>
        <S.Row>
          <div>22/12/2020</div>
        </S.Row>
      </S.Col>
    </S.Container>
  );
};

export default DetailsBox;
