import React from "react";
import * as S from "./styles";
import BoxContent from "../BoxContent/index";
import PageWidth from "../PageWidth/index";
import AboutText from "./AboutText/index";
import MyTechnologies from "./MyTechnologies/index";
import NodeLogo from "../../assets/img/node.png";
import JSLogo from "../../assets/img/javaScript.png";
import Html5Logo from "../../assets/img/html5.png";
import Css3Logo from "../../assets/img/css3.jpg";
import ReactLogo from "../../assets/img/react.png";
import ReactNative from "../../assets/img/reactNative.png";
import Github from "../../assets/img/github.jpg";
import SubTitle from "../SubTitle/index";

const About = () => {
  return (
    <BoxContent title="Sobre">
      <PageWidth>
        <S.Container>
          <AboutText />
          <SubTitle label="Minhas Tecnologias" />
          <S.Col>
            <MyTechnologies image={ReactLogo} />
          </S.Col>
          <S.Col>
            <MyTechnologies image={ReactNative} />
          </S.Col>
          <S.Col>
            <MyTechnologies image={NodeLogo} />
          </S.Col>
          <S.Col>
            <MyTechnologies image={JSLogo} />
          </S.Col>
          <S.Col>
            <MyTechnologies image={Github} />
          </S.Col>
          <S.Col>
            <MyTechnologies image={Html5Logo} />
          </S.Col>
          <S.Col>
            <MyTechnologies image={Css3Logo} />
          </S.Col>
        </S.Container>
      </PageWidth>
    </BoxContent>
  );
};

export default About;
