import React from "react";
import * as S from "./styles.js";
import BoxIcon from "./BoxIcon/index";
import BoxTitle from "./BoxTitle/index.js";
import BoxText from "./BoxText/index.js";

const BoxItems = (props) => {
  return (
    <S.Container>
      <BoxIcon icon={props.icon} />
      <BoxTitle title={props.title} />
      <BoxText text={props.text} />
    </S.Container>
  );
};

export default BoxItems;
