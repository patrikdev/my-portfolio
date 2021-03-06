import React from "react";
import * as S from "./styles";
import PageWidth from "../PageWidth/index";
import BoxCompany from "./BoxCompany";
import Companies from "./ListCompanies.json";
import Title from "../Title/index";

const redirectPage = (link) => {
  window.open(`${link}`);
};

const Experiences = () => {
  return (
    <S.Container id="section-experiences" className="container-experiences">
      <PageWidth>
        <Title title="Experiências" />
        {Companies.companies.map((item) => {
          return (
            <S.ContainerBox className="col-box-company" key={item.id}>
              <BoxCompany
                onClick={() => redirectPage(item.link)}
                title={item.title}
                charge={item.charge}
                start={item.start}
                end={item.end}
                text={item.text}
              />
            </S.ContainerBox>
          );
        })}
      </PageWidth>
    </S.Container>
  );
};

export default Experiences;
