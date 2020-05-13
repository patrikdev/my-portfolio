import React from "react";
import * as S from "./styles";
import Menu from "../../components/Menu";
import About from "../../components/About";
import Content from "../../components/Content";
import Banner from "../../components/Banner";
import MyExperiences from "../../components/MyExperiences";
import Courses from "../../components/Courses";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer/index";

const Home = () => {
  return (
    <S.Container>
      <Menu />
      <Content>
        <Banner />
        <About />
        <MyExperiences />
        <Courses />
        <Projects />
        <Footer />
      </Content>
    </S.Container>
  );
};

export default Home;
