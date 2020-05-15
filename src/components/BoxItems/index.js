import React from "react";
import * as S from "./styles.js";
import BoxIcon from "./BoxIcon/index";
import BoxTitle from "./BoxTitle/index.js";
import BoxText from "./BoxText/index.js";

const BoxItems = ({ icon, title, text, iconStyle, onClick }) => {
  return (
    <S.Container onClick={onClick}>
      <BoxIcon iconStyle={iconStyle} icon={icon} />
      <BoxTitle title={title} />
      <BoxText text={text} />
    </S.Container>
  );
};

export default BoxItems;
