import React, { useState } from "react";
import * as S from "./styles";
import BoxContent from "../BoxContent";
import PageWidth from "../PageWidth/index";
import BoxInfo from "./BoxCompanies";
import Companies from "./ListCompanies.json";

const MyExperiences = () => {
  return (
    <BoxContent title="Experiências" style={{ backgroundColor: "#ffffff" }}>
      <PageWidth>
        {Companies.companies.map((item) => {
          return (
            <S.Container key={item.id}>
              <BoxInfo
                title={item.title}
                charge={item.charge}
                start={item.start}
                end={item.end}
                text={item.text}
              />
            </S.Container>
          );
        })}
      </PageWidth>
    </BoxContent>
  );
};

export default MyExperiences;
