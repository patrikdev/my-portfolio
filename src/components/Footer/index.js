import React from "react";
import * as S from "./styles";
import BoxContent from "../BoxContent";
import Contact from "./Contact/index";
import ImageFooter from "./ImageFooter";
import Developer from "./Developer";

const Footer = () => {
  return (
    <S.Container>
      <S.Col>
        <ImageFooter />
      </S.Col>
      <S.Col>
        <Contact />
      </S.Col>
      <S.Col>
        <Developer />
      </S.Col>
    </S.Container>
  );
};

export default Footer;
