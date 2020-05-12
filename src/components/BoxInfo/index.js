import React from "react";
import * as S from "./styles";
import BoxIcon from "./BoxIcon/index";
import DetailsBox from "./DetailsBox";
import BoxText from "./BoxText";

const BoxInfo = () => {
  return (
    <S.Container>
      <S.Row>
        <BoxIcon />
      </S.Row>
      <S.Row>
        <S.Title>Action Telecom</S.Title>
      </S.Row>
      <S.Row>
        <DetailsBox />
      </S.Row>
      <S.Row>
        <BoxText />
      </S.Row>
    </S.Container>
  );
};

export default BoxInfo;
