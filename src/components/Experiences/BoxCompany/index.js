import React from "react";
import * as S from "./styles";
import BoxIcon from "./BoxIcon/index";
import DetailsBox from "./DetailsBox";
import BoxText from "./BoxText";

const BoxCompany = ({ title, charge, start, end, onClick, text }) => {
  return (
    <S.Container onClick={onClick}>
      <S.Row>
        <BoxIcon />
      </S.Row>
      <S.Row>
        <S.Title>{title}</S.Title>
      </S.Row>
      <S.Row>
        <DetailsBox charge={charge} start={start} end={end} />
      </S.Row>
      <S.Row>
        <BoxText text={text} />
      </S.Row>
    </S.Container>
  );
};

export default BoxCompany;
