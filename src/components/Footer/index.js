import React from "react";
import * as S from "./styles";
import Contact from "./Contact/index";
import ImageFooter from "./ImageFooter";
import Developer from "./Developer";

const Footer = () => {
  return (
    <S.Container className="container-footer">
      <S.Col className="col-footer-image">
        <ImageFooter />
      </S.Col>
      <S.Col className="col-footer-contact">
        <Contact />
      </S.Col>
      <S.Col className="col-footer-information">
        <Developer />
      </S.Col>
    </S.Container>
  );
};

export default Footer;
