import React from "react";
import * as S from "./styles";
import Menu from "../../components/Menu";
import About from "../../components/About";
import Content from "../../components/Content/index";
import Banner from "../../components/Banner/index";
import MyExperiences from "../../components/MyExperiences";

const Home = () => {
  return (
    <S.Container>
      <Menu />
      <Content>
        <Banner />
        <About />
        <MyExperiences />
      </Content>
    </S.Container>
  );
};

export default Home;
