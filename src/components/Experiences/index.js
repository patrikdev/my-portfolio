import React from "react";
import * as S from "./styles";
import BoxContent from "../BoxContent";
import PageWidth from "../PageWidth/index";
import BoxCompany from "./BoxCompany";
import Companies from "./ListCompanies.json";
import Title from "../Title/index";

const redirectPage = (link) => {
  window.open(`${link}`);
};

const Experiences = () => {
  return (
    <S.Container>
      <PageWidth>
        <Title title="Experiências" />
        {Companies.companies.map((item) => {
          return (
            <S.ContainerBox key={item.id}>
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
