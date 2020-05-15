import React from "react";
import * as S from "./styles";
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
import Title from "../Title/index";

const About = () => {
  return (
    <S.Container id="section-about" className="container-about">
      <PageWidth>
        <Title title="Sobre" />
        <AboutText />
        <SubTitle label="Minhas Tecnologias" />
        <S.Col className="col-icon-about">
          <MyTechnologies image={ReactLogo} />
        </S.Col>
        <S.Col className="col-icon-about">
          <MyTechnologies image={ReactNative} />
        </S.Col>
        <S.Col className="col-icon-about">
          <MyTechnologies image={NodeLogo} />
        </S.Col>
        <S.Col className="col-icon-about">
          <MyTechnologies image={JSLogo} />
        </S.Col>
        <S.Col className="col-icon-about">
          <MyTechnologies image={Github} />
        </S.Col>
        <S.Col className="col-icon-about">
          <MyTechnologies image={Html5Logo} />
        </S.Col>
        <S.Col className="col-icon-about">
          <MyTechnologies image={Css3Logo} />
        </S.Col>
      </PageWidth>
    </S.Container>
  );
};

export default About;
