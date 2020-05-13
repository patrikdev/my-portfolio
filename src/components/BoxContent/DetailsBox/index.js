import React from "react";
import * as S from "./styles";

const DetailsBox = (props) => {
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
          <div>{props.charge}</div>
        </S.Row>
        <S.Row>
          <div>{props.start}</div>
        </S.Row>
        <S.Row>
          <div>{props.end}</div>
        </S.Row>
      </S.Col>
    </S.Container>
  );
};

export default DetailsBox;
