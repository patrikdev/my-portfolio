import React from "react";
import * as S from "./styles";
import BoxContent from "../BoxContent/index";
import PageWidth from "../PageWidth/index";
import AboutImage from "./AboutImage/index";
import AboutText from "./AboutText/index";

const About = () => {
  return (
    <BoxContent>
      <PageWidth>
        <S.Title>Sobre</S.Title>
        <S.Container>
          <S.Col>
            <AboutImage />
          </S.Col>
          <S.Col style={{ flex: "1" }}>
            <AboutText />
          </S.Col>
        </S.Container>
      </PageWidth>
    </BoxContent>
  );
};

export default About;
