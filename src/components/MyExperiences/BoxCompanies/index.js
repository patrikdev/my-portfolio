import React from "react";
import * as S from "./styles";
import BoxIcon from "./BoxIcon/index";
import DetailsBox from "../../BoxContent/DetailsBox";
import BoxText from "./BoxText";

const BoxInfo = (props) => {
  return (
    <S.Container>
      <S.Row>
        <BoxIcon />
      </S.Row>
      <S.Row>
        <S.Title>{props.title}</S.Title>
      </S.Row>
      <S.Row>
        <DetailsBox charge={props.charge} start={props.start} end={props.end} />
      </S.Row>
      <S.Row>
        <BoxText text={props.text} />
      </S.Row>
    </S.Container>
  );
};

export default BoxInfo;
