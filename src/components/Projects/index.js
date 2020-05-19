import React from "react";
import * as S from "./styles";
import PageWidth from "../PageWidth";
import BoxItems from "../BoxItems";
import Alagym from "../../assets/img/alagym.png";
import Uarini from "../../assets/img/shopping.png";
import Title from "../Title/index";

const redirectPage = (link) => {
  window.open(`${link}`);
};

const Projects = () => {
  return (
    <S.Container id="section-projects" className="container-projects">
      <PageWidth>
        <Title title="Projetos" />
        <S.Col className="col-box-items-projects">
          <BoxItems
            onClick={() =>
              redirectPage(
                "https://github.com/patrikdev/alagym-react-native-1.0"
              )
            }
            iconStyle={{ height: "180px" }}
            title="AlaGym"
            text="O objetivo deste projeto é ser uma rede social para pessoas saudáveis, ainda está em desenvolvimento e a previsão é que estará disponível nas lojas em Agosto."
            icon={Alagym}
          />
        </S.Col>
        <S.Col className="col-box-items-projects">
          <BoxItems
            onClick={() =>
              redirectPage("https://github.com/patrikdev/uarini.com")
            }
            iconStyle={{ height: "180px" }}
            title="Uarini.com"
            text="O objetivo é importar produtos típicos das regiões norte e nordeste e vender aqui no sudeste. É apenas um projeto pessoal sem estimativa de conclusão."
            icon={Uarini}
          />
        </S.Col>
      </PageWidth>
    </S.Container>
  );
};

export default Projects;
