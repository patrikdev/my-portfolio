import React from "react";
import * as S from "./styles";
import BoxContent from "../BoxContent/index";
import PageWidth from "../PageWidth/index";
import AboutText from "./AboutText/index";

const About = () => {
  return (
    <BoxContent title="Sobre">
      <PageWidth>
        <S.Container>
          <AboutText />
        </S.Container>
      </PageWidth>
    </BoxContent>
  );
};

export default About;
