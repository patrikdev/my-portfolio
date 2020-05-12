import React from "react";
import * as S from "./styles";
import BoxContent from "../BoxContent";
import PageWidth from "../PageWidth/index";
import BoxInfo from "../BoxInfo/index";

const MyExperiences = () => {
  return (
    <BoxContent title="Experiências" style={{ backgroundColor: "#ffffff" }}>
      <PageWidth>
        <S.Container>
          <BoxInfo />
          <BoxInfo />
          <BoxInfo />
        </S.Container>
      </PageWidth>
    </BoxContent>
  );
};

export default MyExperiences;
