import React from "react";
import * as S from "./styles";
import Menu from "../../components/Menu";
import About from "../../components/About";
import Content from "../../components/Content/index";
import Banner from "../../components/Banner/index";

const Home = () => {
  return (
    <S.Container>
      <Menu />
      <Content>
        <Banner />
        <About />
      </Content>
    </S.Container>
  );
};

export default Home;
