import React from "react";
import * as S from "./styles";
import BoxContent from "../BoxContent";
import Contact from "./Contact/index";

const Footer = () => {
  return (
    <S.Container>
      <BoxContent style={{ backgroundColor: "#020230" }}>
        <S.Col></S.Col>
        <S.Col>
          <Contact />
        </S.Col>
        <S.Col>t</S.Col>
      </BoxContent>
    </S.Container>
  );
};

export default Footer;
