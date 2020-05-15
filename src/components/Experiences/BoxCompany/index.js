import React from "react";
import * as S from "./styles";
import BoxIcon from "./BoxIcon/index";
import DetailsBox from "./DetailsBox";
import BoxText from "./BoxText";

const BoxCompany = ({ title, charge, start, end, onClick, text }) => {
  return (
    <S.Container className="container-box-company" onClick={onClick}>
      <S.Row className="row-box-company">
        <BoxIcon />
      </S.Row>
      <S.Row className="row-box-company">
        <S.Title className="title-box-company">{title}</S.Title>
      </S.Row>
      <S.Row className="row-box-company">
        <DetailsBox charge={charge} start={start} end={end} />
      </S.Row>
      <S.Row className="row-box-company">
        <BoxText text={text} />
      </S.Row>
    </S.Container>
  );
};

export default BoxCompany;
