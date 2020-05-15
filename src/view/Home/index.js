import React from "react";
import * as S from "./styles";
import Menu from "../../components/Menu";
import About from "../../components/About";
import Content from "../../components/Content";
import Banner from "../../components/Banner";
import Experiences from "../../components/Experiences";
import Courses from "../../components/Courses";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer/index";

const Home = () => {
  return (
    <S.Container id="section-home" className="container-home">
      <Menu />
      <Content>
        <Banner />
        <About />
        <Experiences />
        <Courses />
        <Projects />
        <Footer />
      </Content>
    </S.Container>
  );
};

export default Home;
